<script setup>
import Header from '../../components/Header.vue';
import RegisterForm from './RegisterForm.vue';


</script>
<template>
    
    <div id="logo"></div>
    <div class="register">
        <div class="register__container">
            <Header />

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

    .register {
        background: var(--primary);
        height: 100vh;
        display: flex;
        justify-content: center;

    }

    h1 {
        text-align: left;
        font-size: 25px;
        /* border-bottom: 1px solid #ccc; */
    }
    .register__container {
        width: 35%;
        max-width: 800px;
        min-width: fit-content;
        background: white;
        padding: 0px 30px 0px;
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
