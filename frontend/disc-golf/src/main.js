import { createApp } from 'vue';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi } from 'vuetify/iconsets/mdi';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './Home.vue';
import Innova from './Innova.vue';
import Discraft from './Discraft.vue';
import DynamicDiscs from './DynamicDiscs.vue';
import SearchResults from './Search.vue';
import Checkout from './Checkout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/innova', component: Innova },
  { path: '/discraft', component: Discraft },
  { path: '/dynamicdiscs', component: DynamicDiscs },
  { path: '/search', name: 'search', component: SearchResults, props: (route) => ({ query: route.query.name }) },
  { path: '/checkout', name: 'checkout', component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
});

createApp(App)
  .use(router)  
  .use(vuetify)
  .mount('#app');
