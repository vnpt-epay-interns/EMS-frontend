<template>
    <div>

    </div>
</template>

<script setup>
    import { inject } from 'vue';

    const store = inject('store')
    localStorage.removeItem('accessToken');
    store.state.accessToken = null;
    store.state.user = null;
    window.location.reload(); // reload page to update the store, and do the auto routing

</script>

<style lang="scss" scoped>

</style>