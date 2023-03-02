<script setup>
    import Header from '@/views/components/Header.vue'
    
</script>

<template>
    <main>
        <div class="container">
            <Header />  
            <div class="body">
                <p class="header">
                    Waiting for administrator’s approval
                </p>
                <div class="description">
                    You have successfully registered as a manager.
                    <br />
                    Now you need to wait for admin to approve your registration
                </div>
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

    .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .header {
        font-weight: 700;
        font-size: 30px;
        line-height: 48px;
        letter-spacing: 0.01em;
        text-transform: capitalize;
        font-style: normal;
        text-align: center;
    }

    .description {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
    }
</style>