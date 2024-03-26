import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'
import Dogs from '../views/TheDogs.vue'
import Cats from '../views/TheCats.vue'
import Fish from '../views/TheFish.vue'
import AboutUs from '../views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/dogs', name: 'dogs', component: Dogs },
    { path: '/cats', name: 'cats', component: Cats },
    { path: '/fish', name: 'fish', component: Fish },
    { path: '/about-us', name: 'about-us', component: AboutUs }
  ]
})

export default router
