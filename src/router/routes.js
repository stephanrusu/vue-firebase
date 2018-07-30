// standar importing
import Messages from '@/components/messages/Messages.vue';
import MessagesList from '@/views/messages/MessagesList.vue';
import MessageForm from '@/views/messages/MessageForm.vue';

import Topics from '@/components/topics/Topics.vue';
import TopicsList from '@/views/topics/TopicsList.vue';
import TopicForm from '@/views/topics/TopicForm.vue';

import Sponsors from '@/components/sponsors/Sponsors.vue';
import SponsorsList from '@/views/sponsors/SponsorsList.vue';
import SponsorForm from '@/views/sponsors/SponsorForm.vue';

import Notifications from '@/components/notifications/Notifications.vue';
import NotificationForm from '@/views/notifications/NotificationForm.vue';
import NotificationsList from '@/views/notifications/NotificationsList.vue';

import Pharmacies from '@/components/pharmacies/Pharmacies.vue';
import PharmaciesList from '@/views/pharmacies/PharmaciesList.vue';
import PharmacyForm from '@/views/pharmacies/PharmacyForm.vue';

import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';


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
        component: MessagesList,
        meta: { requiresAuth: true },
        props: true,
      },
      {
        path: 'create',
        name: 'messageCreate',
        component: MessageForm,
        meta: { requiresAuth: true },
      },
      {
        path: 'edit/:id',
        name: 'messageEdit',
        component: MessageForm,
        meta: { requiresAuth: true },
        props: true,
      },
    ],
  },
  {
    path: '/sponsors',
    component: Sponsors,
    children: [
      {
        path: '',
        name: 'sponsors',
        component: SponsorsList,
        meta: { requiresAuth: true },
        props: true,
      },
      {
        path: 'create',
        name: 'sponsorCreate',
        component: SponsorForm,
        meta: { requiresAuth: true },
      },
      {
        path: 'edit/:id',
        name: 'sponsorEdit',
        component: SponsorForm,
        meta: { requiresAuth: true },
        props: true,
      },
    ],
  },
  {
    path: '/topics',
    component: Topics,
    children: [
      {
        path: '',
        name: 'topics',
        component: TopicsList,
        meta: { requiresAuth: true },
        props: true,
      },
      {
        path: 'create',
        name: 'topicCreate',
        component: TopicForm,
        meta: { requiresAuth: true },
      },
      {
        path: 'edit/:id',
        name: 'topicEdit',
        component: TopicForm,
        meta: { requiresAuth: true },
        props: true,
      },
    ],
  },
  {
    path: '/notifications',
    component: Notifications,
    children: [
      {
        path: '',
        name: 'notifications',
        component: NotificationsList,
        meta: { requiresAuth: true },
        props: true,
      },
      {
        path: 'create',
        name: 'notificationCreate',
        component: NotificationForm,
        meta: { requiresAuth: true },
      },
      {
        path: 'edit/:id',
        name: 'notificationEdit',
        component: NotificationForm,
        meta: { requiresAuth: true },
        props: true,
      },
    ],
  },
  {
    path: '/pharmacies',
    component: Pharmacies,
    children: [
      {
        path: '',
        name: 'pharmacies',
        component: PharmaciesList,
        meta: { requiresAuth: true },
        props: true,
      },
      {
        path: 'create',
        name: 'pharmacyCreate',
        component: PharmacyForm,
        meta: { requiresAuth: true },
      },
      {
        path: 'edit/:id',
        name: 'pharmacyEdit',
        component: PharmacyForm,
        meta: { requiresAuth: true },
        props: true,
      },
    ],
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
];
