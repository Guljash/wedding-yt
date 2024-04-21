import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import mainView from "../views/mainView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: mainView,
  },
  {
    path: "/main/:id",
    name: "main2",
    component: mainView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.PUBLIC_URL),
  routes,
});

export default router;
