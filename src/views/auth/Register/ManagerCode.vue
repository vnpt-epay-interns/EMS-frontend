<script setup>
    import Header from '@/views/components/Header.vue'
</script>

<template>
    <main>
        <div class="container">
            <Header />  
            <div class="content">
                <header>
                    <div class="title">Enter Manager Code</div>
                    <p class="description">Please fill your details to access your account.</p>
                </header>
    
                <div class="body">
                    <label for="code" class="login__container__body__form__group__label">Refenced Code</label>
                    <input type="text" id="code" class="login__container__body__form__group__input" placeholder="Enter Here" v-model="email" />
                </div>
    
                <footer>
                    <button>Submit</button>
                </footer>
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

    .body {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
    
    header {
        margin-bottom: 56px;
        font-style: normal;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        border: 1px solid #D0D5DD;
        padding: 10px;
        border-radius: 5px;
    }

    input:focus {
        outline: none;
    }

    button {
        cursor: pointer;
        border-radius: 5px;
        padding: 10px;
        min-width: 176px;
        height: 44px;
        background-color: var(--primary);
        color: #fff;
        border: none;
    }
</style>