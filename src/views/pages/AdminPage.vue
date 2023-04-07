<template>
    <div class="approve-admin-page">
        <div class="header">
            <h2>Manager Waiting List</h2>
        </div>
        <div class="manager-container">
            <Manager v-for="manager in unApprovedManagerList" :id="manager.id" :manager="manager" @verify="verifyManager"/>
        </div>
    </div>
</template>

<script setup>
import { VUE_APP_BACKEND_URL } from '../../../env'
import Manager from '../components/Manager.vue'
import axios from 'axios';

import { ref, watchEffect, inject } from 'vue';

const store = inject('store');
const unApprovedManagerList = ref([
]);

const verifyManager = async (managerId) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.accessToken}`,
        },
    };

    store.state.isLoading = true;
    const response = await axios.put(`${VUE_APP_BACKEND_URL}/api/admin/verify/${managerId}`, {}, config)
    store.state.isLoading = false;
    fetchUnApprovedManagers()
}

const fetchUnApprovedManagers = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.accessToken}`,
        },
    };
    store.state.isLoading = true;
    const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/admin/get-all-manager-unverified`, config)
    store.state.isLoading = false;
    unApprovedManagerList.value = response.data.data;
}

watchEffect(() => {
    fetchUnApprovedManagers();
});
</script>

<style lang="scss" scoped>
.approve-admin-page {
    width: 500px;
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