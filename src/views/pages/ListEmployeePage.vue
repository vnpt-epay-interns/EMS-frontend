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
  console.log(response.data);
  employeeList.value = response.data.data;
  console.log(employeeList.value);
});

</script>


<template>
  <div class="overview">
    <div class="header">
      <h2>Overview</h2>
      <h4>Employee List</h4>

    </div>
    <div class="list">
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
  </div>
</template>

<style lang="scss">
// Import the library


.table {
  margin-top: 2%;
  width: 100%;
  font-size: 18px;

  th,
  td {
    padding: 25px;
    text-align: center;
    border: 0.5px solid black;
  }

}

.top-left {
  border-top-left-radius: 10px;
}

.top-right {
  border-top-right-radius: 10px;
}

.thead-light {
  border-top-left-radius: 10px;
  background-color: #969696;
}

.overview {
  margin-left: 30px;
  align-items: center;
  justify-content: space-around;
  margin-right: 10%;
}

.header {
  display: flexbox;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;

  h2 {
    display: flex;
    font-size: 24px;
    margin-bottom: 5px;

  }

  h4 {
    font-size: 38px;
  }
}
</style> 