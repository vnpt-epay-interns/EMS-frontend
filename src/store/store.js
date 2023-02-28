import { reactive } from 'vue'

const state = reactive({
    user: null,
    isLoading: false,
    accessToken: null
}) 



export default {
    state: state
}