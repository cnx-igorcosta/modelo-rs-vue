import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './components/App.vue'
import { createRouter } from './router/router.js'


import store from './store'

export function createApp() {
  const router = createRouter();
  const app = new Vue({
    //el: '#app',
    router,
    store,
    render: h => h(App)
  });
  return { app, router };
}



