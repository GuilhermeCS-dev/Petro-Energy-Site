<script setup>
defineProps({
  eyebrow: String,
  title: String,
  text: String,
  align: {
    type: String,
    default: 'left',
  },
})
</script>

<template>
  <section class="hero-section" :class="`align-${align}`">
    <div class="container">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="hero-text">{{ text }}</p>
      <slot />
    </div>
  </section>
</template>
