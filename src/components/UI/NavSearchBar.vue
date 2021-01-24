<template>
	<div class="w-full bg-clrBlack">
		<div class="relative flex flex-row py-4 px-7">
			<input
				type="text"
				class="w-full px-4 py-2 text-white bg-transparent border-b-2 outline-none w- text-15 border-clrWhite"
				placeholder="search your recipe"
			/>
			<button class="absolute right-0 p-0 px-4 top-6 focus:outline-none">
				<div class="w-8 h-8 mr-8 cursor-pointer">
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
					</svg> </div
			></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavSearchBar',
		setup() {
			return {};
		},
	};
</script>

<style scoped>
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
