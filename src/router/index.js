import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CategoriesPage from '@/views/CategoriesPage.vue';
import RegionalPage from '@/views/RegionalPage.vue';

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
	{
		path: '/regional',
		name: 'RegionalPage',
		component: RegionalPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (
		to.name === 'HomePage' ||
		to.name === 'CategoriesPage' ||
		to.name === 'RegionalPage'
	) {
		next();
	} else {
		next({ path: '/' });
	}
});

export default router;
