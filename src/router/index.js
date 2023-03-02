import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import Login from '../views/auth/Login/Login.vue'
import Register from '../views/auth/Register/Register.vue'
import ViewReportDetails from '../views/pages/ViewReportDetails.vue'
import ViewAllReports from '../views/pages/ViewAllReports.vue'
import ViewAllWorkingSchedules from '../views/pages/ViewAllWorkingSchedules.vue'
import TaskPage from '../views/pages/TaskPage.vue'
import WriteReportPage from '../views/pages/WriteReportPage.vue'
import EnterManagerCodePage from '../views/pages/EnterManagerCodePage.vue'
import SelectRolePage from '../views/pages/SelectRolePage.vue'
import DashboardPage from '../views/pages/DashboardPage.vue'
import ProfileDetail from '../views/components/ProfileDetail.vue'
import ProjectManagementPage from '../views/pages/ProjectManagementPage.vue'
import ListEmployeePage from '../views/pages/ListEmployeePage.vue'
// import ProjectManagementPage from '../views/pages/ProjectManagementPage.vue'
import Logout from '../views/auth/Logout/Logout.vue'
import ConfirmEmailPage from '../views/pages/ConfirmEmailPage.vue'
import WaitingAdminApprovalPage from '../views/pages/WaitingAdminApprovalPage.vue'


import axios from "axios";
import { useRouter } from "vue-router";
import { VUE_APP_BACKEND_URL } from "../../env";
import store from "../store/store";
const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: DashboardPage
        },
        {
            path: '/',
            redirect: '/dashboard',
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/logout',
            component: Logout
        },
        {
            path: '/profile',
            component: ProfileDetail
        },
        {
            path: '/employee',
            component: ListEmployeePage
        },
        {
            path: '/project',
            component: ProjectManagementPage
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/report',
            component: ViewAllReports
        },
        {
            path: '/report/:id/details',
            component: ViewReportDetails
        },
        {
            path: '/task',
            component: TaskPage
        },
        {
            path: '/schedule',
            component: ViewAllWorkingSchedules
        },
        {
            path: '/write-report',
            component: WriteReportPage
        },
        {
            path: '/enter-manager-code',
            component: EnterManagerCodePage
        },
        {
            path: '/select-role',
            component: SelectRolePage
        },
        {
            path: '/confirm-email',
            component: ConfirmEmailPage
        },
        {
            path: '/waiting-for-admin-approval',
            component: WaitingAdminApprovalPage
        }
    ]
})



const doRouting = () => {

    if (store.state.user) {

        // check if user has verified email
        if (store.state.user.emailVerified) {
            // check if user has select a role
            if (store.state.user.role) {

                if (store.state.user.locked) {

                    // if user is locked, it mean the registration process is not completed
                    if (store.state.user.role === 'EMPLOYEE') {
                        router.push('/enter-manager-code');
                    } else if (store.state.user.role === 'MANAGER') {
                        router.push('/waiting-for-admin-approval');
                    }

                } else {
                    // user is not locked, it mean the registration process is completed
                    store.state.showSidebar = true
                    router.push('/dashboard')
                }

            } else {
                // user has not select a role
                router.push('/select-role');
            }
        } else {
            // user has not verified email
            router.push('/confirm-email');
        }
    }
}

export const fetchUserInfoAndDoRouting =  async () => {

    // fetch user info
    const options = {
        headers: {
            'Authorization': `Bearer ${store.state.accessToken}`
        }
    }
    store.state.isLoading = true
    const response = await axios.get(`${VUE_APP_BACKEND_URL}/api/auth/user-info`, options);
    store.state.user = response.data.data;
    store.state.isLoading = false

    console.log('user info: ', store.state.user);
    
    
    // do routing based on user info
    doRouting()
}


export default router;