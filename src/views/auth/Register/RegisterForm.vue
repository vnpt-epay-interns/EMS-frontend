<script setup>
import { ref } from 'vue'

const password = ref('')
const confirmedPassword = ref('')
const showPassword = ref(false)

function toggleShowPassword() {
    showPassword.value = !showPassword.value
}
</script>

<template>
    <form>
        <div class="register__container__form__input">
            <label for="name">First name</label>
            <input type="text" name="name" id="name" placeholder="John" />
        </div>

        <div class="register__container__form__input">
            <label for="name">Last name</label>
            <input type="text" name="name" id="name" placeholder="Due" />
        </div>

        <div class="register__container__form__input input-email">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
        </div>
        <div class="register__container__form__input">
            <label for="password">Password</label>
            
            <div class="password__container">
                <input :type="showPassword ? 'text' : 'password'" name="password" id="password" placeholder="********"
                    v-model="password" /> 
                <span>
                    <font-awesome-icon class="fa" :icon="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" @click="toggleShowPassword"/>
                </span>

            </div>
        </div>
        <div class="register__container__form__input">
            <label for="confirmedPassword">Confirm Password</label>
            <input :type="showPassword ? 'text' : 'password'" name="confirmedPassword" id="confirmedPassword"
                placeholder="********" v-model="confirmedPassword">
        </div>

        <div class="register__container__form__input">
            <button>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </button>
        </div>
    </form>
</template>

<style scoped>

.register__container__form form {
    margin: 40px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px 20px
}

.input-email {
    grid-column-start: 1;
    grid-column-end: 3;
}

.register__container__form__input {
    display: flex;  
    flex-direction: column
}

input {
    padding: 10px;
    border-radius: 5px;
    border: 0.5px solid rgba(0, 0, 0, 0.219);
}

input::placeholder {
    color: rgba(0, 0, 0, 0.219);
}

input:focus {
    outline: none;
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
}

button:hover {
    background: #1437b5;

}



#password {
    width: 100%;
    box-sizing: border-box;
}

.password__container {
    position: relative;
}
.password__container span {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

.showPassword__input {
    display: none;
}

.showPassword__input:checked + .fa { color: red; }

</style>