import { createRouter, createWebHistory } from "vue-router";
import indexpage from "@pages/index.vue";
import LakePage from "@pages/lake.vue";
const routes = [
  {  name: "index", path: "/", component: indexpage },
  {  name: "lake", path: "/lakes/:id", component: LakePage,meta: {title: "Kategóriához tartozó filmek"}},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;  