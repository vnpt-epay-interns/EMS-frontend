<template>
    <div class="calendar">
        <header>
            <p class="year">{{ year }}</p>
            <button @click="prevMonth">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </button>
            <p class="month">{{ monthInfo.name }}</p>
            <button @click="nextMonth">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
        </header>
        <table>
            <thead>
                <th class="name">Section</th>
                <th v-for="index in monthInfo.numberOfDays">
                    <p> {{ index }}</p>

                </th>
            </thead>
            <tbody>
                <tr>
                    <td class="name">Full</td>
                    <td v-for="i in monthInfo.numberOfDays">
                        <p v-if="checkIfWeekend(i)" class="weekend"></p>
                        <p v-else :class="checkIfClicked(i, 'FULL') ? 'full' : ''" @click="e => handleClick(e, i, 'FULL')">
                        </p>
                    </td>
                </tr>
                <tr>
                    <td class="name">Morning</td>
                    <td v-for="i in monthInfo.numberOfDays">
                        <p v-if="checkIfWeekend(i)" class="weekend"></p>
                        <p v-else :class="checkIfClicked(i, 'MORNING') ? 'morning' : ''"
                            @click="e => handleClick(e, i, 'MORNING')"></p>
                    </td>
                </tr>
                <tr>
                    <td class="name">Afternoon</td>
                    <td v-for="i in monthInfo.numberOfDays">
                        <p v-if="checkIfWeekend(i)" class="weekend"></p>
                        <p v-else :class="checkIfClicked(i, 'AFTERNOON') ? 'afternoon' : ''"
                            @click="e => handleClick(e, i, 'AFTERNOON')"></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <button class="save-btn" @click="handleSave">Save</button>

    </div>
</template>

<script setup>
import Day from '../../components/Day.vue'
import axios from 'axios';
import { ref, watchEffect, inject, watch, computed } from 'vue';
import { VUE_APP_BACKEND_URL } from '../../../../env';

const store = inject('store');
const year = ref(new Date().getFullYear());
const monthNumber = ref(new Date().getMonth()); // month number starts from 0

const monthInfo = ref({
    numberOfDays: 30,
    name: 'January',
    weekends: [1, 7, 8, 14, 15, 21, 22, 28, 29]
}) // the default value to display before the data is fetched

const schedule = ref({
    days: [],
    statuses: []
})

const handleClick = (e, day, status) => {
    if (schedule.value.statuses[day - 1] == status) {
        schedule.value.statuses[day - 1] = 'OFF'
    } else {
        schedule.value.statuses[day - 1] = status
    }
}

const checkIfClicked = (day, status) => {

    return schedule.value.statuses[day - 1] == status;
}
// const schedules = ref([])

const checkIfWeekend = (day) => {
    return monthInfo.value.weekends.includes(day)
}


const handleSave = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${store.state.accessToken}`
        }
    }

    const body = {
        year: year.value,
        month: monthNumber.value,
        days: schedule.value.days,
        statuses: schedule.value.statuses
    }

    store.state.isLoading = true;
    const response = await axios.post(`${VUE_APP_BACKEND_URL}/api/employee/working-schedules`, body, config)
    store.state.isLoading = false;

    if (response.data.status == 200) {
        store.state.popup.displayForMilliSecond(response.data.message, 2000, true)
    } else {
        store.state.popup.displayForMilliSecond(response.data.message, 2000, false)
    }

}


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

const fetchWorkingSchedule = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${store.state.accessToken}`
        }
    }
    store.state.isLoading = true;
    const res = await axios.get(`${VUE_APP_BACKEND_URL}/api/employee/working-schedules/${year.value}/${monthNumber.value}`, config)
    store.state.isLoading = false;

    monthInfo.value = res.data.data.monthInfo;
    schedule.value = res.data.data.schedules[0]; // there will be only one element in the array
}

watch(monthNumber, (newVal, oldVal) => {
    fetchWorkingSchedule();
})
//TODO: change month and year
watchEffect(() => {
    fetchWorkingSchedule();

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


    .name {
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        width: 100px;
        text-align: center;

    }


    .save-btn {
        margin-top: 20px;


        &:hover {
            background: var(--primary-hover);

        }
    }


}

@media (max-width: 1300px) {

    .calendar {



        th {
            border-left: 1px solid black;
        }

        th,
        td {

            p {
                width: 20px;
                height: 20px;
                line-height: 20px;
                font-size: 13px;
            }

        }

        .save-btn {
            font-size: 12px;
        }

    }
}
</style>