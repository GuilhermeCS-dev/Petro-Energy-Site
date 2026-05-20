<script setup>
import { RouterView } from 'vue-router'
import CabecalhoSite from './components/CabecalhoSite.vue'
import RodapeSite from './components/RodapeSite.vue'
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
    <CabecalhoSite />
    <main id="conteudo" tabindex="-1">
      <RouterView />
    </main>
    <RodapeSite />
  </div>
</template>
