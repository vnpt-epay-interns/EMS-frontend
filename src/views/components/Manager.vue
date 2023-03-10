<template>
    <div class="manager">
        <div class="manager__info">
            <img class="manager__avatar" :src="manager.avatar" alt="">
            <div>
                <p class="manager__id">ID: {{ manager.id }}</p>
                <p class="manager__name">Name: {{ manager.firstName }} {{ manager.lastName }}</p>
                <p class="manager__email">Email: {{ manager.email }}</p>
            </div>

        </div>
        <btn class="approve-btn" @click="handleClick">Approve</btn>
    </div>
</template>

<script setup>
import { VUE_APP_BACKEND_URL } from '../../../env'
import axios from 'axios';
import { defineEmits } from 'vue'

const emit = defineEmits(['verify'])

const { manager } = defineProps(['manager'])

const handleClick = async () => {

    emit('verify', manager.id)
}
</script>

<style lang="scss" scoped>
.manager {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background: rgb(244, 244, 244);
    gap: 10px;

    .manager__info {
        display: flex;
        align-items: center;        
        gap: 20px;
        .manager__avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }


    }

    .approve-btn {
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 12px;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
            background: var(--primary-hover);
        }
    }
}
</style>