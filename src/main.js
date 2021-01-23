import { createApp } from 'vue';
import aos from 'aos';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import store from './store'

createApp(App).use(store)
	.use(aos.init())
	.use(router)
	.mount('#app');
