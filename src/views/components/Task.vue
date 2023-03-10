<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const flag = ref('')
const store = inject('store')
const props = defineProps({
    task: Object
})
const shortProjectName = ref('')
const shorthand = (projectName) => {
    let shortName = ''
    let words = projectName.split(' ')
    words.forEach(word => {
        shortName += word[0]
    })
    return shortName
}

shortProjectName.value = shorthand(props.task.projectName)

flag.value = props.task.priority === 'LOW' ? 'priority-low' : props.task.priority === 'HIGH' ? 'priority-high' : 'priority-medium'

// delete task feature
// const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')
// const closeModal = async () => {
//     await axios.delete(`${VUE_APP_BACKEND_URL}/manager/tasks/delete/${props.task.id}`, {
//         headers: {
//             "Authorization": `Bearer ${token}`,
//             'Content-Type': 'application/json'
//         }
//     })
    
// }

const viewTask = () => {   
    store.state.task = props.task    
    router.push({
        name: "TaskDetailsPage",
        params: {
            id: props.task.id
        }
    })
}

const viewReports = () => {
    router.push({
        name: "ViewAllReportsForTaskPage",
        params: {id: props.task.id}
    })
}

</script>

<template>
    <div class='task' @click="viewTask">
        <!-- <div class="close__modal__btn" @click="closeModal">&times;</div> -->
        <div class="task__content" :title="task.description">
            <h1 class="task__title">
                <span class="project-name" title="Project name">{{ shortProjectName }}</span>
                <span class="title" title="Title">{{ task.title }}</span>
            </h1>

            <p class="task__assignee" title="Asignee" v-show="store.state.user.role === 'MANAGER'">{{ task.employeeName }}
            </p>
        </div>

        <div class="task-info">
                <div class="reports" title="Report" @click.stop="viewReports">
                    <font-awesome-icon icon="fa-solid fa-newspaper" /> {{ task.numberReports }}
                </div>
                <div class="priority" :id="flag" :title="task.priority">
                    <font-awesome-icon class="fa" icon="fa-solid fa-flag" />
                </div>

                <div class="due" title="Due date">
                    <font-awesome-icon class="fa" icon="fa-solid fa-clock" />
                    {{ task.endDate }}
                </div>

                <div class="completion" title="Completion">
                    <font-awesome-icon class="fa" icon="fa-solid fa-circle-check" />
                    {{ task.completion }}%
                </div>
            </div>
        </div>
    
</template>

<style lang="scss" scoped>
.task {
    position: relative;
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
    background: white;
    cursor: pointer;
    // margin: 10px 0;
    .task__content {

        display: flex;
        flex-direction: column;
        gap: 10px;

        .task__title {
            font-size: 15px;
            font-weight: 700;

            .project-name {
                color: #E96479;
                font-size: 12px;
                border-right: 0.7px solid gray;
                padding-right: 5px;
            }

            .title {
                padding-left: 5px;
            }
        }

        .task__assignee {
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            background: #0013FE;
            min-width: 70px;
            border-radius: 5px;
            text-align: center;
            width: fit-content;
            padding: 0 5px;
            color: white;;
        }

        .task__description {
            font-size: 12px;
            color: #1D2D35;
            padding: 5px;
        }

    }

    .task-info {
        margin-top: 10px;
        padding: 10px 5px 0px 5px;
        width: 100%;
        display: flex;
        gap: 10px;
        border-top: 1px solid #ccc;

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

        .reports {
            z-index: 1000;
        }
    }

    .close__modal__btn {
        position: absolute;
        border-top-right-radius: 5px;
        padding: 5px 10px;
        font-size: 10px;
        top: 0px;
        right: 0px;
        cursor: pointer;
        background: rgb(236, 105, 105);
        color: white;
        z-index: 10000;

        &:hover {
            background: rgb(255, 0, 0);
        }
    }
}

@media (max-width: 1400px) {
    .task {

        .task__content {

            .task__title {
                font-size: 12px;

                .project-name {
                    font-size: 11px;
                }
            }

            .task__assignee {
                font-size: 10px;
                border-radius: 3px;
                min-width: 50px;
            }

            .task__description {
                font-size: 5px;
                color: #1D2D35;
                padding: 5px;
            }

        }

        .task-info {
            width: 100%;
            display: flex;
            gap: 10px;
            border-top: 1px solid #ccc;

            div {
                font-size: 11px;
            }
        }
    }
}
</style>