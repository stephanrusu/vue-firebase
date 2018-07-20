// standar importing
import Messages from '@/components/messages/Messages.vue';
import Topics from '@/components/topics/Topics.vue';
import Sponsors from '@/components/sponsors/Sponsors.vue';
import Notifications from '@/components/notifications/Notifications.vue';
import Pharmacies from '@/components/pharmacies/Pharmacies.vue';

import MessageList from '@/views/messages/MessagesList.vue';
import MessageForm from '@/views/messages/MessageForm.vue';

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
    component: Messages,
    children: [
      {
        path: '',
        name: 'messages',
        component: MessageList,
        props: true,
      },
      {
        path: 'create',
        name: 'messageCreate',
        component: MessageForm,
      },
      {
        path: 'edit/:id',
        name: 'messageEdit',
        component: MessageForm,
        props: true,
      },
    ],
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
