<template>
    <div class="dashboard">
        <div class="heading">
            <div class="left__side">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <input type="text" placeholder="Search items">
            </div>
            <div class="right__side">
                <button class="add__task__btn">New Task</button>
            </div>
        </div>

        <div class="column-container">
            <div class="column" v-for="index in 4">
                <div class="status__info">
                    <h2 class="status__name">New</h2>
                    <p class="status__amount">3</p>
                </div>

                <div class="task-container new">
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import Task from '../components/Task.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<style lang="scss" scoped>
.dashboard {
    padding: 10px;
    // padding: 20px;
    .heading {
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 20px 0;

        .left__side {
            border: 0.5px solid #ccc;
            padding: 5px 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;

            input {
                margin-left: 5px;
                border: none;

                &:focus {
                    outline: none;
                }
            }
        }

        .right__side {
            .add__task__btn {
                font-size: 15px;
                cursor: pointer;
                border: none;
                background: #0013FE;
                min-width: 70px;
                border-radius: 5px;
                text-align: center;
                width: fit-content;
                padding: 5px 10px;
                color: white;
            }
        }

    }

    .column-container {
        display: flex;
        gap: 10px;

        .column {
            background: #E6ECF0;
            width: fit-content;
            padding: 10px 20px;
            min-height: 750px;
            height: 95%;
            border-radius: 10px;
            // overflow-y: scroll;

            .status__info {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                align-items: center;
                gap: 20px;

                .status__name {
                    font-size: 15px;
                    font-weight: 700;
                }

                .status__amount {
                    font-size: 13px;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    font-weight: 500;
                    background: #D5D5D5;
                    border-radius: 50%;
                }
            }

            .task-container {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }

    }



}
</style>