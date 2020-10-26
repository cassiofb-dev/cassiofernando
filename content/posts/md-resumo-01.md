---
path: "/blog/md-resumo-01"
date: "2020-10-25"
language: "pt-BR"
author: "Cássio Fernando"
title: "Matemática Discreta | Resumo 01"
description: "Primeiro resumo do curso de Matemática Discreta."
metaImage: "https://i.imgur.com/yRS5RQP.png"
tags: ["bcc", "md"]
---
Cássio aqui. Como sou monitor de matemática discreta, resolvi fazer um resumo com base nos slides do professor Diego para ajudar os estudantes da matéria. Caso encontre algum erro sinta-se livre para entrar em contato.

# Conjuntos

## Definição

Uma coleção de objetos bem definidos, denominados elementos ou membros do conjunto. 

## Notação

Representados por letras **maiúsculas**. Ex:
$$
A=\{1,2,3,\dots,a,b,c,\dots\}\\
B=\{x\mid x = 2\cdot n,n\in \natnums\}
$$

## Igualdade

Dizemos que o conjunto $A=B$ se e somente se:
$$
(\forall x)(x\in A \iff x\in B)
$$

## Subconjunto

Representado pelo símbolo $\subseteq$ , dizemos que $A\subseteq B$ quando:
$$
(\forall x)(x\in A \implies x\in B)
$$

Ainda podemos classificar subconjuntos como próprios se:
$$
(\forall x)(\exist y)[(x\in A \implies x\in B)\land (y\in B\implies y \not\in A)]
$$

## Conjunto das Partes

Conjunto que contém todos os subconjuntos de outro conjunto denotado pelo símbolo $\mathcal{P}$. Ex:
$$
A=\{1,2,3\}\\
\mathcal{P}(A)=\big\{\empty,\{1\},\{2\},\{3\},\{1,2\},\{1,3\},\{2,3\},A\big\}
$$

## Conjunto universo

O conjunto universo é o conjunto que contém todos os elementos que se deseja considerar em uma situação. De forma que todos os conjuntos em questão seriam subconjuntos desse conjunto maior, muitas das vezes representado pelo símbolo $U$.

## Operações de conjuntos

Operações de conjuntos com seus diagramas de Venn.
Seja $A\subset U\land B\subset U$:

### União:

$$
A\cup B=\{x\in U\mid x\in A\lor x\in B\}
$$

<p align="center"><img src="https://i.imgur.com/zKV0GTc.png" alt="venn"/></p>

### Interseção:

$$
A\cap B=\{x\in U\mid x\in A \land x\in B\}
$$

<p align="center"><img src="https://i.imgur.com/6sBrm33.png" alt="venn"/></p>

### Diferença:

$$
A-B=\{x\in U\mid x\in A\land x\not\in B\}
$$

<p align="center"><img src="https://i.imgur.com/Cbfo4pn.png" alt="venn"/></p>

### Complemento:

$$
A'=\{x\in S\mid x\not\in A\}
$$

<p align="center"><img src="https://i.imgur.com/2mhe49R.png" alt="venn"/></p>

### União de $n$ conjuntos:

$$
A_1\cup A_2\cup\dots\cup A_n=\bigcup\limits_{i=1}^{n} A_{i}
$$

### Interseção de $n$ conjuntos:

$$
A_1\cap A_2\cap\dots\cap A_n=\bigcap\limits_{i=1}^{n} A_{i}
$$

## Identidade de conjuntos

### Comutatividade

$$
A\cap B=B\cap A\\
A\cup B=B\cup A
$$

### Associatividade

$$
(A\cap B)\cap C=A\cap (B\cap C)\\
(A\cup B)\cup C=A\cup (B\cup C)
$$

### Distributividade

$$
A\cup (B\cap C)=(A\cup B)\cap (A\cup C)\\
A\cap (B\cup C)=(A\cap B)\cup (A\cap C)
$$

### Absorção

$$
A\cup U=U
$$

### Elemento neutro

$$
A\cup\empty=A\\
A\cap U=A
$$

### Complemento

$$
A\cup A'=U\\
A\cap A'=\empty
$$

### Diagramas de Venn para 2 conjuntos

<p align="center"><img src="https://i.imgur.com/j4syrQG.png" alt="venn"/></p>