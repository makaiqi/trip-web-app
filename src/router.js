import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: '*',
      component: () => import("./views/Login/index.vue")
    },
    { path: '/home',
      component: () => import("./views/Home/index.vue")
    },
    { path: '/audio',
      component: () => import("./views/Audio/index.vue")
    },
    { path: '/detail',
      component: () => import("./views/Detail/index.vue")
    },
    { path: '/store',
      component: () => import("./views/Store/index.vue")
    },
    { path: '/info',
      component: () => import("./views/Info/index.vue")
    },
    { path: '/toilet',
      component: () => import("./views/Toilet/index.vue")
    },
    { path: '/user',
      component: () => import("./views/User/index.vue")
    },
    { path: '/product',
      component: () => import("./views/Product/index.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
