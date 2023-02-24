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
import TaskHEAD from '../views/components/Task.vue'
import DashboardPage from '../views/pages/DashboardPage.vue'
import Sidebar from '../views/components/Sidebar.vue'
import ProfileDetail from '../views/components/ProfileDetail.vue'
import ProjectManagementPage from '../views/pages/ProjectManagementPage.vue'
import ListEmployeePage from '../views/pages/ListEmployeePage.vue'
// import ProjectManagementPage from '../views/pages/ProjectManagementPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/dashboard',
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
        }
    ]
})
