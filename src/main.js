import Vue from 'vue';
import Buefy from 'buefy';
import VueMoment from 'vue-moment';
import VeeValidate from 'vee-validate';

import router from './router';
import store from './store';
import App from './App.vue';

Vue.use(Buefy);
Vue.use(VueMoment);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
