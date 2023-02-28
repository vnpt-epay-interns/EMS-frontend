import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vue3GoogleLogin from 'vue3-google-login' 
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight, faArrowLeft, faUserSecret, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight, faNewspaper, faFlag, faClock, faCircleCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faArrowRight, faArrowLeft, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight, faNewspaper, faFlag, faClock, faCircleCheck, faMagnifyingGlass )

const app = createApp(App)

app
.use(router)
.use(vue3GoogleLogin, {clientId: '1047225930403-t5dm3e4u8pu5i4p37ekp12gsbmet62pk.apps.googleusercontent.com'})
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')