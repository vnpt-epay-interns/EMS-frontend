<script setup>
import Header from '../../components/Header.vue';
import RegisterForm from './RegisterForm.vue';
</script>
<template>
    <Header />
    <div id="logo"></div>
    <div class="register">
        <div class="register__container">
            <div class="register__container__header">
                <h1>Register</h1>
            </div>
            <div class="register__container__form">    
                <RegisterForm />
                <div class="register__login_link">
                    <p>
                        Already have an account?
                    </p>
                    <router-link to="/login" class="link">Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    * {
        margin: 0;
        padding: 0;
    }
    .register {
        background: var(--primary);
        height: 100vh;
        display: flex;
        justify-content: center;

    }

    h1 {
        text-align: center;
        font-size: 25px;
        /* border-bottom: 1px solid #ccc; */
    }
    .register__container {
        width: 35%;
        max-width: 800px;
        background: white;
        padding: 20px 50px;
        padding-top: 100px;
    }

    
    .register__login_link {
        font-size: 11px;
        display: flex;
        gap: 10px;
        font-weight: normal;
    }

    .link {
        font-weight: bold;
        cursor: pointer;
    }
        
</style>
