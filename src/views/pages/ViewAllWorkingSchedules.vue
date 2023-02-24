<template>
    <div class="calendar">
        <header>
            <p class="year">2023</p>
            <button> 
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </button>
            <p class="month">May</p>
            <button>
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
        </header>
        <table>
            <thead>
                <th>
                    <p>Sunday</p>
                </th>
                <th>
                    <p>Monday</p>
                </th>
                <th>
                    <p>Tuesday</p>
                </th>
                <th>
                    <p>Wednesday</p>
                </th>
                <th>
                    <p>Thursday</p>
                </th>
                <th>
                    <p>Friday</p>
                </th>
                <th>
                    <p>Saturday</p>
                </th>
            </thead>
            <tbody>
                <tr v-for="index in 5">
                    <td>
                        <Day />
                    </td>
                    <td>
                        <Day />
                    </td>
                    <td>
                        <Day />
                    </td>
                    <td>
                        <Day />
                    </td>
                    <td>
                        <Day />
                    </td>
                    <td>
                        <Day />
                    </td>
                    <td>
                        <Day />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import Day from '../components/Day.vue'

</script>

<style lang="scss" scoped>
.calendar {
    padding: 20px;
    header {
        display: flex;
        gap: 40px;
        align-items: center;


        .year {
            font-size: 30px;
            color: #DDD;
            font-weight: 700;
        }

        .month {
            font-size: 30px;
            font-weight: 700;

        }

        button {
            border: none;
            background: none;
            cursor: pointer;

            &:hover {
                transform: scale(1.5);  
            }
        }

    }

    td {
        padding: 2px;
    }

    .heading {
        display: flex;
        gap: 30px;

        p {
            font-size: 1rem;
            font-weight: 600;
        }
    }

    .week {
        display: flex;
        gap: 30px;
    }


}
</style>