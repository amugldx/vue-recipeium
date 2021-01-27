<template>
	<div
		class="flex flex-col items-center justify-center p-6 w-250 lg:w-400 md:w-300 bg-clrWhite shadow-cardLg"
	>
		<img :src="mealThumb" :alt="mealName" />
		<p class="mt-6 font-bold text-center">{{ mealName }}</p>
		<p class="mt-2 text-center">{{ mealOrigin }}</p>
		<AppButton
			class="mt-6 mb-4"
			@btn-clicked="$emit('card-btn-clicked')"
			color="bg-clrBlack text-clrWhite hover:bg-clrRed transition transition-all"
			><slot
		/></AppButton>
	</div>
</template>

<script>
	import AppButton from './AppButton.vue';
	export default {
		components: { AppButton },
		props: ['mealName', 'mealOrigin', 'mealThumb'],
		setup() {
			return {};
		},
	};
</script>
