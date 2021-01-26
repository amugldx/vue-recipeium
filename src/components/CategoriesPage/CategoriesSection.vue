<template>
	<div class="flex flex-col items-center justify-center">
		<div class="px-16 pt-100 lg:pt-150">
			<h2 class="font-bold text-20 md:text-24 lg:text-28">ALL CATEGORIES</h2>
			<p class="mt-4">List of all categories we have in our database</p>
		</div>
		<div
			class="flex flex-col items-center justify-center w-4/5 lg:flex-wrap lg:flex-row py-50 bg-clrRed mt-100 lg:mt-150 lg:py-100"
		>
			<AppCard
				v-for="category in categoriesList"
				:key="category.name"
				class="mt-16 lg:m-50"
				:mealThumb="category.categoryThumb"
				:mealName="category.categoryName"
				>View All</AppCard
			>
		</div>
	</div>
</template>

<script>
	import { useCategories } from '@/hooks/categories.js';
	import AppCard from '../UI/AppCard.vue';
	export default {
		components: { AppCard },
		setup() {
			const { categories, loadCategories } = useCategories();
			const categoriesList = categories.value;
			loadCategories();

			return { categoriesList };
		},
	};
</script>
