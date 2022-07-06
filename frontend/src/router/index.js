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
  {
    path: '/resumo-admin',
    name: 'ResumoAdmin',
    component: () => import('../views/admin/ResumoAdmin.vue'),
  },
  {
    path: '/resumo-pedido',
    name: 'ResumoPedido',
    component: () => import('../views/admin/ResumoPedido.vue'),
  },
  {
    path: '/cardapio-admin',
    name: 'CardapioAdmin',
    component: () => import('../views/admin/CardapioAdmin.vue'),
  },
  {
    path: '/agradecimento',
    name: 'Agradecimento',
    component: () => import('../views/users/Agradecimento.vue'),
  },
  {
    path: '/controle-estoque',
    name: 'ControleEstoque',
    component: () => import('../views/admin/ControleEstoque.vue'),
  },
  {
    path: '/fornecedor',
    name: 'Fornecedor',
    component: () => import('../views/admin/Fornecedor.vue'),
  },
  {
    path: '/financeiro',
    name: 'Financeiro',
    component: () => import('../views/admin/Financeiro.vue'),
  },
  {
    path: '/administrativo',
    name: 'Administrativo',
    component: () => import('../views/admin/Administrativo.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
