<script setup>
    import Header from '@/views/components/Header.vue'
    import { inject } from 'vue';

    const store = inject('store');
</script>

<template>
    <main>
        <div class="container">
            <Header />  
            <div class="content">
                    <div class="title">Verify your email</div>
                    <p class="user__email">{{ store.state.user.email }}</p>
                    <p class="description">
                        Welcome,  we’re excited you’re joining us.
                        <br />
                    Ready to get started? First, verify your email .
                    </p>
            </div>
        </div>
    </main>
    
</template>

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