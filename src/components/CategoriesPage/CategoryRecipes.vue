<template>
	<div
		class="flex flex-col items-center justify-center px-50"
		v-if="recipeToggle"
	>
		<div
			class="flex flex-col items-center justify-center p-6 lg:mt-150 mt-70 w-250 lg:w-400 lg:h-400 md:w-300 md:h-300 bg-clrWhite shadow-cardLg "
		>
			<img :src="categoryThumb" :alt="categoryName" />
			<p class="mt-6 font-bold text-center">{{ categoryName }}</p>
		</div>
		<div
			class="flex flex-col items-center justify-center w-screen md:w-4/5 lg:flex-wrap lg:flex-row py-50 bg-clrBlack mt-100 lg:py-100"
		>
			<div v-for="meal in mealsList" :key="meal.mealId">
				<MealsList
					:mealName="meal.mealName"
					:mealThumb="meal.mealThumb"
					:mealId="meal.mealId"
					class="mt-16 cursor-pointer lg:m-50"
					@click="recipeDetails()"
					@data="recivedData"
				/>
			</div>
		</div>
		<AppButton
			class="mt-16 lg:mt-100"
			color="bg-clrRed text-clrWhite"
			@btn-clicked="$emit('go-back')"
			>Back</AppButton
		>
	</div>
	<div v-else>
		<RecipeDetails
			:mealName="mealName"
			:mealOrigin="mealOrigin"
			:mealThumb="mealThumb"
			:mealCategory="mealCategory"
			:mealInstructions="mealInstructions"
			:mealLink="mealLink"
			@close-recipe="recipeDetails"
		/>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import categoryMeals from '@/hooks/categoryMeals.js';
	import AppButton from '../UI/AppButton';
	import MealsList from './MealsList.vue';
	import RecipeDetails from '../../views/RecipeDetails.vue';
	export default {
		props: ['categoryThumb', 'categoryName'],
		components: { AppButton, MealsList, RecipeDetails },
		setup(props) {
			const { loadMeals, mealsList } = categoryMeals(props.categoryName);
			loadMeals();

			const recipeToggle = ref(true);
			const recipeDetails = () => {
				recipeToggle.value = !recipeToggle.value;
			};

			const mealName = ref('');
			const mealOrigin = ref('');
			const mealThumb = ref('');
			const mealCategory = ref('');
			const mealInstructions = ref('');
			const mealLink = ref('');

			const recivedData = (data) => {
				mealName.value = data.mealName.value;
				mealOrigin.value = data.mealOrigin.value;
				mealThumb.value = data.mealThumb.value;
				mealCategory.value = data.mealCategory.value;
				mealInstructions.value = data.mealInstructions.value;
				mealLink.value = data.mealLink.value;
			};

			return {
				mealsList,
				recipeDetails,
				recipeToggle,
				recivedData,
				mealName,
				mealOrigin,
				mealThumb,
				mealCategory,
				mealInstructions,
				mealLink,
			};
		},
	};
</script>
