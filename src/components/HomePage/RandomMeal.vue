<template>
	<div
		class="flex flex-col items-center justify-center w-screen h-screen lg:flex-row bg-clrGray-light"
	>
		<div
			class="flex flex-col items-center justify-center lg:w-600 w-250 md:w-450 lg:mr-50"
		>
			<h3 class="font-bold text-center text-20 md:text-24 lg:text-28"
				>OUR TODAY'S RECOMMENDATION</h3
			>
			<p class="mt-8 text-center lg:mt-0"
				>We generate random recipe on every page reload or you can generate one
				now.</p
			>
			<AppButton
				@click="$emit('random-meal')"
				class="mt-12 mb-50 lg:mt-24"
				color="bg-clrRed text-clrWhite"
				>Generate New Recipe</AppButton
			>
		</div>
		<AppCard
			:mealName="mealName"
			:mealOrigin="mealOrigin"
			:mealThumb="mealThumb"
			goTo="/details"
			@card-btn-clicked="$emit('card-details')"
			>View Recipe</AppCard
		>
	</div>
</template>

<script>
	import AppCard from '@/components/UI/AppCard';
	import AppButton from '../UI/AppButton.vue';

	export default {
		components: { AppCard, AppButton },
		props: ['mealName', 'mealOrigin', 'mealThumb'],
		setup() {
			return {};
		},
	};
</script>
