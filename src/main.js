import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/main.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight, faArrowLeft, faUserSecret, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faArrowRight, faArrowLeft, faXmark, faEye, faEyeSlash, faChevronLeft, faChevronRight)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
