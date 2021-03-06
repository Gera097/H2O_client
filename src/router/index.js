import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CommunityView from "../views/CommunityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/animals",
      name: "Animals",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AnimalsView.vue"),
    },
    {
      path: "/community",
      name: "h2o_community",
      component: CommunityView,
    },
  ],
});

export default router;
