<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { featuredPosts } from '../data/content'

const route = useRoute()

const post = computed(() =>
  featuredPosts.find((item) => item.slug === route.params.slug),
)
</script>

<template>
  <div v-if="post">
    <section class="post-hero">
      <div class="container">
        <p class="eyebrow">{{ post.category }}</p>
        <h1>{{ post.title }}</h1>
        <p class="hero-text">{{ post.excerpt }}</p>
        <p class="post-meta">{{ post.date }}</p>
      </div>
    </section>

    <article class="container post-article">
      <img class="post-image post-image-large" :src="post.image" :alt="post.imageLabel" />
      <p v-for="paragraph in post.content" :key="paragraph">
        {{ paragraph }}
      </p>
      <RouterLink class="text-link" to="/">Voltar para a página inicial</RouterLink>
    </article>
  </div>

  <section v-else class="container section-block">
    <h1>Post não encontrado</h1>
    <p>O conteúdo procurado não está disponível.</p>
    <RouterLink class="text-link" to="/">Voltar ao início</RouterLink>
  </section>
</template>
