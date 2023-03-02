<template>
  <aside class="sidebar">
    <div class="user__info">
      <img class='user__avatar'
        src="data:image/png;base64,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"
        alt="">
      <h1 class="user__name">{{ fullName }}</h1>
      <p class="user__emai">{{ user.email }}</p>
    </div>

    <div class="nav__item__container">
      <RouterLink to="/dashboard" class="nav__item" active-class="highlight" >Dashboard</RouterLink>
      <RouterLink to="/profile" class="nav__item" active-class="highlight">User Profile</RouterLink>
      <RouterLink to="/employee" class="nav__item" active-class="highlight">Employee</RouterLink>
      <RouterLink to="/schedule" class="nav__item" active-class="highlight">Working Schedule</RouterLink>
      <RouterLink to="/task" class="nav__item" active-class="highlight">Task</RouterLink>
      <RouterLink to="/report" class="nav__item" active-class="highlight">Report</RouterLink>
      <RouterLink to="/project" class="nav__item" active-class="highlight">Project</RouterLink>
      <RouterLink to="/logout" class="nav__item" active-class="highlight">Logout</RouterLink>

    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import store from '../../store/store';

const user = store.state.user;
const fullName = store.state.user.firstName + ' ' + store.state.user.lastName
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
      color: var(--primary)
    }
  }
}
</style>