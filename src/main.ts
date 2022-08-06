import { createApp } from 'vue';

import './types/vue.d';
import App from './App.vue';
import router from './core/router';

createApp(App).use(router).mount('#app');
