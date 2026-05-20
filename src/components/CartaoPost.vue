<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="post-card">
    <img class="post-image" :src="post.image" :alt="post.imageLabel" />
    <div class="post-copy">
      <p class="eyebrow">{{ post.category }}</p>
      <h3>{{ post.title }}</h3>
      <p class="post-meta">{{ post.date }}</p>
      <p>{{ post.excerpt }}</p>
      <RouterLink class="text-link" :to="`/noticias/${post.slug}`">
        Ler post completo
      </RouterLink>
    </div>
  </article>
</template>
