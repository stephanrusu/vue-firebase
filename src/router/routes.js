// standar importing
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// Lazy load importing
// const Home = () => import('@/views/Home');
// const About = () => import('@/views/About');

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];
