import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight, faUserSecret, faXmark, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faArrowRight, faXmark, faEyeSlash, faEye)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')