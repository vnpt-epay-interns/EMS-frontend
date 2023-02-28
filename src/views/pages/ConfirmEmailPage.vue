<script setup>
    import Header from '@/views/components/Header.vue'
</script>

<template>
    <main>
        <div class="container">
            <Header />  
            <div class="content">
                <header>
                    <div class="title">Verify your email</div>
                    <p class="description">
                        Welcome,  we’re excited you’re joining us.
                        <br />
                        Ready to get started? First, verify your email address.</p>
                </header>
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
    }

    .description {
        margin-top: 20px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    header {
        margin-bottom: 56px;
        font-style: normal;
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