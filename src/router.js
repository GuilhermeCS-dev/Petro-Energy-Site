import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from './pages/PaginaInicial.vue'
import PaginaCompanhia from './pages/PaginaCompanhia.vue'
import PaginaProjetosSociais from './pages/PaginaProjetosSociais.vue'
import PaginaPost from './pages/PaginaPost.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'inicio', component: PaginaInicial },
    { path: '/companhia', name: 'companhia', component: PaginaCompanhia },
    { path: '/projetos-sociais', name: 'projetos-sociais', component: PaginaProjetosSociais },
    { path: '/noticias/:slug', name: 'post', component: PaginaPost, props: true },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
