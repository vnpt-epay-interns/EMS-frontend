<template>
    <div class="all__report__page">
        <h1>All reports</h1>
        <div class="report-container" v-for="report in reportList">
            <Report :report="report" />
        </div>
    </div>
</template>

<script setup>
import Report from '../components/Report.vue';
import { VUE_APP_BACKEND_URL } from '../../../env'

import axios from 'axios';

import { ref, onMounted, onBeforeMount, inject } from 'vue';

const store = inject('store');

const reportList = ref([])

onMounted(async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.state.accessToken}`,
    },
  };

  store.state.isLoading = true;
  const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/reports`, config)
  store.state.isLoading = false;
  console.log(response.data);
  reportList.value = response.data.data;
});

</script>

<style lang="scss" scoped>
.all__report__page {
    padding: 20px;

    h1 {
        margin-bottom: 20px;
    }

    .report-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

}
</style>