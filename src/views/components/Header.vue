<template>
    <div class="logo">
        <img src="../../assets/logo/logo1.png" alt="">
        <div class="name">
            <h2>EMS</h2>
            <h4>Employee Management System</h4>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
.logo {
    width: 35%;
    max-width: 800px;   
    display: flex;
    gap: 10px;
    width: fit-content;
    margin: 10px auto 30px auto;     
}

img {
    width: 50px;
    height: auto;
}

.name {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

h2, h4{
    margin: 0;
    font-size: 10px;
}
</style>