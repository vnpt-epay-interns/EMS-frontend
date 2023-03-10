<template>
    <form>
        <div class="profile__detail">
            <div class="user__profile">
                <img class='user__avatar' :src="store.state.user.avatar" alt="">
                <h1 class="user__fullName">{{ firstName + " " + lastName }}</h1>
                <p class="user__email">{{ email }}</p>
            </div>
            <div class="edit__user__profile">
                <div class="full__name">
                    <div class="profile_firstname">
                        <label for="firstname">First name</label>
                        <input type="text" name="firstname" id="firstname" placeholder="John" v-model="firstName" />
                    </div>
                    <div class="profile_lastname">
                        <label for="lastname">Last name</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Doe" v-model="lastName" />
                    </div>
                </div>
                <div class="user__contact">
                    <div class="profile_email">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="alo@gmail.com" v-model="email" readonly>
                    </div>
                    <div class="referenced__code">
                        <label for="referencecode">Reference Code</label>
                        <input type="text" name="referencecode" id="referencedcode" v-if="store.state.user.role === 'MANAGER'"
                            placeholder="********" v-model="referenceCode" readonly>
                        <input type="text" name="referencecode" id="referencedcode"
                            v-if="store.state.user.role === 'EMPLOYEE'" placeholder="********" v-model="referenceCodeE"
                            readonly>
                    </div>
                </div>
            </div>


            <div class="submit" @click="handleSave">
                <Button>Save</Button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { inject } from 'vue'
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
// import { RouterLink } from 'vue-router';
import { VUE_APP_BACKEND_URL } from '../../../env'

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

<style scoped>
.user__profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    border-bottom: 0.5px solid white;
    padding-bottom: 0px;
    margin-top: 100px;
    overflow: hidden;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user__avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user__contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 30px;

}

input {
    font-size: 20px;
    background-color: #FAFDFF;
    padding: 10px;
    border-radius: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.219);
    font-family: 'Poppins', sans-serif;
    margin-top: 10px
}

label {
    display: flex;
    font-size: 16px;
}

.full__name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 30px;

}

.profile__detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    margin-left: 50px;
}

/* .profile_firstname {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    margin-right: 10px;
} */

/* button {
    background-color: #263159;
    color: white;
    padding: 15px 50px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    font-size: 15px;
}
 */

.submit {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

button {
    font-family: 'Poppins', sans-serif;
    width: fit-content;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    background: #536FD8;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;
}

button:hover {
    background: #1437b5;

}
</style>