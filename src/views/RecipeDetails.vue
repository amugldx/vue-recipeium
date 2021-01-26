<template>
	<div
		class="flex flex-col items-center justify-center text-center px-50 md:px-80 lg:px-200 lg:py-200 md:py-100 2xl:px-300 bg-clrGray-light py-80"
	>
		<img
			class="p-6 w-250 lg:w-400 md:w-300 bg-clrWhite shadow-cardLg"
			:src="mealThumb"
			:alt="mealName"
		/>
		<p class="mt-8 font-bold text-20 md:text-24 lg:text-30">{{ mealName }}</p>
		<p class="mt-4"><b>Origin</b> {{ mealOrigin }}</p>
		<p><b>Category</b> {{ mealCategory }}</p>
		<p class="mt-12 text-left md:mt-16 lg:mt-50"
			><b>INSTRUCTIONS</b><br />{{ mealInstructions }}</p
		>
		<p
			class="mt-4 font-bold underline cursor-pointer md:mt-8 text-17 md:text-20 lg:text-24 lg:mt-12"
		>
			<a target="_blank" rel="noopener noreferrer" :href="mealLink"
				>Watch on youtube</a
			>
		</p>
		<AppButton
			@btn-clicked="$emit('close-recipe')"
			class="self-end mt-16"
			color="bg-clrBlack text-clrWhite"
			>Close</AppButton
		>
	</div>
</template>

<script>
	import AppButton from '../components/UI/AppButton.vue';
	export default {
		components: { AppButton },
		props: [
			'mealName',
			'mealOrigin',
			'mealThumb',
			'mealCategory',
			'mealInstructions',
			'mealLink',
		],
		setup() {
			return {};
		},
	};
</script>
