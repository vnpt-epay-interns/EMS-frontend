<template>
    <div class="container">
        <h1>All reports</h1>
        <div class="report-container">
            <Report />
            <Report />
            <Report />
        </div>
    </div>
</template>

<script setup>
import Report from '../components/Report.vue';
</script>

<style lang="scss" scoped>
    .container {
        
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