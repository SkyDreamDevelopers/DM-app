import Home from "pages/Home.vue";
import Google from "pages/Google.vue";
import Index from "pages/Index.vue";
import Auth from "pages/Auth";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "google", name: "Google", component: Google },
      { path: "login", name: "Auth", component: Auth },
      { path: "home", name: "Home", component: Home },
      { path: "", name: "Index", component: Index }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
