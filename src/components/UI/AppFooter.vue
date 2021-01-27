<template>
	<div
		class="flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 bg-clrBlack text-clrWhite text-12 md:text-14 lg:text-16 2xl:text-18"
	>
		<div class="mb-4 space-x-6 font-bold md:mb-6 lg:mb-9">
			<router-link class="transition hover:text-clrRed" to="/"
				>HOME</router-link
			>
			<router-link class="transition hover:text-clrRed" to="/categories"
				>CATEGORIES</router-link
			>
		</div>
		<p class="font-light">Designed and developed by Ammar Mughal</p>
	</div>
</template>

<script>
	export default {
		setup() {
			return {};
		},
	};
</script>
