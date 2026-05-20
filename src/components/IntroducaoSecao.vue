<script setup>
defineProps({
  eyebrow: String,
  title: String,
  text: String,
})
</script>

<template>
  <header class="section-intro">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </header>
</template>
