<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <div class="container header-bar">
      <RouterLink class="brand" to="/">
        <span>
          <strong>Petro Energy</strong><br />
          <small>site corporativo</small>
        </span>
      </RouterLink>

      <nav class="site-nav" aria-label="Principal">
        <RouterLink to="/" class="nav-link">Início</RouterLink>
        <RouterLink to="/companhia" class="nav-link">Companhia</RouterLink>
        <RouterLink to="/projetos-sociais" class="nav-link">Projetos sociais</RouterLink>
      </nav>
    </div>
  </header>
</template>
