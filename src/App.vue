<script setup>
import Sidebar from './views/components/Sidebar.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const showSidebar = ref(!['/register', '/login', '/select-role'].includes(window.location.pathname))
</script>


<template>
  <div class="wrapper1" v-if="showSidebar">
    <Sidebar />
    <RouterView />
  </div>
  <div class="wrapper2" v-else>
    <RouterView />
  </div>
</template>

<style >
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

.wrapper1 {

  display: flex;
  height: fit-content;
  min-height: 100vh;
}
</style>