<template>
    <div class="project__management__page">
        <h1>Projects</h1>
        <div class="add__project__form">
            <input type="text" placeholder="Enter new project name" v-model="name">
            <div @click="handleSave">
                <button type="submit" @keyup.enter="submit">+</button>
            </div>
        </div>
        <div class="project__container" v-for="project in projectList">
            <project :project="project" />
        </div>
    </div>
</template>

<script setup>
import Project from '../components/Project.vue'

import { VUE_APP_BACKEND_URL } from '../../../env'
import axios from 'axios';
import { ref, watchEffect, inject } from 'vue';

const store = inject('store');

const projectList = ref([])

watchEffect(async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.accessToken}`,
        },

    };

    store.state.isLoading = true;
    const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/get-all-project-information`, config);
    store.state.isLoading = false;
    projectList.value = response.data.data;

})

const name = ref()

const handleSave = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.accessToken}`,
        },
    };
    const body = {
        name: name.value,
    }

    if (name.value == null || name.value == '') {
        store.state.popup.displayForMilliSecond('Please enter project name', 2000, false);
        return;
    }

    store.state.isLoading = true;
    const response = await axios.post(`${VUE_APP_BACKEND_URL}/api/manager/create-project`, body, config)
    store.state.isLoading = false;
    if (response.data.status == 200) {
        store.state.popup.displayForMilliSecond(response.data.message, 2000, true);
    }
    else {
        store.state.popup.displayForMilliSecond(response.data.message, 2000, false);
    }
}
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
        font-size: 28px;
    }

    .add__project__form {
        display: flex;
        gap: 10px;
        align-items: center;

        input {
            width: 500px;
            height: 40px;
            border: 0;
            border-radius: 5px;
            padding: 0 20px;
            font-size: 14px;
            background-color: #f3f3f3;

            &:focus {
                outline: none;
                border-bottom: 1px solid black;
            }
        }

        button {

            width: 45px;
            height: 45px;
            border: none;
            border-radius: 10px;
            font-size: 24px;
            font-weight: 700;
            cursor: pointer;
            background-color: var(--primary);
            color: #fff;

            &:hover {
                background: var(--primary-hover)
            }
        }

    }

    .project__container {
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: 700px;
    }

}
</style>