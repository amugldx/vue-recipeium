<template>
	<div class="text-15 md:text-17 lg:text-18 2xl:text-20 text-clrBlack">
		<div class="w-screen h-screen bg-bottom bg-cover" :style="backgroundImage">
			<AppHeader />
			<div
				class="flex flex-col items-center justify-center w-full h-full space-y-6 "
			>
				<h1
					class="px-8 font-bold text-center text-20 md:text-26 lg:text-40 text-clrWhite"
					>LET'S CREATE SOMETHING DELICIOUS</h1
				>
				<h2 class="px-24 font-light text-center text-clrWhite"
					>We got great recipes for you to cook today</h2
				>
			</div>
		</div>
		<div v-if="viewDetals">
			<RandomMeal
				:mealName="mealName"
				:mealOrigin="mealOrigin"
				:mealThumb="mealThumb"
				@random-meal="getRandomMeal"
				@card-details="detailsView"
			/>
			<SectionCategories />
		</div>
		<div v-else>
			<RecipeDetails
				:mealName="mealName"
				:mealOrigin="mealOrigin"
				:mealThumb="mealThumb"
				:mealCategory="mealCategory"
				:mealInstructions="mealInstructions"
				:mealLink="mealLink"
				@close-recipe="detailsView"
			/>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import AppHeader from '@/components/UI/AppHeader';
	import RandomMeal from '../components/HomePage/RandomMeal.vue';
	import SectionCategories from '../components/HomePage/SectionCategories.vue';
	import axios from '@/axios';
	import RecipeDetails from './RecipeDetails.vue';

	export default {
		components: {
			AppHeader,
			RandomMeal,
			SectionCategories,
			RecipeDetails,
		},
		setup() {
			const backgroundImage = {
				backgroundImage: `url(${require('@/assets/images/homepage/homepage-hero.svg')})`,
			};
			const mealName = ref('');
			const mealOrigin = ref('');
			const mealThumb = ref('');
			const mealCategory = ref('');
			const mealInstructions = ref('');
			const mealLink = ref('');

			const getRandomMeal = async () => {
				const response = await axios.get('random.php');
				console.log(response);
				mealName.value = response.data.meals[0].strMeal;
				mealOrigin.value = response.data.meals[0].strArea;
				mealThumb.value = response.data.meals[0].strMealThumb;
				mealCategory.value = response.data.meals[0].strCategory;
				mealInstructions.value = response.data.meals[0].strInstructions;
				mealLink.value = response.data.meals[0].strYoutube;
			};

			const viewDetals = ref(true);
			const detailsView = () => {
				viewDetals.value = !viewDetals.value;
			};
			getRandomMeal();
			return {
				backgroundImage,
				mealCategory,
				mealLink,
				mealInstructions,
				getRandomMeal,
				mealName,
				mealOrigin,
				mealThumb,
				viewDetals,
				detailsView,
			};
		},
	};
</script>
