<template>
<div id="app">
	<Accordion title="Welcome to Your Vue.js App" @expand="expandAll" class="w-1/2 mx-auto">
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
	</Accordion>
	<Accordion title="Welcome to Your Vue.js App" @expand="expandAll" class="w-1/2 mx-auto">
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
		<p class="pb-2">Stuff 1</p>
	</Accordion>
</div>
</template>

<script>
import Accordion from './components/Accordion.vue'
import { EventBus } from './main'
export default {
	name: 'App',
	components: {
		Accordion
	},
	methods: {
		expandAll() {
			EventBus.$emit("closeAll");
		}
	}
}
</script>

<style>
	@tailwind base;

	@tailwind components;

	@tailwind utilities;
</style>
