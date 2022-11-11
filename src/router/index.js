import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/AuthView.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/AuthView.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue")
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue")
    },
    {
      path: "/news/:id",
      name: "news-detail",
      component: () => import("../views/NewsDetailView.vue")
    }
  ]
});

export default router;
