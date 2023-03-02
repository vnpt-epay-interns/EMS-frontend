<script setup>
    import axios from 'axios';
    import { ref, watchEffect, inject } from 'vue';
    import { VUE_APP_BACKEND_URL } from '../../../env'

    const store = inject('store')
    const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')
    const employeeName = ref('')
    const flag = ref('')
    const props = defineProps({
        task: Object
    })

    watchEffect(async () => {
        const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/employee/${props.task.employeeId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
        })

        employeeName.value = response.data.data.firstName + ' ' + response.data.data.lastName

        flag.value = props.task.priority === 'LOW' ? 'priority-low' : props.task.priority === 'HIGH' ? 'priority-high' : 'priority-medium'
    })
</script>

<template>
    <div class='task'>
        <div class="task__content">

            <h1 class="task__title">
                <span class="project-name">EMS</span> 
                {{ task.title }}
            </h1>

            <p class="task__description">{{ task.description }}</p>
            <p class="task__assignee">{{ employeeName }}</p>
        </div>
        <div class="task-info">
            <div class="reports" v-if="store.state.user.role==='MANAGER'">
                <font-awesome-icon icon="fa-solid fa-newspaper" />
                3
            </div>
            <div class="priority" :id="flag">
                <font-awesome-icon class="fa" icon="fa-solid fa-flag" />
            </div>

            <div class="due">
                <font-awesome-icon class="fa" icon="fa-solid fa-clock" />
                {{ task.endDate }}
            </div>

            <div class="completion">
                <font-awesome-icon class="fa" icon="fa-solid fa-circle-check" />
                {{ task.completion }}%
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.task {
    border-radius: 5px;
    width: 300px;
    padding: 20px 10px 10px 10px;
    background: white;

    .task__content {
        margin-bottom: 10px;

        .project-name {
            color: #E96479;
            font-size: 12px;
            border-right: 0.7px solid gray;
            padding-right: 5px;
        }

        .task__title {
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 10px;
        }

        .task__assignee {
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            background: #0013FE;
            min-width: 70px;
            border-radius: 5px;
            text-align: center;
            width: fit-content;
            padding: 0 5px;
            color: white;
        }

        .task__description {
            font-size: 12px;
            color: #1D2D35;
        }

    }

    .task-info {
        margin-top: 10px;
        border-top: 1px solid #ccc;
        padding: 10px 5px 0px 5px;
        width: 100%;
        display: flex;
        gap: 25px;

        div {
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 5px;

        }

        #priority-high {
            color: #FF0000;
        }

        #priority-medium {
            color: #FFA500;
        }

        #priority-low {
            color: #76CC8E;
        }
    }
}
</style>