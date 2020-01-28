// standar importing
import MessagesPage from '@/components/messages/MessagesPage.vue';
import MessagesList from '@/views/messages/MessagesList.vue';
import MessageForm from '@/views/messages/MessageForm.vue';

import TopicsPage from '@/components/topics/TopicsPage.vue';
import TopicsList from '@/views/topics/TopicsList.vue';
import TopicForm from '@/views/topics/TopicForm.vue';

import SponsorsPage from '@/components/sponsors/SponsorsPage.vue';
import SponsorsList from '@/views/sponsors/SponsorsList.vue';
import SponsorForm from '@/views/sponsors/SponsorForm.vue';

import NotificationsPage from '@/components/notifications/NotificationsPage.vue';
import NotificationForm from '@/views/notifications/NotificationForm.vue';
import NotificationsList from '@/views/notifications/NotificationsList.vue';

import PharmaciesPage from '@/components/pharmacies/PharmaciesPage.vue';
import PharmaciesList from '@/views/pharmacies/PharmaciesList.vue';
import PharmacyForm from '@/views/pharmacies/PharmacyForm.vue';

import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import SignUpTest from '@/components/auth/SignUpTest.vue';
import ForgotPassword from '@/components/auth/ForgotPassword.vue';
import ResetPassword from '@/components/auth/ResetPassword.vue';

// Lazy load importing
// const Home = () => import('@/views/Home');
// const About = () => import('@/views/About');

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/messages',
    meta: {
      name: 'home',
      parent: '',
    },
  },
  {
    path: '/messages',
    component: MessagesPage,
    meta: {
      name: 'messages',
      parent: 'home',
    },
    children: [
      {
        path: '',
        name: 'messages',
        component: MessagesList,
        meta: {
          requiresAuth: true,
          name: 'messages',
          parent: 'home',
        },
        props: true,
      },
      {
        path: 'create',
        name: 'messageCreate',
        component: MessageForm,
        meta: {
          requiresAuth: true,
          name: 'createMessage',
          parent: 'messages',
        },
      },
      {
        path: 'edit/:id',
        name: 'messageEdit',
        component: MessageForm,
        meta: {
          requiresAuth: true,
          name: 'editMessages',
          parent: 'messages',
        },
        props: true,
      },
    ],
  },
  {
    path: '/sponsors',
    component: SponsorsPage,
    meta: {
      name: 'sponsors',
      parent: 'home',
    },
    children: [
      {
        path: '',
        name: 'sponsors',
        component: SponsorsList,
        meta: {
          requiresAuth: true,
          name: 'sponsors',
          parent: 'home',
        },
        props: true,
      },
      {
        path: 'create',
        name: 'sponsorCreate',
        component: SponsorForm,
        meta: {
          requiresAuth: true,
          name: 'createSponsors',
          parent: 'sponsors',
        },
      },
      {
        path: 'edit/:id',
        name: 'sponsorEdit',
        component: SponsorForm,
        meta: {
          requiresAuth: true,
          name: 'editSponsors',
          parent: 'sponsors',
        },
        props: true,
      },
    ],
  },
  {
    path: '/topics',
    component: TopicsPage,
    meta: {
      name: 'topics',
      parent: 'home',
    },
    children: [
      {
        path: '',
        name: 'topics',
        component: TopicsList,
        meta: {
          requiresAuth: true,
          name: 'topics',
          parent: 'home',
        },
        props: true,
      },
      {
        path: 'create',
        name: 'topicCreate',
        component: TopicForm,
        meta: {
          requiresAuth: true,
          name: 'createTopics',
          parent: 'topics',
        },
      },
      {
        path: 'edit/:id',
        name: 'topicEdit',
        component: TopicForm,
        meta: {
          requiresAuth: true,
          name: 'editTopics',
          parent: 'topics',
        },
        props: true,
      },
    ],
  },
  {
    path: '/notifications',
    component: NotificationsPage,
    meta: {
      name: 'notifications',
      parent: 'home',
    },
    children: [
      {
        path: '',
        name: 'notifications',
        component: NotificationsList,
        meta: {
          requiresAuth: true,
          name: 'notifications',
          parent: 'home',
        },
        props: true,
      },
      {
        path: 'create',
        name: 'notificationCreate',
        component: NotificationForm,
        meta: {
          requiresAuth: true,
          name: 'createNotifications',
          parent: 'notifications',
        },
      },
      {
        path: 'edit/:id',
        name: 'notificationEdit',
        component: NotificationForm,
        meta: {
          requiresAuth: true,
          name: 'editNotifications',
          parent: 'notifications',
        },
        props: true,
      },
    ],
  },
  {
    path: '/pharmacies',
    component: PharmaciesPage,
    meta: {
      name: 'pharmacies',
      parent: 'home',
    },
    children: [
      {
        path: '',
        name: 'pharmacies',
        component: PharmaciesList,
        meta: {
          requiresAuth: true,
          name: 'pharnacies',
          parent: 'home',
        },
        props: true,
      },
      {
        path: 'create',
        name: 'pharmacyCreate',
        component: PharmacyForm,
        meta: {
          requiresAuth: true,
          name: 'createPharnacies',
          parent: 'pharnacies',
        },
      },
      {
        path: 'edit/:id',
        name: 'pharmacyEdit',
        component: PharmacyForm,
        meta: {
          requiresAuth: true,
          name: 'editPharnacies',
          parent: 'pharnacies',
        },
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
  {
    path: '/signuptest',
    name: 'signuptest',
    component: SignUpTest,
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: ForgotPassword,
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: ResetPassword,
  },
];
