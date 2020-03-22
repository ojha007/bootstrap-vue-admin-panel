import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import authRoutes from "../modules/auth/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
].concat(authRoutes);
// const isAuthenticated = false;
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  // if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  next();
  console.log(to, from, next);
});
export default router;
