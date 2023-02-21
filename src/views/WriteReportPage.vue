<script setup>
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css'
    
</script>

<template>
    <div class="container">
        <header>
            <h1>
                Report name
            </h1>
        </header>
        <QuillEditor theme="snow" toolbar="full" />
        <footer>
            <button class="save-btn">Save</button>
        </footer>
    </div>
</template>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 30px;
    }

    .ql-editor {
        min-height: 400px;
        border-top: 1px solid #ccc;
    }

    footer {
        display: flex;
        justify-content: flex-end;
    }

    .save-btn {
        background-color: var(--primary);
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        padding: 10px;
        min-width: 200px;
        height: 44px;
    }
</style>