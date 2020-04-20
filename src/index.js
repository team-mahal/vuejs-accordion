import Accordion from './components/Accordion.vue'

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Accordion", Accordion);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

Accordion.install = install;

export default Accordion;