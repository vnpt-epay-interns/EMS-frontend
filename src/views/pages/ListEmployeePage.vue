<script setup>
import '../../assets/employeeTable.scss'
import EmployeeVue from '../components/Employee.vue';
// import { RouterLink } from 'vue-router';

// import { inject } from 'vue';

import { VUE_APP_BACKEND_URL } from '../../../env'

import axios from 'axios';

import { ref, watchEffect, inject } from 'vue';

const store = inject('store');

const employeeList = ref([]);

watchEffect(async () => {
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

  // Sort employeeList by id
  employeeList.value.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  })
  
});

</script>


<template>
  <div class="view-all-employee-page">
    <div class="header">
      <h2>Employee List</h2>
    </div>
<!-- 
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
    </table> -->
    <div class="employee-container">
        <EmployeeVue v-for="employee in employeeList" :key="employee.id" :employee="employee" />
    </div>
  </div>

</template>

<style lang="scss" scoped>
// Import the library

.view-all-employee-page {
  width: 100%;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    h2 {
      background: var(--primary);
      color: white;
      padding: 5px 5px 5px 10px;
      border-radius: 5px;
    }
  }

}

</style> 