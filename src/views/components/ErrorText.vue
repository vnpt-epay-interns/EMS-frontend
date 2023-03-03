<script setup lang="ts">
    defineProps({
        errorMessage: String
    })
</script>

<template>
    <div class="error__text">
        <p>{{ errorMessage }}</p>
    </div>
</template>

<style scoped>
    .error__text {
        color: red;
        font-size: 12px;
    }
</style>