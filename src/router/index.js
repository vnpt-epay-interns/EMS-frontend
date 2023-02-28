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

import ConfirmEmailPage from '../views/pages/ConfirmEmailPage.vue'
import AccessDeniedPage from '../views/pages/AccessDeniedPage.vue'


export default createRouter({
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
            path: '/access-denied',
            component: AccessDeniedPage
        }
    ]
})
