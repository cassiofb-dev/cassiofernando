---
path: "/blog/nlw-3-dia-04"
date: "2020-10-16"
language: "pt-BR"
author: "Cássio Fernando"
title: "NLW 3 | Dia 4 da Next Level Week 3"
description: "Resumo do quarto dia da terceira edição da Next Level Week"
metaImage: "https://i.imgur.com/ysQ4tgL.jpg"
tags: ["nlw", "typescript", "mobile"]
---
# Dia 04 

 1. Desenvolvimento Mobile
 2. React Native
 3. Criando um projeto Expo
 4. Tasks
 5. Árvore de arquivos mobile

## Desenvolvimento Mobile

Há duas formas de se desenvolver uma aplicação mobile: Nativa ou Multi Plataforma. A imagem abaixo ilustra um pouco desses dois processos.
<p align='center'>
	<img src='https://i.imgur.com/vkzGWXv.png' alt='mobile'>
<p>

As vantagens do desenvolvimento nativo são: Performance, 100% das funcionalidades, sempre atualizado com o sistema e segurança.

Já as vantagens do multi plataforma são: Produtividade, simplicidade, manutenção e menor custo de produção.

## React Native

A stack utilizada nesse projeto é o [React Native](https://reactnative.dev/).  Que utiliza o react para desenvolvimento mobile, também utilizando conceitos de html e css e linguagens como JavaScript e TypeScript.

O react native tem algumas coisas diferentes do reactjs. As duas mais importantes é que não a tags para formatação de texto mas sim a tag  ```<Text><Text/>``` que tem que ser estilizada manualmente em vez de uma ```<div><div/>``` envolvendo nosso container ou página teremos a tag ```<View><View/>```.

## Criando um projeto Expo

[Expo](https://expo.io/) é uma plataforma para desenvolvimento de aplicativos com react e JavaScript para iOS, Android e web. Para instalar você deve rodar o seguinte comando:

```shell
yarn global add expo-cli
```

ou:

```shell
npm install --global expo-cli
```

Após instalação é fácil começar um projeto:

``` shell
expo init my-project-name
```
Após a instalação você está pronto para codar!

## Tasks do dia 04

 1. Criando tela do mapa
 2. Trabalhando com rotas

## Árvore de arquivos mobile

```
📦src
 ┣ 📂@types
 ┃ ┗ 📜index.d.ts
 ┣ 📂images
 ┃ ┣ 📜map_marker.png
 ┃ ┣ 📜map_marker@2x.png
 ┃ ┗ 📜map_marker@3x.png
 ┣ 📂pages
 ┃ ┣ 📜OrphanageDetails.tsx
 ┃ ┗ 📜OrphanagesMap.tsx
 ┗ 📜routes.tsx
```
