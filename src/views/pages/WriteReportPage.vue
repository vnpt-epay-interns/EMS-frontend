<script setup>
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css'
    import { VUE_APP_BACKEND_URL } from '../../../env'
    import { ref, inject } from 'vue'
    import axios from 'axios';
    import { useRoute } from 'vue-router'
    import ErrorText from '../components/ErrorText.vue';
    
    const store = inject('store')
    const route = useRoute()
    const token = localStorage.getItem('accessToken') === null ? store.state.accessToken : localStorage.getItem('accessToken')
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const content = ref('')
    const title = ref('')
    const errorMessage = ref('')
    const isValidTitle = ref(true)
    const isValidContent = ref(true)

    const validateField = () => {
        if (title.value === '') {
            errorMessage.value = 'Title is required'
            isValidTitle.value = false
        }
        else if (content.value === '') {
            errorMessage.value = 'Content is required'
            isValidContent.value = false
        }
        setTimeout(() => {
            errorMessage.value = ''
            isValidTitle.value = true
            isValidContent.value = true
        }, 1500)
    }
    const reset = () => {
        content.value = ''
        title.value = ''
    }
    const submit = async () => {
        validateField()
        if (errorMessage.value !== '') return

        const body = {
            content: content.value,
            title: title.value, 

        }

        let response = null;
        store.state.isLoading = true

        response = await axios.post(`${VUE_APP_BACKEND_URL}/api/employee/write-report`, body , options)
        
        store.state.isLoading = false

        if (response.data.status === 200) {
            store.state.popup.displayForMilliSecond(response.data.message, 2000, true)
        } else {
            store.state.popup.displayForMilliSecond(response.data.message, 2000)
        }
        reset()
    }
</script>

<template>
    <div class="container">
        <header>
            <label for="title">Report Title: </label>
            <div class="title_field">
                <input type="text" id="title" v-model="title">
                <ErrorText v-if="!isValidTitle" :errorMessage="errorMessage"/>
            </div>
        </header>
        <QuillEditor theme="snow" toolbar="full" ref="editor" content-type="html" placeholder="Type here.... " v-model:content="content"/>
        <ErrorText v-if="!isValidContent" :errorMessage="errorMessage"/>
        <footer>
            <button class="save-btn" @click="submit">Save</button>
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

    header {
        display: flex;
        gap: 10px;
    }

    .text_field #title {
        height: 100%;
        width: 300px;
        border: 1px solid #ccc;
        padding-left: 5px;
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