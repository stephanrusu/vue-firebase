// standar importing
import Messages from '@/components/messages/Messages.vue';
import Topics from '@/components/topics/Topics.vue';
import Sponsors from '@/components/sponsors/Sponsors.vue';
import Notifications from '@/components/notifications/Notifications.vue';
import Pharmacies from '@/components/pharmacies/Pharmacies.vue';


// Lazy load importing
// const Home = () => import('@/views/Home');
// const About = () => import('@/views/About');

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/messages',
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages,
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: Sponsors,
  },
  {
    path: '/topics',
    name: 'topics',
    component: Topics,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
  },
  {
    path: '/pharmacies',
    name: 'pharmacies',
    component: Pharmacies,
  },
];
