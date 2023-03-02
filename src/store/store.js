import { reactive } from 'vue'

const state = reactive({
    user: null,
    isLoading: false,
    popup: {
        isShowing: false,
        message: '',
        display: (message) => {
            state.popup.isShowing = true
            state.popup.message = message
        },
        displayForMilliSecond: (message, milliSeconds) => {
            state.popup.isShowing = true
            state.popup.message = message
            setTimeout(() => {
                state.popup.isShowing = false
            }, milliSeconds)
        },
    },
    accessToken: null,
    authenticatedRole: null
}) 



export default {
    state: state
}