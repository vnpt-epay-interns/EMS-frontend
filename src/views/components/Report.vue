<template>
    <div class="report">
        <div class="report__status"></div>
        <div class="content">
            <p class="report__created_date">12/02/2023</p>
            <p class="report__name">Design database for EMS Project</p>
            <p class="report__author__name">Nguyen Hoang Vy</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.report {
    // padding: 0;
    display: flex;
    height: 100px;
    width: 700px;
    gap: 20px;
    align-items: center;
    background: #E6ECF0;

    .report__status {
        background-color: #76CC8E;
        // background-color: #263159;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 30px;
        height: 100px;
    }

}

</style>