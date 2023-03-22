import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vue3GoogleLogin from 'vue3-google-login' 
import './assets/main.css'
import store from './store/store'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight, faArrowLeft, faUserSecret, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight, faNewspaper, faFlag, faClock, faCircleCheck, faMagnifyingGlass , faCamera, faListCheck, faPlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faArrowRight, faArrowLeft, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight, faNewspaper, faFlag, faClock, faCircleCheck, faMagnifyingGlass, faCamera, faListCheck, faPlus, faPenToSquare )

const app = createApp(App)

app
    .use(router)
    .provide("store", store)
    .use(vue3GoogleLogin, {clientId: '828625326282-k8fksboqf7e2q62j8i4s3o0kne477ovi.apps.googleusercontent.com'})
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
