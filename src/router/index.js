import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import { auth } from '../firebase';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    auth.onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        next({
          name: 'signin',
        });
      }
    });
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
