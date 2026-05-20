<script setup>
defineProps({
  eyebrow: String,
  title: String,
  text: String,
})
</script>

<template>
  <article class="info-card">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </article>
</template>
