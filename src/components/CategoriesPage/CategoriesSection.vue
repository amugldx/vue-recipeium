<template>
	<div class="flex flex-col items-center justify-center" v-if="itemsToggle">
		<div class="px-16 pt-100 lg:pt-150">
			<h2 class="font-bold text-20 md:text-24 lg:text-28">ALL CATEGORIES</h2>
			<p class="mt-4">List of all categories we have in our database</p>
		</div>
		<div
			class="flex flex-col items-center justify-center w-screen md:w-4/5 lg:flex-wrap lg:flex-row py-50 bg-clrRed mt-100 lg:mt-150 lg:py-100"
		>
			<AppCard
				v-for="category in categoriesList"
				:key="category.name"
				class="mt-16 lg:m-50"
				:mealThumb="category.categoryThumb"
				:mealName="category.categoryName"
				@card-btn-clicked="
					viewAllItems(category.categoryName, category.categoryThumb)
				"
				>View All</AppCard
			>
		</div>
	</div>
	<div v-else>
		<CategoryRecipes
			:categoryName="categoryName"
			:categoryThumb="categoryThumb"
			@go-back="viewAllItems"
		/>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { useCategories } from '@/hooks/categories.js';
	import CategoryRecipes from './CategoryRecipes.vue';
	import AppCard from '../UI/AppCard.vue';
	export default {
		components: { AppCard, CategoryRecipes },
		setup() {
			const { categories, loadCategories } = useCategories();
			const categoriesList = categories.value;
			loadCategories();

			const itemsToggle = ref(true);
			const categoryName = ref('');
			const categoryThumb = ref('');

			const viewAllItems = (name, thumb) => {
				itemsToggle.value = !itemsToggle.value;
				categoryName.value = name;
				categoryThumb.value = thumb;
			};
			return {
				categoriesList,
				viewAllItems,
				categoryName,
				categoryThumb,
				itemsToggle,
			};
		},
	};
</script>
