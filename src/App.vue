<template>
  <div id="app">
    <Accordion title="Welcome to Your Vue.js App" @expand="expandAll">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
