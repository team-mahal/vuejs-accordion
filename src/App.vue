<template>
<div id="app">
	<Accordion title="Welcome to Your Vue.js App" :cssclass='cssclass' @expand="expandAll" class="w-1/2 mx-auto my-3">
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
	<Accordion title="Welcome to Your Vue.js App" :cssclass='cssclass' @expand="expandAll" class="w-1/2 mx-auto my-3">
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
	data() {
		return {
			cssclass: {
				content:'pl-8 pr-8 pb-5 text-grey-darkest border-l-2 border-indigo-500'
			}
		}
	},
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
