<template>
	<div>
		<div
			@click="emitData"
			class="flex flex-col items-center justify-center p-6 w-250 lg:w-400 md:w-300 bg-clrWhite shadow-cardLg"
		>
			<img :src="mealThumb" :alt="mealName" />
			<p class="mt-6 font-bold text-center">{{ mealName }}</p>
		</div>
	</div>
</template>

<script>
	import singleMeal from '@/hooks/singleMeal.js';
	export default {
		props: ['mealThumb', 'mealName', 'mealId'],
		setup(props, { emit }) {
			const emitData = () => {
				const {
					mealCategory,
					mealLink,
					mealInstructions,
					getSingleMeal,
					mealName,
					mealOrigin,
					mealThumb,
				} = singleMeal(props.mealId);
				getSingleMeal().then(() => {
					emit('data', {
						mealCategory,
						mealLink,
						mealInstructions,
						mealName,
						mealOrigin,
						mealThumb,
					});
				});
			};
			return {
				emitData,
			};
		},
	};
</script>
