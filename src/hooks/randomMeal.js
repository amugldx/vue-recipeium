import { ref, computed } from 'vue';

import axios from '@/axios';

const useRandomMeal = () => {
	const mealName = ref('');
	const mealOrigin = ref('');
	const mealThumb = ref('');
	const mealCategory = ref('');
	const mealInstructions = ref('');
	const mealLink = ref('');

	const getRandomMeal = async () => {
		const response = await axios.get('random.php');
		mealName.value = response.data.meals[0].strMeal;
		mealOrigin.value = response.data.meals[0].strArea;
		mealThumb.value = response.data.meals[0].strMealThumb;
		mealCategory.value = response.data.meals[0].strCategory;
		mealInstructions.value = response.data.meals[0].strInstructions;
		mealLink.value = response.data.meals[0].strYoutube;
	};

	return {
		mealCategory: computed(() => mealCategory.value),
		mealLink: computed(() => mealLink.value),
		mealInstructions: computed(() => mealInstructions.value),
		getRandomMeal,
		mealName: computed(() => mealName.value),
		mealOrigin: computed(() => mealOrigin.value),
		mealThumb: computed(() => mealThumb.value),
	};
};

export default useRandomMeal;
