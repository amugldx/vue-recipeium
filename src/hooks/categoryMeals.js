import { ref, computed } from 'vue';
import axios from '@/axios';

const useCategoryMeals = (categoryName) => {
	const mealsList = ref([]);

	const loadMeals = async () => {
		const response = await axios.get(`filter.php?c=${categoryName}`);
		response.data.meals.forEach((item) => {
			const mealName = item.strMeal;
			const mealThumb = item.strMealThumb;
			const mealId = item.idMeal;

			mealsList.value.push({
				mealName: mealName,
				mealThumb: mealThumb,
				mealId: mealId,
			});
		});
	};

	return {
		loadMeals,
		mealsList: computed(() => mealsList.value),
	};
};

export default useCategoryMeals;
