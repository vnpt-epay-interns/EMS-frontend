<template>
    <div class="all__report__page">
        <h1>All reports</h1>
        <div class="report-container" v-for="report in reportList">
            <Report :report="report"/>
        </div>
    </div>
</template>

<script setup>
import Report from '../components/Report.vue';
import { VUE_APP_BACKEND_URL } from '../../../env'
import axios from 'axios';
import { ref, watchEffect, inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = inject('store');
const reportList = ref([])
const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')

watchEffect(async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };

  let response = null
  store.state.isLoading = true;
  if (store.state.user.role === 'MANAGER') {
    if (window.location.pathname === '/reports') {
      response = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/reports`, config)
    } else {
      response = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/reports/task/${route.params.id}`, config)  
    }
  } else if (store.state.user.role === 'EMPLOYEE') {
    if (window.location.pathname === '/reports') {
      response = await axios.get(`${VUE_APP_BACKEND_URL}/api/employee/reports`, config)
    } else {
      response = await axios.get(`${VUE_APP_BACKEND_URL}/api/employee/reports/task/${route.params.id}`, config)  
    }
  }
  store.state.isLoading = false;
  reportList.value = response.data.data;

});

</script>

<style lang="scss" scoped>
.all__report__page {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .report-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>