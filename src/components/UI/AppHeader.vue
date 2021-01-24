<template>
	<div class="relative flex flex-col">
		<div
			class="z-50 flex items-center justify-between py-4 bg-clrBlack px-9 md:px-16 lg:px-50 "
		>
			<div class="text-clrWhite text-26 font-header md:text-32 lg:text-40"
				>Recipeium</div
			>
			<div class="flex flex-row items-center">
				<div
					@click="toggleSearch"
					class="w-8 h-8 mr-8 cursor-pointer md:mr-12 lg:mr-16"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
						<g>
							<path
								class="st2"
								d="M15.5,7c4.69,0,8.5,3.81,8.5,8.5S20.19,24,15.5,24S7,20.19,7,15.5S10.81,7,15.5,7 M15.5,2
		C8.04,2,2,8.04,2,15.5S8.04,29,15.5,29S29,22.96,29,15.5S22.96,2,15.5,2L15.5,2z"
							/>
						</g>
						<g>
							<line class="st1" x1="24.5" y1="24.5" x2="34.5" y2="34.5" />
						</g>
					</svg>
				</div>
				<div @click="toggleNav" class="w-8 h-8 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
						<line class="st0" x1="4" y1="7.5" x2="36" y2="7.5" />
						<line class="st0" x1="10" y1="20.5" x2="36" y2="20.5" />
						<line class="st0" x1="4" y1="33.5" x2="30" y2="33.5" />
					</svg>
				</div>
			</div>
		</div>
		<div v-if="searchToggleValue" class="z-20">
			<NavSearchBar />
		</div>
		<div v-if="navToggleValue" class="absolute top-0 left-0 w-full h-full">
			<AppNavigation />
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import AppNavigation from './AppNavigation.vue';
	import NavSearchBar from './NavSearchBar.vue';
	export default {
		components: { AppNavigation, NavSearchBar },
		setup() {
			const navToggleValue = ref(false);
			const searchToggleValue = ref(false);

			const toggleNav = () => {
				navToggleValue.value = !navToggleValue.value;
			};
			const toggleSearch = () => {
				searchToggleValue.value = !searchToggleValue.value;
			};
			return { toggleNav, navToggleValue, toggleSearch, searchToggleValue };
		},
	};
</script>

<style scoped>
	.st0 {
		fill: #ffffff;
		stroke: #fff;
		stroke-width: 5;
		stroke-linecap: round;
		stroke-miterlimit: 10;
	}
	.st2 {
		fill: #ffffff;
	}
	.st1 {
		fill: none;
		stroke: #ffffff;
		stroke-width: 5;
		stroke-linecap: round;
		stroke-miterlimit: 10;
	}
</style>
