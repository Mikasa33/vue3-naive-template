import '@unocss/reset/tailwind.css';
import 'uno.css';
import '/@/styles/less/global.less';

import { createApp } from 'vue';

import App from './App.vue';
import { setupRouter } from '/@/router';
import { setupStore } from '/@/store';

const app = createApp(App);

setupRouter(app);
setupStore(app);

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

app.mount('#app');
