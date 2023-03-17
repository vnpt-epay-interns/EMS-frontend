<script setup>
import Subtask from "./Subtask.vue";
import { ref, inject, computed, watchEffect } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { VUE_APP_BACKEND_URL } from '../../../env'

const router = useRouter();
const store = inject("store");

const { task } = defineProps(["task"]);
const subtasks = ref([]);

const emit = defineEmits(["closeModal"]);
const closeModal = () => {
  emit("closeModal");
};

const viewTask = () => {
  store.state.task = task;
  router.push({
    name: "TaskDetailsPage",
    params: {
      id: task.id,
    },
  });
};

watchEffect(async () => {
  const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  store.state.isLoading= true;
  let response;
  if (store.state.user.role === 'MANAGER') {
    response = await axios.get(
      `${VUE_APP_BACKEND_URL}/api/manager/get-all-subtasks/${task.id}`,
      options
    );
  } else if (store.state.user.role === 'EMPLOYEE') {
    response = await axios.get(
      `${VUE_APP_BACKEND_URL}/api/employee/get-all-subtasks/${task.id}`,
      options
    );
  }
  subtasks.value = response.data.data;

  store.state.isLoading= false;
});

const addSubtask = () => {
  store.state.subtask = {
    projectName: task.projectName,
    parentId: task.id,
    projectId: task.projectId,
  };
  router.push({
    name: "AddSubtaskPage",
    params: {
      id: task.id,
    },
  });
};
</script>

<template>
  <div class="task-modal">
    <div class="background" @click="closeModal"></div>
    <div class="main-content-modal">
      <div class="heading">
        <h1>
          <p>{{ task.title }}</p>
          <button class="edit-btn" @click="viewTask">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" /> Edit
          </button>
        </h1>
        <p><strong>Project</strong>: {{ task.projectName }}</p>
        <p><strong>Employee name</strong>: {{ task.employeeName }}</p>
        <p><strong>Start date</strong>: {{ task.startDate }}</p>
        <p><strong>Due date</strong>: {{ task.endDate }}</p>
      </div>
      <div class="description">
        <p><strong>Description</strong>:</p>
        {{ task.description }}
      </div>
      <div class="subtask-container">
        <div class="header">
          <p><strong>Subtasks</strong>:</p>

          <button class="add-btn" @click="addSubtask" v-if="store.state.user.role === 'MANAGER'">
            <font-awesome-icon class="fa" icon="fa-solid fa-plus" />
          </button>
        </div>

        <div class="subtasks">
          <!-- <div class="empty" v-show="subtasks">Has No subtask</div> -->
          <Subtask v-for="subtask in subtasks" :subtask="subtask" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .main-content-modal {
    width: 80%;
    height: 90%;
    max-width: 600px;
    max-height: 600px;
    background: white;
    z-index: 100;

    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
    padding: 20px;
    border-radius: 10px;
    gap: 20px;
    font-size: 14px;
    overflow-y: scroll;

    .heading {
      h1 {
        display: flex;
        align-items: center;
        gap: 10px;

        .edit-btn {
          border: none;
          background: var(--primary);
          color: #ffffff;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;

          &:hover {
            background: var(--primary-hover);
          }
        }
      }
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgb(169, 169, 169);
      background-color: white;
    }

    &::-webkit-scrollbar {
      width: 5px;
      background-color: white;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--primary);
    }

    .subtask-container {
      .header {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 10px;

        .add-btn {
          cursor: pointer;
          border: none;
          background: var(--primary);
          width: 30px;
          height: 30px;
          border-radius: 5px;
          color: #ffffff;

          &:hover {
            background: var(--primary-hover);
          }
        }
      }

      .subtasks {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .empty {
          color: var(--primary);
          font-size: 12px;
          display: block;
          text-align: center;
        }
      }
    }
  }
}
</style>
