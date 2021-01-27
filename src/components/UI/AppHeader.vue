<template>
	<div class="fixed z-40 flex flex-col w-full">
		<div
			class="z-20 flex items-center justify-between py-4 bg-clrBlack px-9 md:px-50 lg:px-70 2xl:px-100 "
		>
			<router-link
				id="headerHeading"
				@mouseenter="hovEnterAnimation('#headerHeading')"
				@mouseleave="hovLeaveAnimation('#headerHeading')"
				to="/"
				class="text-clrWhite text-26 font-header md:text-32 lg:text-40"
				>Recipeium</router-link
			>
			<div
				id="navBurger"
				@mouseover="hovEnterAnimation('#navBurger')"
				@mouseleave="hovLeaveAnimation('#navBurger')"
				@click="toggleNav"
				class="w-8 h-8 cursor-pointer md:w-9 md:h-9 lg:h-11 lg:w-11"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
					<line id="burgerline1" class="st0" x1="4" y1="7.5" x2="36" y2="7.5" />
					<line
						id="burgerline2"
						class="st0"
						x1="10"
						y1="20.5"
						x2="36"
						y2="20.5"
					/>
					<line
						id="burgerline3"
						class="st0"
						x1="4"
						y1="33.5"
						x2="30"
						y2="33.5"
					/>
				</svg>
			</div>
		</div>
		<div v-if="navToggleValue" class="absolute top-0 left-0 w-full h-full">
			<AppNavigation @close-nav="toggleNav" />
		</div>
	</div>
</template>

<script>
	import { navBurgerAnimation } from '@/animations/navAnimation.js';
	import {
		hoverEnterAnimation,
		hoverLeaveAnimation,
	} from '@/animations/hoverAnimation.js';

	import { ref } from 'vue';
	import AppNavigation from './AppNavigation.vue';
	export default {
		components: { AppNavigation },
		setup() {
			const navToggleValue = ref(false);

			const toggleNav = () => {
				navToggleValue.value = !navToggleValue.value;
				if (navToggleValue.value) {
					navBurgerAnimation('#burgerline1', 8.69, 8.69, 31.31, 31.31, 0);
					navBurgerAnimation('#burgerline2', 10, 20.5, 36, 20.5, -200, 0);
					navBurgerAnimation('#burgerline3', 8.69, 31.31, 31.31, 8.69, 0);
				} else {
					navBurgerAnimation('#burgerline1', 4, 7.5, 36, 7.5, 0);
					navBurgerAnimation('#burgerline2', 10, 20.5, 36, 20.5, 0);
					navBurgerAnimation('#burgerline3', 4, 33.5, 30, 33.5, 0);
				}
			};

			const hovEnterAnimation = (id) => {
				hoverEnterAnimation(id);
			};

			const hovLeaveAnimation = (id) => {
				hoverLeaveAnimation(id);
			};
			return {
				toggleNav,
				navToggleValue,
				hovEnterAnimation,
				hovLeaveAnimation,
			};
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
