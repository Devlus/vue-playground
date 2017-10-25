import Vue from 'vue';
import VueRouter from 'vue-router';

import './sass/main.scss';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { ListComponent } from './components/list';
import { NavbarComponent } from './components/navbar';
import Vuec from 'vue-container';
import {Syringe} from './syringe';

// register the plugin
Vue.use(VueRouter);
Vue.use(Syringe);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/list', component: ListComponent },
  ]
});

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': NavbarComponent
  }
});
