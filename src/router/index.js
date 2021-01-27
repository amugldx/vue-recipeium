import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CategoriesPage from '@/views/CategoriesPage.vue';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/categories',
		name: 'CategoriesPage',
		component: CategoriesPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.name === 'HomePage' || to.name === 'CategoriesPage') {
		next();
	} else {
		next({ path: '/' });
	}
});

export default router;
