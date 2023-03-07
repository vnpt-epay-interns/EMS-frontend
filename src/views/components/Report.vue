<template>
    <div class="report" @click="viewReportDetails">
        <div class="report__status"></div>
        <div class="report__content">
            <div class="report__content__title">
                <h3>{{ report.title }}</h3>
            </div>
            <div class="report__content__name">
                <h4>{{ report.employeeName }}</h4>
            </div>
            <div class="report__content__date">
                <p>{{ report.createdAt }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const store = inject('store');
const router = useRouter();
const {report} = defineProps(['report'])
store.state.report = report

// const store = inject('store');

// const reportList = ref([])

// onMounted(async () => {
//     const config = {
//         headers: {
//             'Content-Type': "application/json",
//             'Authorization': `Bearer ${store.state.accessToken}`,
//         },
//     };
//     store.state.isLoading = true;
//     const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/manager/reports`, config)
//     store.state.isLoading = false;
// });
const viewReportDetails = () => {
  router.push({
    name: "ViewReportDetails",
    params: {
      id: report.id,
    }
  })
}

</script>

<style lang="scss" scoped>
.report {
    // padding: 0;
    display: flex;
    height: 100px;
    width: 700px;
    gap: 20px;
    align-items: center;
    background: #E6ECF0;
    cursor: pointer;

    .report__status {
        background-color: #76CC8E;
        // background-color: #263159;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 30px;
        height: 100px;
    }

}
</style>