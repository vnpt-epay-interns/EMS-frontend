import { reactive } from 'vue'

const state = reactive({
    user: null,
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
    tasks: null,
    task: null,
    report: null
}) 



export default {
    state: state
}