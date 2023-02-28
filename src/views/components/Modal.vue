<template>
    <div class="modal__container">
        <div class="message__container" @click="closeModal">
            <div class="close__modal__btn" @click="closeModal">&times;</div>
            {{ store.state.popup.message }}
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
const store = inject('store');

const closeModal = () => {
    store.state.popup.isShowing = false;
}

</script>

<style lang="scss" scoped>
.modal__container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background: #00000085;

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 999;
    }

    .message__container {
        position: absolute;
        width: 400px;
        height: 200px;
        background: #fff;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;

        .close__modal__btn {
            position: absolute;
            border-top-right-radius: 10px;
            padding: 5px 10px;
            font-size: 20px;
            top: 0px;
            right: 0px;
            cursor: pointer;
            background: rgb(236, 105, 105);
            color: white;

            &:hover {
                background: rgb(255, 0, 0);
            }
        }
    }
}
</style>