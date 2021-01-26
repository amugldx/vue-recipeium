import { ref, computed } from 'vue';
import axios from '@/axios';

export const useCategories = () => {
	const categories = ref([]);

	const loadCategories = async () => {
		const response = await axios.get('categories.php');
		response.data.categories.forEach((item) => {
			const categoryName = item.strCategory;
			const categoryThumb = item.strCategoryThumb;

			categories.value.push({
				categoryName: categoryName,
				categoryThumb: categoryThumb,
			});
		});
	};

	return {
		loadCategories,
		categories: computed(() => categories.value),
	};
};
