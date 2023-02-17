<script setup>
import Header from '../../components/Header.vue';

</script>

<template>
            <Header />

    <main> 
        <div class="selecting-role">
            <h1>Choose the account type</h1>
            <p>Please choose your role in the organization</p>
            <div class="role-container">
                <div class="role">
                    <img class='human-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbM1sKRHlT8AroSFkNAmAT4fCrvcBOqCUXX_e1YF45ZjkBnqYDKz7AmqZblmAlZALabY&usqp=CAU" alt="">
                    <p>Employee</p>
                </div>

                <div class="role">
                    <img class='human-icon' src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-young-service-boy-vector-download-user-icon-vector-avatar-png-image_1991056.jpg" alt="">
                    <p>Manager</p>
                </div>
            </div>

            <button>Ok</button>
        </div>
    </main>
</template>


<style scoped>
    main {
        background-color: var(--primary);
        text-align: center;
        height: 100vh;
        display: flex;
        justify-content: center;
        /* margin-top: 100px */
    }

    .selecting-role {
        /* margin-top: 50px; */
        padding-top: 100px;
        width: 35%;
        max-width: 800px;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
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
    }

    .human-icon:hover {
        filter: none;
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