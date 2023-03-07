<script setup>
import '../../assets/employeeTable.scss'
// import { RouterLink } from 'vue-router';

// import { inject } from 'vue';

import { VUE_APP_BACKEND_URL } from '../../../env'

import axios from 'axios';

import { ref, onMounted, inject } from 'vue';

const store = inject('store');

const employeeList = ref([]);

onMounted(async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.state.accessToken}`,
    },
  };

  store.state.isLoading = true;
  const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/get-all-employees`, config)
  store.state.isLoading = false;
  employeeList.value = response.data.data;
});

</script>


<template>
  <div class="view-all-employee-page">
    <div class="header">
      <h2>Overview</h2>
      <h4>Employee List</h4>
    </div>

    <table class="table"> 
      <thead class="thead-light">
        <tr>
          <th class="top-left">ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th class="top-right">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employeeList" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style lang="scss">
// Import the library

.view-all-employee-page {
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 14px;

    .thead-light {
      background-color: #e9ecef;
      color: var(--primary)
    }

    th, td {
      padding: 8px;
      text-align: left;
      border: 1px solid black;
      padding: 5px 10px;
      
    }

  

    .top-left {
      border-top-left-radius: 10px;
    }

    .top-right {
      border-top-right-radius: 10px;
    }
  }
}

</style> 