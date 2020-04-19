<template>
<div class="column is-half">
	<div class="card" :class="{ 'not-expanded': !this.expanded }">

		<header class="card-header" @click="toggleCardState">
			<p class="card-header-title">
				{{title}}
			</p>
			<a class="card-header-icon">
				<span class="icon">
					<i class="fa fa-angle-up"></i>
				</span>
			</a>
		</header>

		<div class="card-content">
			<div class="content">
				<slot></slot>
			</div>
		</div>

	</div>
</div>
</template>

<script>
import { EventBus } from './../main'
export default {
	name: 'Accordion',
	props: ["title", "expandAll"],
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
.card {
	 margin-bottom: 10px;
	 width: 100%;
}
 .card .card-header {
	 cursor: pointer;
}
 .card .card-header .icon {
	 transform: rotate(180deg);
	 transition: transform 150ms ease-out;
}
 .card .card-content {
	 transition: all 150ms ease;
}
 .card.not-expanded .card-header .icon {
	 transform: rotate(0deg);
}
 .card.not-expanded .card-content {
	 transform: scaleY(0);
	 transform-origin: top;
	 opacity: 0;
	 height: 0;
	 padding: 0;
}
 
</style>
