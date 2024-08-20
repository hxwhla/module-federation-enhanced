import { createApp } from 'vue';
import App from './App.vue';
import './index.css';


import { createWebHashHistory, createRouter } from 'vue-router'

import Page1 from './page1.jsx'
import Page2 from './page2.jsx'

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
console.log(router)

createApp(App).use(router).mount('#app');
