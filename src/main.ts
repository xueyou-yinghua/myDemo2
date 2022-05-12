import { createApp } from 'vue'
import Sakura from './Sakura.vue';
import router from './router';

import '../public/layout/index.scss';

createApp(Sakura).use(router).mount('#start-sk')
