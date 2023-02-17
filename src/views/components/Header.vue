<script setup>

</script>

<template>
    <header>
        <div class="logo">
            <img src="../../assets/logo/logo1.png" alt="">
        </div>
        <div class="project_description_container">
            <div class="short-hand">
                EMS
            </div>
            <div class="long-hand">
                Employee Management System
            </div>
        </div>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        align-items: center;
        width: 100%;
        padding: 0 30px;
        padding: 10px;
    }

    .logo img {
        object-fit: contain;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
