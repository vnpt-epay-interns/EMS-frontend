<template>
    <ChangeAvatarModalVue/>
    <div class="profile__detail">
        <div class="user__profile">
            <div class="img-container">
                <img class='user__avatar' :src="store.state.user.avatar" alt="">
                <button>Change avatar</button>
            </div>
            <h1 class="user__fullName">{{ firstName + " " + lastName }}</h1>
            <p class="user__email">{{ email }}</p>
        </div>
        <div class="edit__user__profile">
            <div class="input">
                <label for="firstname">First name</label>
                <input type="text" name="firstname" id="firstname" placeholder="John" v-model="firstName" />
            </div>
            <div class="input">
                <label for="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" placeholder="Doe" v-model="lastName" />
            </div>
            <div class="input email">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="alo@gmail.com" v-model="email" readonly>
            </div>
            <div class="inputr referenceCode" v-if="store.state.user.role === 'MANAGER'">
                <label for="referencecode">Reference Code</label>
                <input type="text" name="referencecode" id="referencedcode" placeholder="********" v-model="referenceCode"
                    readonly>
                <!-- <input type="text" name="referencecode" id="referencedcode"
                            v-if="store.state.user.role === 'EMPLOYEE'" placeholder="********" v-model="referenceCodeE"
                            readonly> -->
            </div>
        </div>


        <div class="submit" @click="handleSave">
            <button>Save</button>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
// import { RouterLink } from 'vue-router';
import { VUE_APP_BACKEND_URL } from '../../../env'
import ChangeAvatarModalVue from './ChangeAvatarModal.vue'
const store = inject('store')
const firstName = ref(store.state.user.firstName)
const lastName = ref(store.state.user.lastName)
const email = ref(store.state.user.email)
const referenceCode = ref('')
const referenceCodeE = ref('')

const handleSave = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.accessToken}`,
        },
    };

    const body = {
        firstName: firstName.value,
        lastName: lastName.value,
    }

    store.state.isLoading = true;
    await axios.put(`${VUE_APP_BACKEND_URL}/api/auth/update-user-info`, body, config)
    store.state.isLoading = false;
}

onBeforeMount(async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.state.accessToken}`,
        },
    };

    if (store.state.user.role === 'MANAGER') {
        const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/get-referenced-code`, config)
        referenceCode.value = response.data.data.referenceCode
    }
    else {
        const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/employee/get-referenced-code`, config)
        referenceCodeE.value = response.data.data.referenceCode
    }
    // store.state.isLoading = false;
}

)


</script>

<style lang='scss' scoped>
.profile__detail {
    padding: 10px 50px;

    .user__profile {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        border-bottom: 0.5px solid white;
        padding-bottom: 0px;
        padding: 10px;
        overflow: hidden;

        .user__avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

    }

    .edit__user__profile {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        .email,
        .referenceCode {
            grid-column: 1 / 3;

            input {
                &:focus {
                    outline: none;
                }
            }
        }

        input {
            font-size: 12px;
            background-color: #FAFDFF;
            padding: 10px;
            border-radius: 10px;
            border: 0.5px solid rgba(0, 0, 0, 0.219);
            margin-top: 5px;
            width: 100%;
            box-sizing: border-box;

        }
    }


    .submit {
        display: flex;
        justify-content: center;

        button {
            width: fit-content;
            padding: 10px 20px;
            border: none;
            border-radius: 10px;
            font-size: 12px;
            background: var(--primary);
            color: white;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            display: flex;
            align-items: center;
        }

        button:hover {
            background: var(--primary-hover);

        }
    }

}






label {
    display: flex;
    font-size: 16px;
}
</style>