<template>
	<div
		class="flex flex-col items-center justify-center w-full h-screen space-y-7 bg-clrBlack"
	>
		<router-link
			to="/categories"
			class="font-bold text-26 md:text-40 lg:text-58 text-clrWhite"
			>Categories</router-link
		>
		<router-link
			to="/regional"
			class="font-bold text-26 md:text-40 lg:text-58 text-clrWhite"
			>Regional</router-link
		>
	</div>
</template>

<script>
	export default {
		setup() {
			return {};
		},
	};
</script>
