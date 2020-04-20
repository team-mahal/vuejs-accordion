<template>
<div id="app">
	<Accordion title="Welcome to Your Vue.js App" @expand="expandAll">
		<p>Stuff 1</p>
		<p>Stuff 1</p>
		<p>Stuff 1</p>
		<p>Stuff 1</p>
		<p>Stuff 1</p>
		<p>Stuff 1</p>
		<p>Stuff 1</p>
		<p>Stuff 1</p>
		<p>Stuff 1</p>
		<p>Stuff 1</p>
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
