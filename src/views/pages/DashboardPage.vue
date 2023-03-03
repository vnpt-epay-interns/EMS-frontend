<script setup>
    import { ref, watchEffect, inject } from 'vue'
    import Task from '../components/Task.vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    import { VUE_APP_BACKEND_URL } from '../../../env'

    const store = inject('store')
    const router = useRouter()
    const isNewTask = ref(true)
    const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    const tasks = ref([])
    const tasksByStatus = ref({
        "NEW": [],
        "IN-PROGRESS": [],
        "DONE": [],
        "READY FOR REVIEW": []
    })

    const navigateNewTaskPage = () => {
        isNewTask.value = true
        router.push({
            name: "TaskPage"
        })
    }

    const viewTask = (t) => {
        store.state.task = t
        isNewTask.value = false
        
        router.push({
            name: "TaskDetailsPage",
            params: {
                id: t.id
            }
        })
    }

    store.state.isLoading = true
    watchEffect(async () => {
        // prepare tasks for app dashboard
        if (store.state.user.role === 'EMPLOYEE') {
            const allTasksResponse = await axios.get(`${VUE_APP_BACKEND_URL}/api/employee/get-all-tasks`, options)
            tasks.value = allTasksResponse.data.data
        }

        if (store.state.user.role === 'MANAGER') {
            // get all employees for manager in TaskPage
            const allEmployeesResponse = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/get-all-tasks`, options)
            tasks.value = allEmployeesResponse.data.data
        }

        if (tasks.value) {
            tasks.value.filter(task => {
                if (task.status === "NEW") {
                    tasksByStatus.value["NEW"].push(task)
                } else if (task.status === "IN_PROGRESS") {
                    tasksByStatus.value["IN-PROGRESS"].push(task)
                } else if (task.status === "DONE") {
                    tasksByStatus.value["DONE"].push(task)
                } else if (task.status === "READY_FOR_REVIEW") {
                    tasksByStatus.value["READY FOR REVIEW"].push(task)
                }
            })
        }
        
    })
    store.state.isLoading = false

</script>

<template>
    <div class="dashboard">
        <div class="heading">
            <div class="left__side">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <input type="text" placeholder="Search items">
            </div>
            <div class="right__side" v-if="store.state.user.role==='MANAGER'">
                <button class="add__task__btn" @click="navigateNewTaskPage()">New Task</button>
            </div>
        </div>

        <div class="column-container">
            <div class="column" v-for="[status, tasks] of Object.entries(tasksByStatus)">
                <div class="status__info">
                    <h2 class="status__name">{{ status }}</h2>
                    <p class="status__amount">{{ tasks.length }}</p>
                </div>

                <div class="task-container" v-for="task in tasks">
                    <Task :task="task" @click="viewTask(task)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dashboard {
    padding: 10px;
    // padding: 20px;
    .heading {
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 20px 0;

        .left__side {
            border: 0.5px solid #ccc;
            padding: 5px 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;

            input {
                font-size: 14px;
                border: none;
                margin-top: 0;
                margin-left: 5px;
                padding: 0;

                &:focus {
                    outline: none;
                }
            }
        }

        .right__side {
            .add__task__btn {
                font-size: 15px;
                cursor: pointer;
                border: none;
                background: #0013FE;
                min-width: 70px;
                border-radius: 5px;
                text-align: center;
                width: fit-content;
                padding: 5px 10px;
                color: white;
            }
        }

    }

    .column-container {
        display: flex;
        gap: 10px;

        .column {
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: #E6ECF0;
            width: fit-content;
            padding: 10px;
            min-height: 750px;
            min-width: 250px;
            height: 95%;
            border-radius: 10px;

            .status__info {
                display: flex;
                align-items: center;
                align-items: center;
                gap: 20px;

                .status__name {
                    font-size: 15px;
                    font-weight: 700;
                }

                .status__amount {
                    font-size: 13px;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    font-weight: 500;
                    background: #D5D5D5;
                    border-radius: 50%;
                }
            }

            .task-container {
                display: flex;
                flex-direction: column;
                gap: 10px;
                cursor: pointer;
            }
        }

    }
}
</style>