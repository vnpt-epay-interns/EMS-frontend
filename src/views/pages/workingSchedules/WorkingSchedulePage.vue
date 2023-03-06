<template>
    <div>
        <ManagerWorkingSchedulePage v-if="store.state.user.role === 'MANAGER'" />
        <EmployeeWorkingSchedulePage v-else/>
    </div>
</template>

<script setup>
    import EmployeeWorkingSchedulePage from './EmployeeWorkingSchedulePage.vue';
    import ManagerWorkingSchedulePage from './ManagerWorkingSchedulePage.vue';
    import { inject } from 'vue';

    const store = inject('store')
</script>

<style lang="scss" scoped>

</style>