<script setup>
import SecaoDestaque from '../components/SecaoDestaque.vue'
import IntroducaoSecao from '../components/IntroducaoSecao.vue'
import CartaoInfo from '../components/CartaoInfo.vue'
import { socialProjects } from '../data/content'
</script>

<template>
  <div>
    <SecaoDestaque
      eyebrow="Projetos sociais"
      title="Iniciativas que fortalecem comunidades e ampliam oportunidades"
      text="A Petro Energy apresenta seus programas sociais em uma página dedicada, com foco em educação, capacitação e desenvolvimento local."
    />

    <section class="container section-block">
      <IntroducaoSecao
        eyebrow="Compromisso territorial"
        title="Projetos mantidos pela empresa"
        text="Os programas abaixo mostram como a companhia traduz sua presença regional em iniciativas de longo prazo com impacto humano e educacional."
      />

      <div class="card-grid">
        <CartaoInfo
          v-for="project in socialProjects"
          :key="project.title"
          eyebrow="Projeto social"
          :title="project.title"
          :text="project.text"
        />
      </div>
    </section>
  </div>
</template>
