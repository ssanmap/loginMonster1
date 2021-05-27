import Inicio from './components/Inicio';
import Inicios from './views/Inicios';
import Blog from './components/Blog';
import Register from './components/Register';
import Router from 'vue-router'
import Home from '@/components/Home.vue';
import vue from 'vue'
vue.use(Router)

export default new Router({
    mode: "history",

  routes: [
    {
      path: "/in",
      name: "inicio",
      component: Inicio
    },
    {
      path: "/log",
      name: "inicios",
      component: Inicios
    },
    {
        path: "/",
        name: "home",
        component: Home
      },

    {
      path: "/blog",
      name: "blog",
      component: Blog
    }
    ,

    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]

});