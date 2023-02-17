<script setup>
    import { ref } from 'vue'
    import Header from '@/views/components/Header.vue'
    import LoginForm from '@/views/auth/Login/LoginForm.vue'
    
</script>

<template>
    <main>
        <Header />
        <div class="login">
            <div class="login__container">
                <div class="login__container__header">
                    <h1 class="login__container__header__title">Sign In</h1>
                    <p class="login__container__header__description">Please fill your details to access your account.</p>
                </div>
            </div>
        </div>

        <LoginForm />
    </main>


</template>