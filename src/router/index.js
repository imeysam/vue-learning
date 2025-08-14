import BlogDetailView from '@/views/blog/BlogDetailView.vue'
import BlogView from '@/views/blog/BlogView.vue'
import CartView from '@/views/cart/CartView.vue'
import ProductView from '@/views/product/ProductView.vue'
import TodoView from '@/views/todo/TodoView.vue'
import WeatherView from '@/views/weather/WeatherView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: ProductView, name: 'ProductView'},
    {path: '/todo', component: TodoView, name: 'TodoView'},
    {path: '/weather', component: WeatherView, name: 'WeatherView'},
    {path: '/blogs', component: BlogView, name: 'BlogView'},
    {path: '/blogs/:id', component: BlogDetailView, name: 'BlogDetailView'},
    {path: '/cart', component: CartView, name: 'CartView'},
  ],
})

export default router
