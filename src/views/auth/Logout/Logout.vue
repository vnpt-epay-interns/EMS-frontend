<template>
    <div>

    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { inject } from 'vue';
    import store from '../../../store/store.js';

    const router = useRouter();
    localStorage.removeItem('accessToken');
    store.state.accessToken = null;
    store.state.user = null;
    window.location.reload(); // reload page to update the store, and do the auto routing

</script>

<style lang="scss" scoped>

</style>