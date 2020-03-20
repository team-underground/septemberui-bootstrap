import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import EvaIcons from "vue-eva-icons";
import "prismjs";
import VuePrismEditor from "vue-prism-editor";
import VueSnackbar from "vue-snack";
import VCalendar from "v-calendar";
import PortalVue from "portal-vue";
import VueSelect from "vue-cool-select";

Vue.component("prism-editor", VuePrismEditor);
Vue.use(EvaIcons);
Vue.use(VueSnackbar, { close: true, position: "bottom-left" });
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {});
Vue.use(PortalVue);

Vue.use(VueSelect, {
  theme: "bootstrap" // or 'material-design'
});

Vue.config.productionTip = false;

Vue.directive("numeric-float", {
  bind(el) {
    el.addEventListener("keydown", e => {
      if (
        [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if (
        (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
        (e.keyCode < 96 || e.keyCode > 105)
      ) {
        e.preventDefault();
      }
    });
  }
});

Vue.directive("numeric-only", {
  bind(el) {
    el.addEventListener("keydown", e => {
      if (
        [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57].includes(e.keyCode) ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        // let it happen, don't do anything
        return;
      }

      // Ensure that it is a number and stop the keypress
      if (
        (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
        (e.keyCode < 96 || e.keyCode > 105)
      ) {
        e.preventDefault();
      }
    });
  }
});
let handleOutsideClick;
Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    handleOutsideClick = e => {
      e.stopPropagation();
      // Get the handler method name
      // from the object used in v-click-outside
      const { handler } = binding.value;
      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!el.contains(e.target)) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]();
      }
    };
    // Register click/touchstart event listeners on the whole page
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },
  unbind() {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
