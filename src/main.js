import Vue from 'vue';
import Buefy from 'buefy';
import VueFire from 'vuefire';
import VueMoment from 'vue-moment';
// import 'buefy/lib/buefy.css';

import router from './router';
import store from './store';
import App from './App.vue';
import './styles/bulma.scss'; // custom styles entry point

Vue.use(Buefy);
Vue.use(VueFire);
Vue.use(VueMoment);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
