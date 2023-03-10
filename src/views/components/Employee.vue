<template>
    <div class="employee">
        <p class="employee__id">ID: {{ employee.id }}</p>
        <img class="employee__avatar" :src="employee.avatar" alt="">
        <p class="employee__name">{{ employee.firstName }}  {{ employee.lastName }}</p>
        <p class="employee__email">{{ employee.email }}</p>
    </div>
</template>

<script setup>
    const { employee } = defineProps(['employee'])
</script>

<style lang="scss" scoped>
    .employee {
        width: 100%;
        display: grid;
        grid-template-columns: 10% 40px 30% 50%;
        align-items: center;
        // line-height: 100px;
        padding: 10px;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.18);

        .employee__avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
</style>