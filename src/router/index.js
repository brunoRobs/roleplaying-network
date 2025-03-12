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
        name: 'Home',
        children: [
          {
            path: 'campaigns',
            components: { content: () => import('@/components/campaigns/Campaigns.vue') },
            name: 'Campaigns'
          },
          {
            path: 'characters',
            components: { content: () => import('@/components/characters/Characters.vue') },
            name: 'Characters'
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router