<template>
    <div class="loading_container">
        <span class="loader"></span>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loading_container {
    // position: fixed;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // z-index: 999;
    // background: red;
    background: #000000b5;
    z-index: 999;
    // background: red;

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        animation: rotation 1s linear infinite;
        z-index: 1000;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
