import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Alert from "./views/Alert.vue";
import Badge from "./views/Badge.vue";
import Button from "./views/Button.vue";
import Card from "./views/Card.vue";
import Checkbox from "./views/Checkbox.vue";
import Colors from "./views/Colors.vue";
import Confirm from "./views/Confirm.vue";
import Datepicker from "./views/Datepicker.vue";
import Dropdown from "./views/Dropdown.vue";
import EmptyState from "./views/EmptyState.vue";
import Icons from "./views/Icons.vue";
import Input from "./views/Input.vue";
import Modal from "./views/Modal.vue";
import MultiselectSimple from "./views/MultiselectSimple.vue";
import Radio from "./views/Radio.vue";
import Search from "./views/Search.vue";
import Select from "./views/Select.vue";
import Spinners from "./views/Spinners.vue";
import Switch from "./views/Switch.vue";
import Table from "./views/Table.vue";
import Tags from "./views/Tags.vue";
import Texteditor from "./views/Texteditor.vue";
import Toast from "./views/Toast.vue";
import Typography from "./views/Typography.vue";
import Uploader from "./views/Uploader.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/badge",
      name: "badge",
      component: Badge
    },

    {
      path: "/button",
      name: "button",
      component: Button
    },

    {
      path: "/alerts",
      name: "alert",
      component: Alert
    },

    {
      path: "/input",
      name: "input",
      component: Input
    },

    {
      path: "/checkbox",
      name: "checkbox",
      component: Checkbox
    },
    {
      path: "/confirm",
      name: "confirm",
      component: Confirm
    },

    {
      path: "/datepicker",
      name: "datepicker",
      component: Datepicker
    },

    {
      path: "/texteditor",
      name: "texteditor",
      component: Texteditor
    },

    {
      path: "/radio",
      name: "radio",
      component: Radio
    },

    {
      path: "/search",
      name: "search",
      component: Search
    },

    {
      path: "/switch",
      name: "switch",
      component: Switch
    },

    {
      path: "/icons",
      name: "icons",
      component: Icons
    },

    {
      path: "/typography",
      name: "typography",
      component: Typography
    },

    {
      path: "/table",
      name: "table",
      component: Table
    },

    {
      path: "/select",
      name: "select",
      component: Select
    },

    {
      path: "/empty-states",
      name: "empty-states",
      component: EmptyState
    },

    {
      path: "/multiselect-simple",
      name: "multiselect-simple",
      component: MultiselectSimple
    },

    {
      path: "/tags",
      name: "tags",
      component: Tags
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal
    },

    {
      path: "/card",
      name: "card",
      component: Card
    },
    {
      path: "/spinners",
      name: "spinners",
      component: Spinners
    },

    {
      path: "/dropdown",
      name: "dropdown",
      component: Dropdown
    },

    {
      path: "/colors",
      name: "colors",
      component: Colors
    },

    {
      path: "/toast",
      name: "toast",
      component: Toast
    },

    {
      path: "/uploader",
      name: "uploader",
      component: Uploader
    },

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
