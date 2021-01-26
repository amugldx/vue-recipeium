<template>
	<div>
		<div class="px-16 pt-100 lg:pt-150">
			<h2 class="font-bold text-20 md:text-24 lg:text-28">ALL CATEGORIES</h2>
			<p class="mt-4">List of all categories we have in our database</p>
		</div>
		<div
			class="flex flex-col items-center justify-center w-full lg:flex-wrap lg:flex-row py-50 bg-clrRed my-100 lg:my-150 lg:py-100"
		>
			<AppCard class="mt-16 lg:m-50" />
			<AppCard class="mt-16 lg:m-50" />
			<AppCard class="mt-16 lg:m-50" />
			<AppCard class="mt-16 lg:m-50" />
		</div>
	</div>
</template>

<script>
	import AppCard from '../UI/AppCard.vue';
	export default {
		components: { AppCard },
		setup() {
			return {};
		},
	};
</script>
