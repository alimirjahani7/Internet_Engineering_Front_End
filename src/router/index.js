import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
// import Vue from "vue";
// import VueRouter from "vue-router";
//
// Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;