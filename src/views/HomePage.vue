<template>
	<div
		class="w-screen h-screen bg-bottom bg-cover text-w text-15 md:text-17 lg:text-18 2xl:text-20"
		:style="backgroundImage"
	>
		<AppHeader />
	</div>
</template>

<script>
	import AppHeader from '@/components/UI/AppHeader';

	export default {
		name: 'HomePage',
		components: {
			AppHeader,
		},
		setup() {
			const backgroundImage = {
				backgroundImage: `url(${require('@/assets/images/homepage/homepage-hero.svg')})`,
			};
			return { backgroundImage };
		},
	};
</script>
