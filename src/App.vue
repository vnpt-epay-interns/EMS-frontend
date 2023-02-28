<script setup>
import Register from './views/auth/Register/Register.vue';
import SelectingRolePage from './views/pages/SelectRolePage.vue';
import Sidebar from './views/components/Sidebar.vue';
import { routerKey, RouterView, useRoute, useRouter } from 'vue-router';
import { ref, onBeforeMount, inject } from 'vue';
import { VUE_APP_BACKEND_URL } from '../env.js'
import axios from 'axios'
import Loading from './views/components/Loading.vue';
import Modal from './views/components/Modal.vue';
const store = inject('store');

const router = useRouter();
const isAuthenticated = ref(false);

onBeforeMount(async () => {
  const token = localStorage.getItem('token');

  if (token) {
    const options = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }

    const response = axios.get(`${VUE_APP_BACKEND_URL}/api/auth/user-info`, options);
    console.log(response.data)
  }


  if (isAuthenticated.value) {
    isAuthenticated.value = true;
    router.push('/dashboard');

  } else {

    if (!['/login', '/register'].includes(window.location.pathname)) {
      router.push('/login')
    }
  }

});


</script>


<template>
  <div :class="isAuthenticated ? 'flex__box' : ''">
    <Modal v-if="store.state.popup.isShowing"/>
    <Loading v-if="store.state.isLoading"/>
    <Sidebar v-if="isAuthenticated" />
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

.flex__box {
  display: flex;
  height: fit-content;

  min-height: 100vh;
}
</style>
