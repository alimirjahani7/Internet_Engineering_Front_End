import Vue from 'vue';

import App from './App.vue';

import './assets/styles/index.css';
import store from './store'


import router from '@/router/index'

Vue.config.productionTip = true;

Vue.use(router);

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');
