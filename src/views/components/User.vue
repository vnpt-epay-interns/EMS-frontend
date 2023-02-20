<template>
    <div class="user">
        <div class="user__avatar">
            <img :src="avatarURL" alt="User" />
        </div>
        <div class="user__info">
            <h3 class="user__name">John Doe</h3>
            <p class="user__role">Administrator</p>
        </div>
        <ProfileDetail />
    </div>
</template>

<script setup>

    import avatarURL from '../../assets/avatar/avatar1.jpg'
    import ProfileDetail from './ProfileDetail.vue'

</script>
 
<style>
.user {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
}

.user__avatar {
    width: 5rem;
    height:5rem;
    border-radius: 50%;
    overflow: hidden;
}

.user__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user__info {
    display: flex;
    flex-direction: column;
}
.fullName {
    display: flex;
    justify-content: space-between;
}

.email {
    display: flex;
    align-items:flex-start
}
</style>