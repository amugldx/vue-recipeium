<template>
	<div>
		<div v-if="to">
			<router-link
				class="px-12 py-4 transition-all focus:outline-none active:outline-none shadow-card"
				:to="to"
				:class="color"
				><slot
			/></router-link>
		</div>
		<div v-else>
			<button
				@click="$emit('btn-clicked')"
				class="px-12 py-4 transition-all focus:outline-none active:outline-none shadow-card"
				:class="color"
				:type="type ? type : 'button'"
				><slot
			/></button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['color', 'to', 'type'],
		setup() {
			return {};
		},
	};
</script>
