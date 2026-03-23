import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'idivisor3',
      component: () => import('@/pages/IDivisor3Page.vue'),
    },
    {
      // Hidden reference route — the AgeVisor 3 manual is kept as a working
      // example of a complete product manual. Do NOT use this as a template
      // for IDivisor 3 content; it uses the old design. Use the components
      // and tokens from the IDivisor 3 placeholder page instead.
      path: '/agevisor-3',
      name: 'agevisor3',
      component: () => import('@/pages/HomePage.vue'),
    },
  ],
})

export default router
