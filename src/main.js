import Vue from 'vue';
import Buefy from 'buefy';
import VueMoment from 'vue-moment';
import VeeValidate from 'vee-validate';
import VueI18Next from '@panter/vue-i18next';

import router from './router';
import store from './store';
import App from './App.vue';
import i18next from './locale/i18n';
import './helpers/filters/capitalize';

Vue.use(Buefy);
Vue.use(VueMoment);
Vue.use(VeeValidate);
Vue.use(VueI18Next);

Vue.config.productionTip = false;

// Vue.config.devtools = false;
// Vue.config.debug = false;
// Vue.config.silent = true;

const i18n = new VueI18Next(i18next);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
