import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase/config'
import Welcome from '../views/Welcome.vue'
import Shopping from '../views/Shopping.vue'
import AddToCart from '../views/AddToCart.vue'
const routes = [
  {
    path: '/',
    name: "Welcome",
    component: Welcome
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping,
    beforeEnter:(to,from,next)=>{
      let user = auth.currentUser;
      if (user) {
        next();
      }else{
        next({name:"Welcome"})
      }
    }
  },
  {
    path: '/shopping/add-to-cart',
    name: 'AddToCart',
    component: AddToCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
