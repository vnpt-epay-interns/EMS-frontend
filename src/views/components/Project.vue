<template>
    <div class="project">
        <div class="head__color"    ></div>
        <div class="project__content">
            <div class="project__content__title">
                <h3>{{ project.name }}</h3>
            </div>
            <div class="project__date">
                <h4> {{ project.createdAt }}</h4>
            </div>
            <div class="project__status">
                <p>{{ project.status }}</p>
            </div>
        </div>
        <div class="tail_color"></div>
    </div>
</template>

<script setup>
const {project} = defineProps(['project'])
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
        padding: 20px;
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

.project__content__title {
    padding: 10px;
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