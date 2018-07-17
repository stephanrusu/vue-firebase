// standar importing
import Messages from '@/components/messages/Messages.vue';
import Topics from '@/components/topics/Topics.vue';
import Sponsors from '@/components/sponsors/Sponsors.vue';
import Notifications from '@/components/notifications/Notifications.vue';
import Pharmacies from '@/components/pharmacies/Pharmacies.vue';
import * as routes from '@/constants/';

// Lazy load importing
// const Home = () => import('@/views/Home');
// const About = () => import('@/views/About');

export default [
  {
    path: routes.ROUTE_HOME,
    name: routes.TYPE_HOME,
    redirect: routes.ROUTE_MESSAGES,
  },
  {
    path: routes.ROUTE_MESSAGES,
    name: routes.TYPE_MESSAGES,
    component: Messages,
  },
  {
    path: routes.ROUTE_SPONSORS,
    name: routes.TYPE_SPONSORS,
    component: Sponsors,
  },
  {
    path: routes.ROUTE_TOPICS,
    name: routes.TYPE_TOPICS,
    component: Topics,
  },
  {
    path: routes.ROUTE_NOTIFICATIONS,
    name: routes.TYPE_NOTIFICATIONS,
    component: Notifications,
  },
  {
    path: routes.ROUTE_PHARMACIES,
    name: routes.TYPE_PHARMACIES,
    component: Pharmacies,
  },
];
