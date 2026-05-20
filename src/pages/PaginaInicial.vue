<script setup>
import SecaoDestaque from '../components/SecaoDestaque.vue'
import IntroducaoSecao from '../components/IntroducaoSecao.vue'
import CartaoInfo from '../components/CartaoInfo.vue'
import CartaoPost from '../components/CartaoPost.vue'
import { featuredPosts, impactNumbers, institutionalHighlights } from '../data/content'
</script>

<template>
  <div>
    <SecaoDestaque
      eyebrow="Energia em movimento"
      title="Uma companhia de escala global com foco em confiabilidade, engenharia e impacto positivo"
      text="A Petro Energy destaca projetos estratégicos, resultados operacionais e investimentos que fortalecem sua presença no setor de energia."
    >
      <div class="hero-actions">
        <a class="button-primary" href="#ultimos-posts">Ver últimos posts</a>
        <RouterLink class="button-secondary" to="/companhia">Conheça a companhia</RouterLink>
        <RouterLink class="button-secondary" to="/projetos-sociais">Projetos sociais</RouterLink>
      </div>
    </SecaoDestaque>

    <section class="container stats-grid" aria-label="Indicadores institucionais">
      <article v-for="item in impactNumbers" :key="item.label" class="stat-chip">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </article>
    </section>

    <section class="container section-block">
      <IntroducaoSecao
        eyebrow="Destaques"
        title="Escala industrial, gestão responsável e visão de futuro"
        text="Atuação integrada, disciplina operacional e investimentos contínuos em infraestrutura e inovação."
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

    <section id="ultimos-posts" class="container section-block">
      <IntroducaoSecao
        eyebrow="Últimos posts"
        title="Os três projetos mais recentes visíveis logo na página inicial"
        text="Infraestrutura, exploração e inovação em destaque."
      />

      <div class="post-grid">
        <CartaoPost v-for="post in featuredPosts" :key="post.slug" :post="post" />
      </div>
    </section>
  </div>
</template>
