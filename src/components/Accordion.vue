<template>
<div class="shadow border-b" :class="{ 'not-expanded': !this.expanded }">

	<header :class="cssclass.header.default" @click="toggleCardState" v-if="!expanded">
		<span :class="cssclass.header.title">
            {{ title }}
        </span>
		<div :class="cssclass.header.icon">
            <!-- icon by feathericons.com -->
            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9">
                </polyline>
            </svg>
        </div>
	</header>

	<header :class="cssclass.activeheader.default" @click="toggleCardState" v-if="expanded">
        <span :class="cssclass.activeheader.title">
            {{ title }}
        </span>
       <div :class="cssclass.activeheader.icon">
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
