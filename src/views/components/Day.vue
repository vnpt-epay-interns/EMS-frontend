<template>
    <div class="day">
        <div class="day-number">1</div>
        <div class="fulltime">Vy</div>
        <div class="morning">Hai</div>
        <div class="afternoon">Vu</div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.day {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.169);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    padding: 1px 5px;
    box-sizing: border-box;


    .day-number {
        text-align: left;
        font-weight: 900;
        padding-left: 10px;
    }
    .fulltime,
    .morning,
    .afternoon {
        font-size: 14   px;
        text-align: center;
        width: 100%;
        border-radius: 10px;
        background-color: #A3EEFE;
    }

    .morning {
        background-color: #FCFEA3;
    }

    .afternoon {
        background-color: #FF8DA2;
    }
}

div {
    text-align: center;
}
</style>