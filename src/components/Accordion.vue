<template>
<div class="shadow border-b" :class="{ 'not-expanded': !this.expanded }">
	
	<header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none" @click="toggleCardState" v-if="!expanded">
		<span class="text-grey-darkest font-thin text-xl">
            {{ title }}
        </span>
		<div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
            <!-- icon by feathericons.com -->
            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9">
                </polyline>
            </svg>
        </div>
	</header>

	<header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none border border-b-1" @click="toggleCardState" v-if="expanded">
        <span class="text-indigo font-thin text-xl">
            {{ title }}
        </span>
       <div class="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo-500">
            <svg aria-hidden="true" data-reactid="281" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <polyline points="18 15 12 9 6 15">
                </polyline>
            </svg>
    	</div>
    </header>

	<div class="content">
        <div :class="cssclass.content">
           <slot></slot>
        </div>
	</div>
</div>
</template>

<script>
import { EventBus } from './../main'
export default {
	name: 'Accordion',
	props: ["title", "expandAll",'cssclass'],
	data() {
		return {
			"expanded": false
		}
	},
	methods: {
    	toggleCardState() {
	      	this.expanded = !this.expanded;
		},
	    closeAll() {
	      	this.expanded = false;
	   	}
	},
	created() {
	    EventBus.$on("closeAll", this.closeAll);
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
