<script setup>
import Register from './views/auth/Register/Register.vue';
import SelectingRolePage from './views/pages/SelectRolePage.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

:root {
  --primary: #263159;
  --primary-hover: #40559f;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
</style>
