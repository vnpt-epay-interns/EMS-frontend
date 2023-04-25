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
import { faArrowRight, faArrowLeft, faUserSecret, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight, faNewspaper, faFlag, faClock, faCircleCheck, faMagnifyingGlass , faCamera, faListCheck, faPlus, faPenToSquare, faStickyNote} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faArrowRight, faArrowLeft, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight, faNewspaper, faFlag, faClock, faCircleCheck, faMagnifyingGlass, faCamera, faListCheck, faPlus, faPenToSquare, faStickyNote )

const app = createApp(App)

app
    .use(router)
    .provide("store", store)
    .use(vue3GoogleLogin, {clientId: '462456379026-lqaidolcunt933qhms2v2ir1ak26ts0t.apps.googleusercontent.com'})
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
