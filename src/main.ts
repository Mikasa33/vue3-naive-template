import '@unocss/reset/tailwind.css';
import 'uno.css';
import '/@/styles/global.less';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
