<template>
  <aside class="sidebar">
    <div class="user__info">
      <img class='user__avatar'
        :src="store.state.user.avatar"        alt="">
      <h1 class="user__name">{{ fullName}}</h1>
      <p class="user__emai">{{ store.state.user.email }}</p>
    </div>

    <div class="nav__item__container">
      <RouterLink to="/dashboard" class="nav__item" active-class="highlight" >Dashboard</RouterLink>
      <RouterLink to="/profile" class="nav__item" active-class="highlight">User Profile</RouterLink>
      <RouterLink to="/employee" class="nav__item" active-class="highlight" v-if="store.state.user.role=='MANAGER'">Employee</RouterLink>
      <RouterLink to="/schedule" class="nav__item" active-class="highlight">Working Schedule</RouterLink>
      <RouterLink to="/task" class="nav__item" active-class="highlight">Task</RouterLink>
      <RouterLink to="/report" class="nav__item" active-class="highlight">Report</RouterLink>
      <RouterLink to="/project" class="nav__item" active-class="highlight" v-if="store.state.user.role=='MANAGER'">Project</RouterLink>
      <RouterLink to="/logout" class="nav__item" active-class="highlight">Logout</RouterLink>

    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { inject } from 'vue';

const store = inject('store');


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