import BlogDetailView from '@/views/blog/BlogDetailView.vue'
import BlogView from '@/views/blog/BlogView.vue'
import HomeView from '@/views/HomeView.vue'
import WeatherView from '@/views/weather/WeatherView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomeView, name: 'HomeView'},
    {path: '/weather', component: WeatherView, name: 'WeatherView'},
    {path: '/blogs', component: BlogView, name: 'BlogView'},
    {path: '/blogs/:id', component: BlogDetailView, name: 'BlogDetailView'},
  ],
})

export default router
