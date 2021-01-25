<template>
	<div
		class="flex flex-col items-center justify-center p-6 w-250 lg:w-400 md:w-300 bg-clrWhite shadow-cardLg"
	>
		<img
			src="../../assets/images/homepage/meal-placeholder.png"
			alt="Meal Name"
		/>
		<p class="mt-6 font-bold text-center">Teriyaki Chicken Casserole</p>
		<p class="mt-2 text-center">JAPANESE</p>
		<AppButton class="mt-4" color="bg-clrBlack text-clrWhite"
			>View Recipe</AppButton
		>
	</div>
</template>

<script>
	import AppButton from './AppButton.vue';
	export default {
		components: { AppButton },
		setup() {
			return {};
		},
	};
</script>
