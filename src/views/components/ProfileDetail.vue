<template>
    <form>
        <div class="fullname">
            <div class="profile_firstname">
                <label for="firstname">First name</label>
                <input type="text" name="firstname" id="firstname" placeholder="John" />
            </div>
            <div class="profile_lastname">
                <label for="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" placeholder="Doe" />
            </div>
        </div>
        <div class="profile_email">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="alo@gmail.com">
        </div>

        <div class="submit">
            <Button>Save</Button>
        </div>
    </form>
</template>

<script setup>


</script>

<style>
form {
    width: 100%;
}

input {
    font-size: 20px;
    background-color: #FAFDFF;
    padding: 2px;
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

.fullname {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    margin-bottom: 1rem;
    padding-bottom: 30px;
}

.profile_firstname {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 600px;
    font-size: 20px;

}

.profile_lastname {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-right: 600px;
    font-size: 20px;
}

.profile_email {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 600px;
    padding-right: 600px;
    margin-bottom: 50px;
    font-size: 20px;

}

button {
    background-color: #263159;
    color: white;
    padding: 15px 50px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    font-size: 15px;
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
</style>