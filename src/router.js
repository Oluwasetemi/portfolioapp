import Vue from "vue";
import Router from "vue-router";
import Portfolio from "./components/Portfolio.vue";
import About from "./components/About.vue";
import Port from "./components/port.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/port",
      name: "port",
      component: Port
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
