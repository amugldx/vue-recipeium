<template>
	<div
		class="flex flex-col items-center justify-center w-screen h-screen lg:flex-row bg-clrGray-dark"
	>
		<img
			class="w-300 md:w-400 lg:w-auto lg:h-500 lg:z-10"
			src="../../assets/images/homepage/regional-pic.svg"
			alt="Categories Image"
		/>
		<div
			class="flex flex-col items-center justify-center p-8 md:px-16 bg-clrBlack text-clrWhite w-250 h-250 md:w-450 md:h-450 lg:w-550 lg:h-550 lg:mt-0 lg:-ml-24 -mt-14 shadow-cardLg lg:px-28"
		>
			<h3
				class="mb-6 font-bold text-center md:mb-8 text-20 lg:text-28 md:text-24"
				>REGIONAL FOOD</h3
			>
			<p class="mb-6 text-center md:mb-8"
				>We got regional recipes for you to cook and enjoy it with your
				family.</p
			>
			<AppButton color="bg-clrRed text-clrWhite">Regional Food</AppButton>
		</div>
	</div>
</template>

<script>
	import AppButton from '../UI/AppButton.vue';
	export default {
		components: { AppButton },
		setup() {
			return {};
		},
	};
</script>
