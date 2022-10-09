import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/components/partials/login.vue")
  },
  {
    path: "/contact-details",
    name: "contact",
    component: () => import("@/components/partials/contact.vue")
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/components/partials/welcome.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
