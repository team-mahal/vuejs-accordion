# vue-collapse

#Installation

#NPM
```
npm i vuejs-accordion --save
```
## Usage As plugin
```js
import Vue from 'vue'
import Accordion from 'vuejs-accordion'

Vue.use(Accordion)

```

```vue
<template>
<div id="app">
	<Accordion title="Welcome to Your Vue.js App" :cssclass='cssclass' class="w-1/2 mx-auto my-3">
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
export default {
	data() {
		return {
			cssclass: {
				content:'pl-8 pr-8 pb-5 text-grey-darkest border-l-2 border-indigo-500',
				header:{
					default:'flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none',
					title:'text-grey-darkest font-thin text-xl',
					icon:'rounded-full border border-grey w-7 h-7 flex items-center justify-center'
				},
				activeheader:{
					default:'flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none border border-b-1',
					title:'text-indigo font-thin text-xl',
					icon:'rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo-500'
				}
			}
		}
	},
	methods: {
		expandAll() {
			
		}
	}
}
</script>

<style scoped>
.content {
	transition: all 150ms ease;
}
.not-expanded .content {
	transform: scaleY(0);
	transform-origin: top;
	opacity: 0;
	height: 0;
	padding: 0;
}
</style>


```

## Available props
The component accepts these props:

