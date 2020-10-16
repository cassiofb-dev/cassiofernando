---
path: "/blog/nlw-3-dia-03"
date: "2020-10-15"
language: "pt-BR"
author: "Cássio Fernando"
title: "NLW 3 | Dia 3 da Next Level Week 3"
description: "Resumo do terceiro dia da terceira edição da Next Level Week"
metaImage: "https://i.imgur.com/ysQ4tgL.jpg"
tags: ["nlw", "typescript"]
---

# Dia 03

Esse dia foi muito mais prático do que teórico. Então só irei colocar as tasks realizadas, a árvore de arquivos para referência e um exemplo rodando em nuvem.

## Tasks

 1. Finalizar página do mapa
 2. Copiando páginas faltantes
 3. Criando navegação entre elas
 4. Abstraindo componentes (Sidebar)
 5. Conectando Frontend com Backend
 6. Detalhe do orfanato
 7. Criação de um orfanato

## Exemplo

Depois de finalizar o dia 3, coloquei o frontend e o backend online (irei tirar depois de algum tempo) para referências.
Segue os links:

 - [Frontend](https://happy-frontend.netlify.app/)
 - [Backend](https://happy-back-end.herokuapp.com/)

### Árvores de arquivos backend - Dia 3
```
📦src
 ┣ 📂config
 ┃ ┗ 📜upload.ts
 ┣ 📂controllers
 ┃ ┗ 📜OrphanagesController.ts
 ┣ 📂database
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📜1602604062694-create_orphanages.ts
 ┃ ┃ ┗ 📜1602619431968-create_images.ts
 ┃ ┣ 📜connection.ts
 ┃ ┗ 📜database.sqlite
 ┣ 📂errors
 ┃ ┗ 📜handler.ts
 ┣ 📂models
 ┃ ┣ 📜Image.ts
 ┃ ┗ 📜Orphanage.ts
 ┣ 📂views
 ┃ ┣ 📜image_view.ts
 ┃ ┗ 📜orphanage_view.ts
 ┣ 📜routes.ts
 ┗ 📜server.ts
```

### Árvores de arquivos frontend - Dia 3

```
📦src
 ┣ 📂components
 ┃ ┗ 📜Sidebar.tsx
 ┣ 📂images
 ┃ ┣ 📜landing.svg
 ┃ ┣ 📜logo.svg
 ┃ ┗ 📜map-marker.svg
 ┣ 📂pages
 ┃ ┣ 📜CreateOrphanage.tsx
 ┃ ┣ 📜Landing.tsx
 ┃ ┣ 📜Orphanage.tsx
 ┃ ┗ 📜OrphanagesMap.tsx
 ┣ 📂services
 ┃ ┗ 📜api.ts
 ┣ 📂styles
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜sidebar.css
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜create-orphanage.css
 ┃ ┃ ┣ 📜landing.css
 ┃ ┃ ┣ 📜orphanage-map.css
 ┃ ┃ ┗ 📜orphanage.css
 ┃ ┗ 📜global.css
 ┣ 📂utils
 ┃ ┗ 📜mapIcon.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜routes.tsx
```
