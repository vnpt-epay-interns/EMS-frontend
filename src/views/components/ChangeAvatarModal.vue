<template>
    <div class="change-avatar-modal">
        <div class="background" @click="closeModal"></div>
        <div class="main-content">
            <p v-if="file == null">Drag your file here</p>
            <p v-else>File name: {{ file.name }}</p>

            <div class="dropzone" :class="dragging ? 'dragging' : ''" 
            @dragenter.prevent="toggleActive"
                @dragleave="toggleActive" 
                @dragover.prevent 
                @drop.prevent="handleDrop">

                <label for="dropzoneFile">Select File</label>
                <input type="file" id="dropzoneFile" class="dropzoneFile" @change="handleFileInput" />

                <div class="image-preview" v-if="file">
                    <img :src="imageUrl" alt="">
                </div>
            </div>
            <button class="save-btn" @click="handleSave">Save</button>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import axios from 'axios';
import { VUE_APP_BACKEND_URL } from '../../../env';
import { fetchUserInfoAndDoRouting } from '../../router/index.js'

const { showModal } = defineProps(['showModal']);

const dragging = ref(false);
const file = ref(null)
const imageUrl = ref(null);
const store = inject('store')
const emit = defineEmits(['closeModal']);


const handleDrop = (event) => {
    file.value = event.dataTransfer.files[0];
    imageUrl.value = URL.createObjectURL(file.value);
    dragging.value = false;
};

const toggleActive = () => {
    dragging.value = !dragging.value;
};


const handleFileInput = (event) => {
    file.value = event.target.files[0];
    imageUrl.value = URL.createObjectURL(file.value);
};

const handleSave = async () => {
    const formData = new FormData()
    formData.append('file', file.value);

    const config = {
        headers: {
            'Authorization': 'Bearer ' + store.state.accessToken,
            'Content-Type': 'multipart/form-data'
        }
    };
    console.log('asd');
    store.state.isLoading = true;
    const response = await axios.post(`${VUE_APP_BACKEND_URL}/api/auth/change-avatar`, formData, config);
    store.state.isLoading = false;
    console.log('after hhihi'); 

    if (response.data.status != 200) {
        store.state.popup.displayForMilliSecond(response.data.message, 2000, false);
    } else {
        store.state.popup.displayForMilliSecond(response.data.message, 2000, true);
        fetchUserInfoAndDoRouting();
    }
    closeModal();
}

const closeModal = () => {
    emit('closeModal')
}


</script>

<style lang="scss" scoped>
.change-avatar-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .background {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }

    .main-content {
        width: 70%;
        height: 70%;
        max-width: 600px;
        max-height: 600px;
        background: white;
        z-index: 10;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-radius: 10px;
        gap: 20px;
        
        .dropzone {
            width: 80%;
            height: 80%;
            border: 2px dashed #ccc;
            // background: red;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            flex-direction: column;
            cursor: pointer;



            label {
                padding: 5px 10px;
                color: #fff;
                font-size: 12px;
                background-color: var(--primary);
                border-radius: 5px;
                transition: 0.3s ease all;
                cursor: pointer;

                &:hover {
                    background-color: var(--primary-hover);
                }
            }

            input {
                display: none;
            }

            .image-preview {
                width: 80%;
                height: 80%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 60%;
                    height: 60%;
                    object-fit: cover;
                }
            }
        }

        .dragging {
            background-color: #ccc;
        }


        .save-btn {
            &:hover {
                background: var(--primary-hover);
                color: white;
            }
        }
    }
}
</style>