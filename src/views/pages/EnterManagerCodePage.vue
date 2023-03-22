<script setup>
import Header from '../components/Header.vue'
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';
import { VUE_APP_BACKEND_URL } from '../../../env.js'

const router = useRouter()
const store = inject('store')
const managerName = ref('')
const error = ref('')

const managerCode = ref('')

const handleCheckManagerByManagerCode = async () => {

    if (managerCode.value == '') {
        managerName.value = ''
        error.value = ''
        return
    }

    const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/auth/get-manager-info/${managerCode.value}`);

    if (response.data.status == 200) {
        managerName.value = response.data.data.firstName + ' ' + response.data.data.lastName
        error.value = ''
        console.log('success');
        console.log(response.data.data);
    } else {
        managerName.value = 'Invalid Manager Code'
        error.value = response.data.message
    }
}

const handleSubmit = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${store.state.accessToken}`
        }
    }

    store.state.isLoading = true
    const response = await axios.post(`${VUE_APP_BACKEND_URL}/api/auth/register-account/employee/${managerCode.value}`, {} ,config);
    store.state.isLoading = false

    if (response.data.status == 200) {
        window.location.reload(); // reload page to update the store, and do the auto routing

    } else {
        store.state.popup.displayForMilliSecond(response.data.message, 3000)
    }

}
</script>

<template>
    <main>
        <div class="container">
            <Header />
            <div class="content">
                <header>
                    <div class="title">Enter Manager Code</div>
                    <p class="description">Please fill your details to access your account.</p>
                </header>

                <div class="body">
                    <label for="code" class="login__container__body__form__group__label">Refenced Code</label>
                    <input type="text" id="code" class="login__container__body__form__group__input" placeholder="Enter Here"
                        v-model="managerCode" @change="handleCheckManagerByManagerCode" />
                    <p class="manager__name" :class="managerName ? (error ? 'red__border' : 'green__border') : ''">{{ managerName }}</p>
                </div>
                

                <footer>
                    <button @click="handleSubmit" :class="!error && managerName ? 'clickable': 'unclickable'" >Submit</button>
                </footer>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
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
    font-size: 30px;
    line-height: 48px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
}

.description {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #667085;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.clickable {
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    min-width: 176px;
    height: 44px;
    background-color: var(--primary);
    color: #fff;
    border: none;
}
.clickable:hover {
        background-color: var(--primary-hover);
}

.unclickable {
    cursor: not-allowed;
    border-radius: 5px;
    padding: 10px;
    min-width: 176px;
    height: 44px;
    background-color: #D0D5DD;
    color: #fff;
    border: none;
}
.body {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

header {
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;
    font-style: normal;
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    border: 1px solid #D0D5DD;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
}

input:focus {
    outline: none;
}

.manager__name {
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
}

.red__border {
    background: rgb(247, 112, 112);
}

.green__border {
    background: rgb(144, 255, 144);
}



button {
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    min-width: 176px;
    height: 44px;
    background-color: var(--primary);
    color: #fff;
    border: none;
}
</style>