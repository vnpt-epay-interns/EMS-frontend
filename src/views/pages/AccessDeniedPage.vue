<script setup>
    import Header from '@/views/components/Header.vue'
</script>

<template>
    <main>
        <div class="container">
            <Header />  
            <div class="body">
                <div class="logo">
                    <p class="number">4</p>
                    <p class="number">0</p>
                    <p class="number">3</p>
                </div>
                <p class="header">
                    Access Denied
                </p>
                <div class="description">
                    You do not have permission to access this resource.
                    <br />
                    You need to waiting for administrator’s approval.
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

    .number {
        display: inline-block;
        font-size: 70px;
        font-weight: bold;
    }

    .number:first-child {
        color: #184680;
    }

    .number:nth-child(2) {
        color: #3E97D9;
        transform: translateX(-15px);
    }

    .number:last-child {
        color: #184680;
        transform: translateX(-30px);
    }

    .header {
        color: #184680;
        font-weight: bold;
    }

    .description {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
    }
</style>