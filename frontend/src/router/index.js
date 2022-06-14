import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/abertura',
    name: 'Abertura',
    component: () => import('../views/users/Abertura.vue'),
  },
  {
    path: '/apresentacao',
    name: 'Apresentacao',
    component: () => import('../views/users/Apresentacao.vue'),
  },
  {
    path: '/minha-conta',
    name: 'MinhaConta',
    component: () => import('../views/users/MinhaConta.vue'),
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: () => import('../views/users/Cardapio.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
