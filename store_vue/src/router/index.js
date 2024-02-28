import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import ProductPage from '../views/Product.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import ArticleSectionPage from '../views/ArticlesList.vue'
import ProductsPage from '../views/Products.vue'
import ProfilePage from '../views/Profile.vue'
import ForgotPass from '../views/ForgotPass.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/product/:category/:id',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/articles',
    name: 'ArticleSectionPage',
    component: ArticleSectionPage 
  },
  {
    path: '/products/:category',
    name: 'ProductsPage',
    component: ProductsPage 
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage ,
  },
  {
    path: '/forgot-pass',
    name: 'ForgotPass',
    component: ForgotPass,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

