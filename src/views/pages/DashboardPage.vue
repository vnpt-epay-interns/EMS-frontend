<script setup lang="ts">
    import { ref, watchEffect } from 'vue'
    import Task from '../components/Task.vue';
    import axios from 'axios'
    import router from '../.././router/index'
    import { VUE_APP_BACKEND_URL } from '../../../env'
    import store from '../../store/store';

    const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')

    const tasks = ref([])
    const tasksByStatus = ref({
        "NEW": [],
        "IN-PROGRESS": [],
        "DONE": [],
        "READY FOR REVIEW": []
    })

    const options = {
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
    }

    watchEffect(async () => {
        const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/employee/get-tasks`, options)
        tasks.value = response.data.data

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
        
    })

</script>

<template>
    <div class="dashboard">
        <div class="heading">
            <div class="left__side">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <input type="text" placeholder="Search items">
            </div>
            <div class="right__side">
                <button class="add__task__btn" @click="router.push('/task')">New Task</button>
            </div>
        </div>

        <div class="column-container">
            <div class="column" v-for="[status, tasks] of Object.entries(tasksByStatus)">
                <div class="status__info">
                    <h2 class="status__name">{{ status }}</h2>
                    <p class="status__amount">{{ tasks.length }}</p>
                </div>

                <div class="task-container" >
                    <Task v-for="task in tasks" :task="task"/>
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
                border: none;
                margin-top: 0;

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
            background: #E6ECF0;
            width: fit-content;
            padding: 10px 20px;
            min-height: 750px;
            // min-width: 360px;
            height: 95%;
            border-radius: 10px;
            // overflow-y: scroll;

            .status__info {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
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