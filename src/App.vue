<script setup>
import Sidebar from './views/components/Sidebar.vue';
import { routerKey, RouterView, useRoute, useRouter } from 'vue-router';
import { ref, onBeforeMount,onMounted, inject, computed, onUpdated } from 'vue';
import { VUE_APP_BACKEND_URL } from '../env.js'
import axios from 'axios'
import Loading from './views/components/Loading.vue';
import Modal from './views/components/Modal.vue';
import  { fetchUserInfoAndDoRouting }  from '../src/router/index.js'


const store = inject('store');

const router = useRouter();
const pagesWithoutSidebar = ['/login', '/register', '/select-role', '/enter-manager-code', '/confirm-email', '/waiting-for-admin-approval'];

// const showSidebar = ref(!pagesWithoutSidebar.includes(window.location.pathname))
// console.log(!pagesWithoutSidebar.includes(window.location.pathname));

// onBeforeMount(async () => {
const token = localStorage.getItem('accessToken');

if (token) {
  store.state.accessToken = token;

  // using the access token to fetch user info and do routing
  fetchUserInfoAndDoRouting()

} else {
  
  const currentPath = window.location.pathname
  const unAuthenticatedEndpoints = ['/login', '/register','/verify-email']

  if (!unAuthenticatedEndpoints.some(endpoint => currentPath.startsWith(endpoint))) {
    router.push('/login')
  }
}
</script>


<!-- 
  when is store.state.showSidebar, or null, that means he is in pages that don't need sidebar ()
-->
<template>
  <div :class="store.state.showSidebar ? 'flex__box' : ''">
    <Modal v-if="store.state.popup.isShowing"/>
    <Loading v-if="store.state.isLoading"/>
    <Sidebar v-if="store.state.showSidebar" />
    <RouterView />
  </div>
</template>

<style scss>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

:root {
  --primary: #263159;
  --primary-hover: #40559f;
  --small-desktop : 1400px;
}


* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.flex__box {
  display: flex;
  height: fit-content;
  min-height: 100vh;
}
</style>
