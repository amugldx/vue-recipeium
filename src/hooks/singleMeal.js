import { ref, computed } from 'vue';

import axios from '@/axios';

const useSingleMeal = (id) => {
	const mealName = ref('');
	const mealOrigin = ref('');
	const mealThumb = ref('');
	const mealCategory = ref('');
	const mealInstructions = ref('');
	const mealLink = ref('');

	const getSingleMeal = async () => {
		const response = await axios.get(`lookup.php?i=${id}`);
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
		getSingleMeal,
		mealName: computed(() => mealName.value),
		mealOrigin: computed(() => mealOrigin.value),
		mealThumb: computed(() => mealThumb.value),
	};
};

export default useSingleMeal;
