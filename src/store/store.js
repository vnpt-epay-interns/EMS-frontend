import { reactive } from 'vue'

const state = reactive({
    user: {
        id: null,
        email: null,
        firstName: null,
        lastName: null,
        role: null,
    },
    isLoading: false,
    popup: {
        isShowing: false,
        message: '',
        isSuccess: true,
        display: (message) => {
            state.popup.isShowing = true
            state.popup.message = message
        },
        displayForMilliSecond: (message, milliSeconds, success) => {
            state.popup.isShowing = true
            state.popup.message = message
            state.popup.isSuccess = success
            setTimeout(() => {
                state.popup.isShowing = false
            }, milliSeconds)
        },
    },
    accessToken: null,
    showSidebar: false,
    task: null,
    subtask: null,
    report: null
}) 



export default {
    state: state
}