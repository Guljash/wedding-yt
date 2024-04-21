import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import mainView from "../views/mainView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:id",
    name: "main",
    component: mainView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
