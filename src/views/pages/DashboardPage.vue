<script setup>
import { ref, onMounted, inject, watch, watchEffect } from 'vue'
import Task from '../components/Task.vue';
import TaskModal from '../components/TaskModal.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { VUE_APP_BACKEND_URL } from '../../../env'
import Draggable from 'vuedraggable';

const store = inject('store')
const router = useRouter()
const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const showModal = ref(false);
const tasks = ref([]);
const currentTask = ref(null);

const tasksByStatus = ref({
  NEW: [],
  "IN-PROGRESS": [],
  "READY FOR REVIEW": [],
  DONE: [],
});

const closeModal = () => {
  showModal.value = false;
};
const openModal = (task) => {
  showModal.value = true;
  currentTask.value = task;
};

const onChange = (e) => {
  let item = e.added || e.moved;
  if (!item) return;

  for (const [status, tasks] of Object.entries(tasksByStatus.value)) {
    tasks.forEach(async (task) => {
      if (task.status !== status) {
        task.status = status;
        let response = null;
        if (task.status === "IN-PROGRESS") {
          task.status = "IN_PROGRESS";
        } else if (task.status === "READY FOR REVIEW") {
          task.status = "READY_FOR_REVIEW";
        }

        if (store.state.user.role === "EMPLOYEE") {
          const body = {
            status: task.status,
            completion: task.completion,
          };
          response = await axios.put(
            `${VUE_APP_BACKEND_URL}/api/employee/update-task/${task.id}`,
            body,
            options
          );
        } else if (store.state.user.role === "MANAGER") {
          const body = {
            title: task.title,
            description: task.description,
            status: task.status,
            completion: task.completion,
            priority: task.priority,
            startDate: task.startDate,
            endDate: task.endDate,
            employeeId: task.employeeId,
            estimateHours: task.estimateHours,
            parentId: task.parentId,
            projectId: task.projectId,
          };
          response = await axios.put(
            `${VUE_APP_BACKEND_URL}/api/manager/update-task/${task.id}`,
            body,
            options
          );
        }

        if (response.data.status !== 200) {
          store.state.popup.displayForMilliSecond(
            response.data.message,
            2000,
            false
          );
        }
      }
    });
  }
};

const fetchTasks = async () => {
  store.state.isLoading = true;
  if (!store.state.user) {
    router.push("/login");
    return;
  }
  // prepare tasks for app dashboard
  if (store.state.user.role === "EMPLOYEE") {
    const allTasksResponse = await axios.get(
      `${VUE_APP_BACKEND_URL}/api/employee/get-all-tasks`,
      options
    );
    tasks.value = allTasksResponse.data.data;
  }

  if (store.state.user.role === "MANAGER") {
    // get all employees for manager in TaskPage
    const allEmployeesResponse = await axios.get(
      `${VUE_APP_BACKEND_URL}/api/manager/get-all-tasks`,
      options
    );
    tasks.value = allEmployeesResponse.data.data;
    
  }
  store.state.isLoading = false;

  if (tasks.value) {
    tasks.value.filter((task) => {
      if (task.status === "NEW") {
        tasksByStatus.value["NEW"].push(task);
      } else if (task.status === "IN_PROGRESS") {
        tasksByStatus.value["IN-PROGRESS"].push(task);
      } else if (task.status === "DONE") {
        tasksByStatus.value["DONE"].push(task);
      } else if (task.status === "READY_FOR_REVIEW") {
        tasksByStatus.value["READY FOR REVIEW"].push(task);
      }
    });
  }
};

watchEffect(async () => {
  fetchTasks();
});

</script>

<template>
  <AdminPage v-if="store.state.user.role == 'ADMIN'" />
  <div v-else class="dashboard">
    <div class="column-container">
      <div class="column" v-for="[status, tasks] of Object.entries(tasksByStatus)">
        <div class="status__info">
          <h2 class="status__name">{{ status }}</h2>
          <p class="status__amount">{{ tasks.length }}</p>
        </div>
        <Draggable class="draggable-area" :list="tasks" group="task" itemKey="status" @change="onChange" :id="status">
          <template #item="{ element }">
            <Task :task="element" @click="openModal(element)" />
          </template>
        </Draggable>
      </div>
    </div>
  </div>

  <TaskModal @closeModal="closeModal" v-if="showModal && currentTask" :task="currentTask" />
</template>

<style lang="scss" scoped>
.dashboard {
  padding: 20px;

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
        background: #0013fe;
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
      background: #e6ecf0;
      padding: 10px;
      min-width: 250px;
      min-height: 90vh;
      width: fit-content;
      max-width: 250px;
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
          background: #d5d5d5;
          border-radius: 50%;
        }
      }

      .draggable-area {
        // background: red;

        min-height: 80vh;
        height: 450px;

        overflow-y: auto;
        display: flex;
        flex-direction: column;
        padding: 0 10px 10px 0;
        gap: 10px;
        // cursor: pointer;


        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgb(255, 255, 255);
          background-color: white
        }


        &::-webkit-scrollbar {
          width: 6px;
          background-color: white;
        }

        &::-webkit-scrollbar-thumb {
          background-color: var(--primary);
        }
      }
    }
  }
}

@media (max-width: 1600px) {
  .dashboard {

    .column-container {
      .column {
        min-width: 275px;
      }
    }
  }
}
@media (max-width: 1400px) {
  .dashboard {
    .heading {
      .right__side {
        .add__task__btn {
          font-size: 11px;
        }
      }
    }

    .column-container {
      .column {
        min-width: 235px;

        .status__info {
          .status__name {
            font-size: 12px;
          }

          .status__amount {
            font-size: 12px;
            width: 25px;
            height: 25px;
            line-height: 25px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}

</style>
