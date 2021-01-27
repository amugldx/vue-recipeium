import { createApp } from 'vue';
import aos from 'aos';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import 'aos/dist/aos.css';

createApp(App)
	.use(aos.init())
	.use(router)
	.mount('#app');
