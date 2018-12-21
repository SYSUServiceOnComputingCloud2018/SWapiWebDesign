import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/About.vue';
import Documentation from '../components/Documentation.vue';
import Home from '../components/Home.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/documentation',
      component: Documentation
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

export default router;
