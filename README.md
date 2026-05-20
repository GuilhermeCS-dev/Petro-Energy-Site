# Petro Energy

Projeto de site corporativo desenvolvido com Vue 3 e Vite.

## Sobre o projeto

Este projeto foi criado para apresentar o site institucional da Petro Energy.
O site possui:

- página inicial com destaque visual e os três últimos posts;
- página da companhia com história, missão, visão e valores;
- página de projetos sociais;
- página interna para leitura completa dos posts.

## Tecnologias utilizadas

- Vue 3
- Vue Router
- Vite
- HTML semântico
- CSS responsivo

## Estrutura do projeto

- `src/main.js`: ponto de entrada da aplicação.
- `src/router.js`: configuração das rotas.
- `src/App.vue`: estrutura principal do site.
- `src/pages/`: páginas do projeto.
- `src/components/`: componentes reutilizados entre as páginas.
- `src/data/content.js`: textos e dados exibidos no site.
- `public/posts/`: imagens usadas nos posts.

## Como executar

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador o endereço mostrado no terminal.

## Como gerar a versão final

Para gerar a build de produção:

```bash
npm run build
```

Os arquivos finais serão criados na pasta `dist`.

## Observações

- A pasta `node_modules` não precisa ser enviada para o GitHub.
- Caso outra pessoa baixe o projeto, basta executar `npm install` para reinstalar as dependências.
