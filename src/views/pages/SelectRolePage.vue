<script setup>
import Header from '../components/Header.vue';
import { useRouter } from 'vue-router';
import { inject, ref } from 'vue';
import axios from 'axios';
import { VUE_APP_BACKEND_URL } from '../../../env';
const router = useRouter();
const store = inject('store');
const selectedRole = ref('employee');

const handleSelectRole = (e) => {
    selectedRole.value = e.currentTarget.id;
    console.log(selectedRole.value);
}

const handleSubmit = async () => {


    store.state.isLoading = true;



    if (selectedRole.value == 'employee') {
        // register employee require one more step
        router.push('/enter-manager-code');
    } else if (selectedRole.value == 'manager') {
        const option = {
            headers: {
                'Authorization': `Bearer ${store.state.accessToken}`
            }
        }
        const response = await axios.post(`${VUE_APP_BACKEND_URL}/api/auth/register-account/manager`, {}, option);

        if (response.data.status == 200) {
            router.push('/waiting-for-admin-approval');

        }

    }
    store.state.isLoading = false;

}

</script>

<template>
    <main>
        <div class="selecting-role-page">
            <Header />
            <h1>Choose the account type</h1>
            <p>Please choose your role in the organization</p>
            <div class="role-container">
                <div class="role" @click="handleSelectRole" id="employee">
                    <img class="human-icon" :class="selectedRole == 'employee' ? 'selected' : ''"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbM1sKRHlT8AroSFkNAmAT4fCrvcBOqCUXX_e1YF45ZjkBnqYDKz7AmqZblmAlZALabY&usqp=CAU"
                        alt="">
                    <p>Employee</p>
                </div>

                <div class="role" @click="handleSelectRole" id="manager">
                    <img class="human-icon" :class="selectedRole == 'manager' ? 'selected' : ''"
                        src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-young-service-boy-vector-download-user-icon-vector-avatar-png-image_1991056.jpg"
                        alt="">
                    <p>Manager</p>
                </div>
            </div>

            <button @click="handleSubmit">Ok</button>
        </div>
    </main>
</template>


<style scoped>
main {
    background-color: var(--primary);
    height: 100vh;
    display: flex;
    justify-content: center;
    /* margin-top: 100px */
}

.selecting-role-page {
    width: 35%;
    max-width: 800px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px 0;
    gap: 20px;
    text-align: center;
}

.role-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 20px 0;
    gap: 30px;
}

.human-icon {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 5px;
    cursor: pointer;
    filter: grayscale();
    transition: all 0.3s ease-in-out;
    border: 4px solid gray;
}

.human-icon:hover {
    filter: none;
}

.selected {
    filter: none;
    border: 4px solid rgb(47, 255, 141);
}

button {
    width: 100px;
    height: 40px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>