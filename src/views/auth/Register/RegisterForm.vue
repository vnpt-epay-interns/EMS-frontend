<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { VUE_APP_BACKEND_URL } from '../../../../env.js'
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmedPassword = ref('')
const showPassword = ref(false)
const showPasswordError = ref(false)

const handleClick = async () => {

    if (password.value !== confirmedPassword.value) {
        showPasswordError.value = true
        return
    } else {
        showPasswordError.value = false
    }

    const body = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    // axios.defaults.withCredentials = true;
    const response = await axios.post(`${VUE_APP_BACKEND_URL}/auth/register`, {
        withCredentials: true,
    }, body);


    const data = response.data;
    console.log('data: ');
    console.log(data);


}


function toggleShowPassword() {
    showPassword.value = !showPassword.value
}

function checkEmailExists() {
    //TODO: this method will send a request to check if the email exists in the database
    console.log('checkEmailExist');
    console.log('email: ', email.value)
}
</script>

<template>
    <div class="register__container__form">
        <form>
            <div class="register__container__form__input">
                <label for="name">First name</label>
                <input type="text" name="name" id="name" placeholder="John" v-model="firstName" />
            </div>

            <div class="register__container__form__input">
                <label for="name">Last name</label>
                <input type="text" name="name" id="name" placeholder="Due" v-model="lastName" />
            </div>

            <div class="register__container__form__input input-email">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" v-model="email"
                    @blur="checkEmailExists" />
            </div>
            <div class="register__container__form__input">
                <label for="password">Password</label>

                <div class="password__container">
                    <input :type="showPassword ? 'text' : 'password'" name="password" id="password" placeholder="********"
                        v-model="password" :class="showPasswordError ? 'red__border' : ''" />
                    <span>
                        <font-awesome-icon class="fa" :icon="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                            @click="toggleShowPassword" />
                    </span>

                </div>
            </div>
            <div class="register__container__form__input">
                <label for="confirmedPassword">Confirm Password</label>
                <input :type="showPassword ? 'text' : 'password'" name="confirmedPassword" id="confirmedPassword"
                    placeholder="********" v-model="confirmedPassword" :class="showPasswordError ? 'red__border' : ''">
            </div>



            <div class="register__container__form__input">
                <button @click.prevent="handleClick">
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </button>
            </div>
        </form>

    </div>
</template>

<style lang="scss" scoped>
.register__container__form {
    max-width: 1000px;

    form {

        margin: 40px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px 20px;


        .register__container__form__input {
            display: flex;
            flex-direction: column;
            justify-content: center;




            .password__container {
                position: relative;
                display: flex;
                align-items: center;

                #password {
                    // margin: 0;
                    width: 100%;
                    box-sizing: border-box;
                }

                span {
                    position: absolute;
                    right: 10px;
                    top: 55%;
                    transform: translateY(-50%);
                    cursor: pointer;
                }

            }



            input {
                font-size: 12px;
                padding: 10px;
                border-radius: 5px;
                border: 0.5px solid rgba(0, 0, 0, 0.219);

                &::placeholder {
                    color: rgba(0, 0, 0, 0.219);
                }

                &::focus {
                    outline: none;
                }
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

                &:hover {
                    background: #1437b5;
                }
            }

            .red__border {
                border: 2px solid red;
            }

        }

        .input-email {
            grid-column-start: 1;
            grid-column-end: 3;
        }

    }
}
</style>