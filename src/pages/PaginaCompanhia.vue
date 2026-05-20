<script setup>
import SecaoDestaque from '../components/SecaoDestaque.vue'
import IntroducaoSecao from '../components/IntroducaoSecao.vue'
import CartaoInfo from '../components/CartaoInfo.vue'
import { institutionalHighlights, values } from '../data/content'
</script>

<template>
  <div>
    <SecaoDestaque
      eyebrow="Companhia"
      title="História, missão, visão e valores"
      text="A Petro Energy atua com presença consolidada no setor, foco em desempenho operacional e compromisso com crescimento sustentável de longo prazo."
    />

    <section class="container section-block">
      <IntroducaoSecao
        eyebrow="Quem somos"
        title="Presença consolidada no setor"
        text="Uma companhia de capital aberto com atuação integrada em exploração, logística e distribuição de energia."
      />

      <div class="card-grid">
        <CartaoInfo
          v-for="item in institutionalHighlights"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :text="item.text"
        />
      </div>
    </section>

    <section class="container section-block values-section">
      <IntroducaoSecao
        eyebrow="Valores"
        title="Princípios que orientam cada decisão"
        text="Segurança, integridade, excelência técnica e responsabilidade socioambiental."
      />

      <ul class="values-list">
        <li v-for="value in values" :key="value">{{ value }}</li>
      </ul>
    </section>
  </div>
</template>
