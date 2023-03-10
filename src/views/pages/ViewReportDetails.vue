<template>
    <div class="container">
        <header>
            <h1 class="report__header">
                {{ report.title }}
            </h1>

            <div class="report__info">
                <p class="report__created_date">
                    {{ report.createdDate }}
                </p>
                <p class="report__author__name">{{ report.employeeName }}</p>
            </div>
        </header>

        <div class="report__content" v-html="report.content"></div>

        <button class="report__mark_as_read_btn">Mark as read</button>
    </div>
</template>

<script setup>
    import { inject, ref } from 'vue';

    const store = inject('store');
    const report = store.state.report;
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1000px;
        padding: 50px;
        .report__info {
            display: flex;
            gap: 20px;
        }
    }

    .report__content {
        margin-top: 50px;
    }

    .report__mark_as_read_btn {
        margin-top: 50px;
        width: fit-content;
        padding: 10px 20px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background: var(--primary-hover);
        }
    }
</style> 