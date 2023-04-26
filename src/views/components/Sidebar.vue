<template>
  <aside class="sidebar">
    <div class="user__info">
      <RouterLink to="/profile">
        <img class="user__avatar" :src="store.state.user.avatar" alt="" />
      </RouterLink>

      <h1 class="user__name">{{ fullName }}</h1>
      <p class="user__emai">{{ store.state.user.email }}</p>
    </div>

    <div class="nav__item__container">
      <RouterLink to="/dashboard" class="nav__item" active-class="highlight" :class="path.startsWith('/dashboard') ? 'highlight' : ''"
        >Dashboard</RouterLink
      >
      <RouterLink to="/profile" class="nav__item" active-class="highlight" :class="path.startsWith('/profile') ? 'highlight' : ''"
        >User Profile</RouterLink
      >
      <RouterLink
        to="/employee"
        class="nav__item"
        active-class="highlight"
        v-if="store.state.user.role == 'MANAGER'"
        :class="path.startsWith('/employee') ? 'highlight' : ''"
      >
        Employee</RouterLink
      >
      <RouterLink to="/schedule" class="nav__item" active-class="highlight"
      v-if="store.state.user.role !== 'ADMIN'"
      :class="path.startsWith('/schedule') ? 'highlight' : ''"
        >Working Schedule</RouterLink
      >
      <RouterLink
        to="/new-task"
        class="nav__item"
        active-class="highlight"
        v-if="store.state.user.role == 'MANAGER' || store.state.user.role == 'EMPLOYEE'"
        :class="path.startsWith('/new-task') || path.startsWith('/task-details') || path.startsWith('/task')? 'highlight' : ''"
        >Task
      </RouterLink>
      <RouterLink
        to="/write-report"
        class="nav__item"
        active-class="highlight"
        v-if="store.state.user.role === 'EMPLOYEE'"
        :class="path.startsWith('/report') ? 'highlight' : ''"
        >Report</RouterLink
      >
      <RouterLink
        to="/reports"
        class="nav__item"
        active-class="highlight"
        v-if="store.state.user.role === 'MANAGER'"
        :class="path.startsWith('/report') ? 'highlight' : ''"
        >Report</RouterLink
      >
      <RouterLink
        to="/project"
        class="nav__item"
        active-class="highlight"
        v-if="store.state.user.role == 'MANAGER'"
        :class="path.startsWith('/project') ? 'highlight' : ''"
      >
        Project
      </RouterLink>
      <RouterLink to="/logout" class="nav__item" active-class="highlight"
        >Logout</RouterLink
      >
    </div>
  </aside>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { inject, ref, computed, watch } from "vue";

const store = inject("store");
const fullName = store.state.user.firstName + " " + store.state.user.lastName;

const route = useRoute();

const path = computed(() => route.path);
</script>

<style lang="scss" scoped>
.sidebar {
  // position: fixed;
  // top: 0;
  // left: 0;

  min-width: 200px;
  background: var(--primary);
  color: white;
  padding: 20px;

  .user__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-bottom: 0.5px solid white;
    padding-bottom: 20px;

    .user__avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }

  .nav__item__container {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    .nav__item {
      color: white;
      font-size: 16px;
      text-decoration: none;
      padding: 10px;
      border-radius: 5px;
    }

    .highlight {
      background: white;
      color: var(--primary);
    }
  }
}

@media (max-width: 1300px) {
  .sidebar {
    min-width: 150px;
    // width: 150px;
    // background-color: rgb(240, 239, 239);
    .user__info {
      font-size: 12px;
      padding-bottom: 10px;

      .user__avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .nav__item__container {
      padding: 20px 10px;
      gap: 10px;

      .nav__item {
        font-size: 12px;
      }
    }
  }
}
</style>
