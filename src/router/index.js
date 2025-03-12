import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    children: [
      {
        path: 'home',
        component: Home,
        name: 'Home'
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router