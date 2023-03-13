<template>
    <div class="calendar">
        <header>
            <p class="year">{{ year }}</p>
            <button @click="prevMonth" class="btn btn-">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </button>
            <p class="month">{{ monthInfo.name }}</p>
            <button @click="nextMonth">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>

            <div class="legend">
                <div class="legend-item">
                    <p class="full">F</p>
                    <p>Full</p>
                </div>
                <div class="legend-item">
                    <p class="morning">M</p>
                    <p>Morning</p>
                </div>
                <div class="legend-item">
                    <p class="afternoon">A</p>
                    <p>Afternoon</p>
                </div>
                <div class="legend-item">
                    <p class="weekend"></p>
                    <p>Weekend</p>
                </div>
            </div>
        </header>
        <table>
            <thead>
                <th class="name">Name</th>
                <th v-for="index in monthInfo.numberOfDays">
                    <p> {{ index }}</p>

                </th>
            </thead>
            <tbody>
                <tr v-for="schedule in schedules">
                    <td class="name">{{ schedule.employeeName }}</td>
                    <td v-for="i in monthInfo.numberOfDays">
                        <p v-if="checkIfWeekend(i)" class="weekend"></p>
                        <p v-else-if="checkIfEmployeeWorkAtDay(schedule, i)" :class="getWorkingDayStatus(schedule, i)"> {{
                            getWorkingDayStatus(schedule, i).charAt(0).toUpperCase() }}</p>
                        <p v-else></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import Day from '../../components/Day.vue'
import axios from 'axios';
import { ref, watchEffect, inject, watch } from 'vue';
import { VUE_APP_BACKEND_URL } from '../../../../env';

const store = inject('store');
const monthNumber = ref(new Date().getMonth()); // month number starts from 0
const year = ref(new Date().getFullYear())
const monthInfo = ref({
    numberOfDays: 30,
    name: 'January',
    weekends: [7, 8, 14, 15, 21, 22, 28, 29]
}) // the default value to display before the data is fetched

const schedules = ref([])

const nextMonth = () => {
    if (monthNumber.value == 11) {
        monthNumber.value = 0;
        year.value++;
    } else {
        monthNumber.value++;
    }
}

const prevMonth = () => {
    if (monthNumber.value == 0) {
        monthNumber.value = 11;
        year.value--;
    } else {
        monthNumber.value--;
    }
}
const checkIfWeekend = (day) => {
    return monthInfo.value.weekends.includes(day)
}

const checkIfEmployeeWorkAtDay = (schedule, day) => {
    return schedule.statuses[day - 1] !== 'OFF' //  because the array starts from 0, but day start from 1
}

const getWorkingDayStatus = (schedule, day) => {
    // for example schedule.days = [1, 2, 6, 14, 25, 26, 30] //meaning that the employee works on  the days 1, 2, 6, 14, 25, 26, 30 of the month
    // for example schedule.statuses = ['FULL', 'MORNING', 'FULL', 'FULL', 'FULL', 'MORNING', 'FULL'] //meaning that the employee works full on the days 1, 6, 14, 25, 26,  30 of the month, works morning on the day 2


    const status = schedule.statuses[day - 1]

    return status.toLowerCase(); // return full, morning, or afternoon
}

const fetchWorkingSchedules = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${store.state.accessToken}`
        }
    }
    store.state.isLoading = true;
    const res = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/working-schedules/${year.value}/${monthNumber.value}`, config)
    store.state.isLoading = false;

    monthInfo.value = res.data.data.monthInfo;
    schedules.value = res.data.data.schedules;
}

watch(monthNumber, (newVal, oldVal) => {
    fetchWorkingSchedules();
})

watchEffect(async () => {
    fetchWorkingSchedules()
})

</script>

<style lang="scss" scoped>
.calendar {
    padding: 20px;

    header {
        margin-bottom: 20px;
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

        .legend {
            display: flex;
            gap: 20px;
            .legend-item {
                display: flex;
                gap: 10px;
                align-items: center;

                p {
                    min-width: 25px;
                    min-height: 25px;
                    text-align: center;
                    line-height: 25px;
                }
            }
        }

    }

    th {
        // border-top: 1px solid black;
        border-left: 1px solid black;
    }

    th,
    td {

        p {
            width: 25px;
            height: 25px;
            line-height: 25px;
            border: 1px solid #000000;
            text-align: center;
        }




    }


    .name {
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        width: 100px;
        text-align: center;

    }

    .morning {
        background: #ffcd28;
    }

    .afternoon {
        background: #ff6b6b;
    }

    .full {
        background: #2bcbf7;
    }

    .weekend {
        background: #CCC;
    }


}

@media (max-width: 2400px) {

    .calendar {
        button {
            border: none;
            background: none;
            cursor: pointer;

            &:hover {
                transform: scale(1.5);
            }
        }

    }

    th {
        border-left: 1px solid black;
    }

    th,
    td {
        p {
            width: 20px;
            height: 20px;
            font-size: 12px;
        }

    }

}
</style>