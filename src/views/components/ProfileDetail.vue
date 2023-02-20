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

label {
    display: flex;
}

.fullname {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;;
    margin-bottom: 1rem;

}

.profile_firstname {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 400px;
}

.profile_lastname {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-right: 400px;
}

.profile_email {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 400px;
    padding-right: 400px;
    margin-bottom: 50px;
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


</style>