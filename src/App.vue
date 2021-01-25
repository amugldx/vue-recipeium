<template>
	<router-view />
	<AppFooter />
</template>

<script>
	import AppFooter from './components/UI/AppFooter';
	export default {
		components: { AppFooter },
		setup() {
			return {};
		},
	};
</script>
