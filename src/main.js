import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/main.css'
import store from './store/store'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight, faArrowLeft, faUserSecret, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight, faNewspaper, faFlag, faClock, faCircleCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faArrowRight, faArrowLeft, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight, faNewspaper, faFlag, faClock, faCircleCheck, faMagnifyingGlass )


// const corsOptions = {
//     origin: '*',
//     credentials: true
// }

createApp(App)
    .use(router)
    .provide("store", store)
    // .use(cors(corsOptions))
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
