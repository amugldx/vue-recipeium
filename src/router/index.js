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
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

router.beforeEach((to, from, next) => {
	if (to.name === 'HomePage' || to.name === 'CategoriesPage') {
		next();
	} else {
		next({ path: '/' });
	}
});

export default router;
