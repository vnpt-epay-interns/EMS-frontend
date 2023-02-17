<template>
    <div class="login__container__body">
        <form class="login__container__body__form" @submit.prevent="login">
            <div class="login__container__body__form__group">
                <label for="email" class="login__container__body__form__group__label">Email</label>
                <div class="input_container">
                    <input type="email" id="email" class="login__container__body__form__group__input" placeholder="Email" v-model="email" />
                    <img src="" alt="">
                </div>
            </div>
            <div class="login__container__body__form__group">
                <label for="password" class="login__container__body__form__group__label">Password</label>
                <div class="input_container">
                    <input type="password" id="password" class="login__container__body__form__group__input" placeholder="Password" v-model="password" />
                    <img src="" alt="">
                </div>
            </div>
            <div class="login__container__body__form__group">
                <div class="remember_container">
                    <div class="remember_container">
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

            <div class="login__container__body__form__group">
                <img src="" alt="">
                <button class="login__container__body__form__group__button__google">Sign in with Google</button>
            </div>
            <div class="login__container__body__form__group">
                <p class="sigup_optional">Don't have an account? <a href="">Sign up</a></p>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .login__container__body {
        
    }

    .login__container__body__form__group {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .login__container__body__form__group__input {
        border: none;
        padding: 10px;
    }

    .input_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #D0D5DD;
        border-radius: 5px;
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
        border-radius: 5px;
        padding: 10px;
        min-width: 360px;
        height: 44px;
    }
    
    .login__container__body__form__group__button {
        background-color: #263159;
        color: #fff;
    }

    .login__container__body__form__group__button__google {
        border: 1px solid #D0D5DD;
        background: #fff;
    }

    .sigup_optional {
        text-align: center;
    }
</style>