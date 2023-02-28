<script setup>
    import { ref, reactive } from 'vue'
    import router from './../../../router/index'
    import axios from 'axios'
    import { VUE_APP_BACKEND_URL } from '../../../../env.js'
    import useGoogleAuth  from 'vue-google-oauth2'

    const email = ref('')
    const password = ref('')
    const showPassword = ref(false)

    const togglePassword = () => {
        showPassword.value = !showPassword.value
    }

    const login = async () => {
        const body = {
            email: email.value,
            password: password.value
        }

        await axios
            .post(`${VUE_APP_BACKEND_URL}/api/auth/login`, body)
            .then(response => {
                const token = response.data.data.token
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                localStorage.setItem('access-token', token)
            })
            router.push({ name: 'Dashboard' })
    }

    const { signIn } = useGoogleAuth()

</script>

<template>
    <div class="login__container__body">
        <form class="login__container__body__form" @submit.prevent="login">
            <div class="login__container__body__form__group">
                <div class="input_container">
                    <input type="email" id="email" class="login__container__body__form__group__input" placeholder="Email" v-model="email" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-xmark" @click="email='' "/>
                </div>
            </div>
            <div class="login__container__body__form__group">

                <div class="input_container">
                    <input :type="showPassword ? 'text' : 'password'" id="password" class="login__container__body__form__group__input" placeholder="Password" v-model="password" />
                    <font-awesome-icon class="icon" :icon="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" @click="togglePassword" />
                </div>
            </div>
            <div class="login__container__body__form__group">
                <div class="remember_container">
                    <div class="remember">
                        <input type="checkbox" id="remember_me" class="login__container__body__form__group__checkbox" v-model="rememberMe" />
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

            <div class="login__container__body__form__group login__container__body__form__group__button__google" @click="signIn">
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" >
                Sign in with Google
            </div>
            <div class="login__container__body__form__group">
                <p class="sigup_optional">Don't have an account? <a href="" >Sign up</a></p>
            </div>
        </form>
    </div>
</template>

<style scoped>
    /* .login__container__body {
        background: red;
    }    */

    input {
        font-size: 14px;
        margin: 0;
        background: none;
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

    .login__container__body__form__group__button__google {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        align-items: center;
        border: 1px solid #D0D5DD;
        background: #fff;
        cursor: pointer;
        border-radius: 5px;
        padding: 10px;
        min-width: 360px;
    }

    .login__container__body__form__group__button__google img {
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
    }
</style>