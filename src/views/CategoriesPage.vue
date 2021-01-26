<template>
	<div
		class="text-center pb-100 lg:pb-150 2xl:pb-200 text-15 md:text-17 lg:text-18 2xl:text-20 text-clrBlack bg-clrGray"
	>
		<div class="w-screen h-screen bg-bottom bg-cover" :style="backgroundImage">
			<AppHeader />
			<div
				class="flex flex-col items-center justify-center w-full h-full space-y-6 "
			>
				<h1
					class="px-8 font-bold text-center text-20 md:text-26 lg:text-40 text-clrWhite"
					>WE GOT SOME AMAZING CATEGORIES FOR YOU</h1
				>
				<h2 class="px-24 font-light text-center text-clrWhite"
					>Search through many categories we got for you to satisfy your
					palette</h2
				>
			</div>
		</div>
		<CategoriesSection />
	</div>
</template>

<script>
	import AppHeader from '@/components/UI/AppHeader';
	import CategoriesSection from '../components/CategoriesPage/CategoriesSection.vue';

	export default {
		components: { AppHeader, CategoriesSection },
		setup() {
			const backgroundImage = {
				backgroundImage: `url(${require('@/assets/images/categories/categories-bg.svg')})`,
			};
			return { backgroundImage };
		},
	};
</script>
