import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DiscoverView from "../views/DiscoverView.vue";
import PostService from "../views/PostService.vue";
import SavedItems from "../views/SavedItems.vue";
import Settings from "../views/Settings.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/discover",
    name: "discover",
    component: DiscoverView,
  },

  {
    path: "/post-service",
    name: "postService",
    component: PostService,
  },

  {
    path: "/saved-items",
    name: "savedItems",
    component: SavedItems,
  },

  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
