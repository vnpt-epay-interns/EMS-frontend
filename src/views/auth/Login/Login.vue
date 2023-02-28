<script setup>
    import Header from '../../components/Header.vue'
    import LoginForm from './LoginForm.vue'
</script>

<template>
    <main>
        <div class="container">
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
        </div>
    </main>
</template>

<style scoped>
    main {
        background-color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 100vh;
        min-height: fit-content;
    }

    .container {
        min-width: 35%;
        /* height: 100%; */
        max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        min-height: 100vh;
        padding: 10px 20px;

        background: #fff;
        padding: 0 30px 0;
    }

    .login {
        font-style: normal;
    }

    .login__container__header__title {
        font-weight: 700;
        font-size: 30px;
        line-height: 48px;
        letter-spacing: 0.01em;
        text-transform: capitalize;
    }

    .login__container__header__description {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #667085;
    }
</style>