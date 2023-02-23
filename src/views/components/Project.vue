<template>
    <div class="project">
        <div class="head__color"></div>
        <div class="project__info">
            <h1 class="title">Design UI for Manager Dashboard</h1>
            <p class="created__at">12/03/2023</p>
            <div class="task__status__container">
                <p class="task__status new">1 New</p>
                <p class="task__status in-progress">2 In-progress</p>
                <p class="task__status ready">2 Ready</p>
            </div>
        </div>
        <div class="tail_color"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

    .project {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 700px;

        .head__color {
            width: 100%;
            height: 10px;
            background-color: #4C4AD0;
            border-radius: 10px 10px 0 0;
        }

        .tail_color {
            width: 100%;
            height: 10px;
            background-color: #4C4AD0;
            border-radius: 0 0 10px 10px;
        }

        .project__info {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 10px 10px 10px 20px;
                    background-color: #E6ECF0;

        }

        .title {
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.01em;
            text-transform: capitalize;
        }

        .created__at {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.01em;
            text-transform: capitalize;
        }

        .task__status {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.01em;
            text-transform: capitalize;
        }
    }
    .task__status__container {
        display: flex;
        gap: 50px;

        .new {
            color: red
        }

        .in-progress {
            color: #002196;
        }

        .ready {
            color: #129B30;
        }
    }

    


</style>