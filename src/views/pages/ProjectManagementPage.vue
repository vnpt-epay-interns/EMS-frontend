<template>
    <div class="project__management__page">
        <h1>Projects</h1>
        <div class="add__project__form">
            <input type="text" placeholder="Enter new project name">
            <button>+</button>
        </div>
        <div class="project__container">
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </div>
</template>

<script setup>
import Project from '../components/Project.vue'

import { VUE_APP_BACKEND_URL } from '../../../env'
import axios from 'axios';
import { ref, onMounted, inject } from 'vue';

const store = inject('store');

const projectList = ref([])

onMounted(async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.accessToken}`,
        },

    };

    store.state.isLoading = true;
    const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/get-all-projects`, config);
    store.state.isLoading = false;
    console.log(response.data);
    projectList.value = response.data.data;
    console.log(projectList.value);

    })
</script>

<style lang="scss" scoped>
.project__management__page {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px;
    margin-left: 30px;

    h1 {
        font-weight: 700;
        font-size: 48px;
    }

    .add__project__form {
        display: flex;
        gap: 10px;
        align-items: center;

        input {
            width: 500px;
            height: 50px;
            border: 0;
            border-radius: 10px;
            padding: 0 20px;
            font-size: 16px;
            background-color: #f3f3f3;
        }

        button {

            width: 50px;
            height: 50px;
            border: none;
            border-radius: 10px;
            font-size: 24px;
            font-weight: 700;
            cursor: pointer;
            background-color: var(--primary);
            color: #fff;
        }

    }

    .project__container {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

}
</style>