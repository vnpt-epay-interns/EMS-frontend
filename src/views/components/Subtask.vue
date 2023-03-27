<template>
  <div class="subtask"  @click="viewSubtaskDetails">
    <header>
      <p>{{ subtask.title }}</p>  
      <div>{{ subtask.employeeName }}</div>
    </header>
    <div class="info">
      <div class="priority">
        <font-awesome-icon class="fa" icon="fa-solid fa-flag" :id="
          (flag =
            subtask.priority === 'LOW'
              ? 'priority-low'
              : subtask.priority === 'HIGH'
              ? 'priority-high'
              : 'priority-medium')
        "/>
      </div>

      <div class="due" title="Due date">
        <font-awesome-icon class="fa" icon="fa-solid fa-clock" />
        {{ subtask.endDate }}
      </div>

      <div class="completion" title="Completion">
        <font-awesome-icon class="fa" icon="fa-solid fa-circle-check" />
        {{ subtask.completion }}%
      </div>

      <div>{{ subtask.status }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";

const store = inject("store");
const router = useRouter();
const flag = ref("");
const {subtask} = defineProps({
  subtask: {
    type: Object
  }
})

const viewSubtaskDetails = () => {
  store.state.task = subtask;
  router.push({
    name: "TaskDetailsPage",
    params: {
      id: subtask.id,
    },
  });
};
</script>

<style lang="scss" scoped>

.disabled {
  opacity: 0.5;
}

.subtask {
  display: flex;
  flex-direction: column;
  background: #e6ecf0;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      font-size: 10px;
      width: 80px;
      text-align: right;
    }
  }

  .info {
    display: flex;
    gap: 10px;
    align-items: center;
    .priority {
      #priority-high {
        color: #ff0000;
      }

      #priority-medium {
        color: #ffa500;
      }

      #priority-low {
        color: #76cc8e;
      }
    }
  }
}
</style>
