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
      title="História, missão, visão e valores apresentados de forma amigável"
      text="A página institucional organiza a identidade corporativa em seções claras, enfatizando a trajetória da empresa, seus compromissos e sua visão de futuro."
    />

    <section class="container section-block">
      <IntroducaoSecao
        eyebrow="Quem somos"
        title="Presença consolidada no setor, com leitura direta e acolhedora"
        text="Os blocos abaixo estruturam a narrativa institucional sem perder objetividade, ajudando o visitante a entender a marca rapidamente."
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
        text="A comunicação visual reforça credibilidade, responsabilidade e colaboração entre operação, mercado e sociedade."
      />

      <ul class="values-list">
        <li v-for="value in values" :key="value">{{ value }}</li>
      </ul>
    </section>
  </div>
</template>
