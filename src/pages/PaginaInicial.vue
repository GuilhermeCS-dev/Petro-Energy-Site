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
      text="A Petro Energy apresenta sua atuação com linguagem clara, visão corporativa e destaque para projetos que fortalecem a segurança energética e o desenvolvimento das regiões onde opera."
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
        title="Uma narrativa institucional que combina escala industrial e gestão responsável"
        text="Na home, a companhia reforça sua presença no setor e organiza os principais atributos da marca em blocos objetivos e de leitura fluida."
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
        text="Acompanhe os destaques mais recentes da companhia em exploração, infraestrutura e inovação."
      />

      <div class="post-grid">
        <CartaoPost v-for="post in featuredPosts" :key="post.slug" :post="post" />
      </div>
    </section>
  </div>
</template>
