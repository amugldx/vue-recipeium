<template>
	<div
		class="flex flex-col items-center justify-center w-screen h-screen lg:flex-row bg-clrGray"
	>
		<img
			data-aos-offset="100"
			data-aos-duration="1000"
			data-aos-delay="200"
			data-aos="fade"
			data-aos-once="true"
			class="p-0 w-300 md:w-400 lg:w-auto lg:h-500 lg:z-10"
			src="../../assets/images/homepage/homepage-category-img.svg"
			alt="Categories Image"
		/>
		<div
			data-aos-offset="100"
			data-aos-duration="1000"
			data-aos-delay="700"
			data-aos="fade"
			data-aos-once="true"
			class="flex flex-col items-center justify-center p-8 md:px-16 bg-clrRed text-clrWhite w-250 h-250 md:w-450 md:h-450 lg:w-550 lg:h-550 lg:mt-0 lg:-ml-24 -mt-14 shadow-cardLg lg:px-28"
		>
			<h3
				class="mb-6 font-bold text-center md:mb-8 text-20 lg:text-28 md:text-24"
				>CATEGORIES</h3
			>
			<p class="mb-6 text-center md:mb-8"
				>Browse through different categories of food we have added for you to
				enjoy.</p
			>
			<AppButton to="/categories" color="bg-clrBlack text-clrWhite"
				>All Categories</AppButton
			>
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
