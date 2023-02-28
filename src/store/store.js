import { reactive } from 'vue'

const state = reactive({
    user: null,
    isLoading: false
}) 



export default {
    state: state
}