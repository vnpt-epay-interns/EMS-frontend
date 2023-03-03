<template>
    <main>
        <div class="container">
            <Header />
            <div class="content">
                <div class="title">Your email is being verified</div>
                <p class="description">
                    Please wait while we verify your email.
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios';
import { inject, onMounted } from 'vue';
import { VUE_APP_BACKEND_URL } from '../../../env';
import Header from '@/views/components/Header.vue'

const store = inject('store');


const route = useRoute()
const verifyCode = route.params.verifyCode


// onMounted(async () => {
const verifyEmail = async () => {

    store.state.isLoading = true
    const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/auth/verify/${verifyCode}`);
    store.state.isLoading = false

    if (response.data.status == 200) {
        
        store.state.popup.displayForMilliSecond("Successfully", 3000, true)

        // window.location.reload(); // reload page to update the store, and do the auto routing
        
    } else {
        store.state.popup.displayForMilliSecond(response.data.message, 3000, false)

    }
}

verifyEmail()

</script>


<style scoped>
main {
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 35%;
    height: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    padding: 0 30px 0;
}

.title {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    font-style: normal;
}

.user__email {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: center;
}

.description {
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    text-align: left;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

input {
    border: 1px solid #D0D5DD;
    padding: 10px;
    border-radius: 5px;
}

input:focus {
    outline: none;
}
</style>