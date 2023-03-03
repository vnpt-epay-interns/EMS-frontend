<script setup>
import store from '../../../store/store.js'
import { ref, reactive } from 'vue'
import router from './../../../router/index'
import axios from 'axios'
import { VUE_APP_BACKEND_URL } from '../../../../env.js'
import { RouterLink } from 'vue-router';
import { fetchUserInfoAndDoRouting } from '../../../router/index.js'
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

const togglePassword = () => {
    showPassword.value = !showPassword.value
}

const login = async () => {
    // login to get the accessToken
    const body = {
        email: email.value,
        password: password.value
    }

    store.state.isLoading = true;
    const response = await axios.post(`${VUE_APP_BACKEND_URL}/api/auth/login`, body)
    store.state.isLoading = false;


    store.state.accessToken = response.data.data.token
    store.state.authenticatedRole = response.data.data.role
    //TODO: check if this code is redundant!

    if (rememberMe.value) {
        localStorage.setItem('accessToken', response.data.data.token)
    }


    // fetch user info with the access token and do routing 
    fetchUserInfoAndDoRouting()
}


</script>

<template>
    <div class="login__container__body">
        <form class="login__container__body__form" @submit.prevent="login">
            <div class="login__container__body__form__group">
                <div class="input_container">
                    <input type="email" id="email" class="login__container__body__form__group__input" placeholder="Email"
                        v-model="email" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-xmark" @click="email = ''" />
                </div>
            </div>
            <div class="login__container__body__form__group">

                <div class="input_container">
                    <input :type="showPassword ? 'text' : 'password'" id="password"
                        class="login__container__body__form__group__input" placeholder="Password" v-model="password" />
                    <font-awesome-icon class="icon" :icon="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
                        @click="togglePassword" />
                </div>
            </div>
            <div class="login__container__body__form__group">
                <div class="remember_container">
                    <div class="remember">
                        <input type="checkbox" id="remember_me" class="login__container__body__form__group__checkbox"
                            v-model="rememberMe" />
                        <label for="remember_me">Remember me</label>
                    </div>
                    <div class="forgot-password_container">
                        <a href="http://">Forgot Password?</a>
                    </div>
                </div>
            </div>
            <div class="login__container__body__form__group">
                <button type="submit" class="login__container__body__form__group__button">Sign in</button>
            </div>

            <GoogleLogin :callback="loginWithGoogle">
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="">
                Sign in with Google
            </GoogleLogin>
            <div class="login__container__body__form__group">
                <p class="sigup_optional">Don't have an account? <RouterLink to="/register">Register</RouterLink>
                </p>
            </div>
        </form>
    </div>
</template>

<style scoped>
input {
    font-size: 14px;
    margin: 0;
    background: none;
    padding: 10px;

}

input:focus {
    outline: none;
}

.login__container__body__form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.login__container__body__form__group__input {
    border: none;
}

.input_container {
    display: flex;
    padding: 2px 10px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #D0D5DD;
    border-radius: 5px;
}

.remember {
    display: flex;
    align-items: center;
    line-height: 30px;
}

.remember_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login__container__body__form__group__label {
    margin-bottom: 10px;
}

button {
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    min-width: 360px;
    height: 44px;
}

.login__container__body__form__group__button {
    background-color: var(--primary);
    color: #fff;
}

.g-btn-wrapper[data-v-5e610566] {
    display: flex;
}

.g-btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-items: center;
    border: 1px solid #D0D5DD;
    background: #fff;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    min-width: 360px;
}

.g-btn-wrapper img {
    width: 24px;
    height: 24px;
}

.sigup_optional {
    text-align: center;
}

.login__container__body__form__group__checkbox {
    margin-right: 5px;
}

.icon {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: var(--primary);
    font-weight: 700;
}

a:link {
    color: var(--primary);
}</style>