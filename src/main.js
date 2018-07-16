import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/bulma.scss'; // custom styles entry point

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
