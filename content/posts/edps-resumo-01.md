---
path: "/blog/edps-resumo-01"
date: "2020-10-19"
language: "pt-BR"
author: "Cássio Fernando"
title: "EDPS | Resumo 01"
description: "Primeiro resumo do curso de equações diferenciais parciais e séries."
metaImage: "https://i.imgur.com/v5z0p2r.png"
tags: ["bcc", "edps"]
---
Cássio aqui. Nesse período de quarentena as aulas serão online, e aproveitando esse tempo disponível resolvi fazer um resumo desse [curso de EDPS ministrado pela professora Gisely Pereira](https://giselypereira.com/edps/).

# Resumo 01

## Sequências numéricas

### Definição

Uma lista de números que **obedecem uma ordem determinada**: $f:\natnums^*\mapsto\reals$ de forma que: $n\mapsto f(n)=a_n$.

### Notação

Representadas como: $(a_n)_{n\in \natnums^*}$ ou $(a_n)_{n=1}^\infin$ ou simplesmente $(a_n)$.
$$
(a_n)=(a_1,a_2,a_3,a_4,\dots,a_n,\dots)
$$

### Convergência

Se $\lim\limits_{x\to\infin}f(x)=L$ dizemos que a sequência $(a_n)$ converge para $L$ se não, dizemos que $(a_n)$ diverge.

Se $(a_n)\to A$ podemos dizer que a sequência $(a_n)$ converge para $A$ e se $(b_n)\to B$ podemos dizer que a sequência $(b_n)$ converge para $B$.

### Propriedades

Se $(a_n)\to A$ e $(b_n)\to B$ então:

 1. $\lim\limits_{n\to+\infin}(a_n+b_n)=A+B$
 2. $\lim\limits_{n\to+\infin}(a_n-b_n)=A-B$
 3. $\lim\limits_{n\to+\infin}(k\cdot a_n)=k\cdot A, k\in \reals$
 4. $\lim\limits_{n\to+\infin}(a_n\cdot b_n)=A\cdot B$
 5. $\lim\limits_{n\to+\infin}(\dfrac{a_n}{b_n})=\dfrac{A}{B}, B \not = 0$

### Classificação

 1. crescente: $a_n<a_{n+1}$
 2. não decrescente: $a_n\le a_{n+1}$
 3. decrescente: $a_n<a_{n+1}$
 4. não crescente $a_n\ge a_{n+1}$

Se $(a_n)$ estar nesses casos, podemos dizer que ela é monótona.

### Teoremas

 1. Se $(a_n)$ for monótona e limitada então $(a_n)$ é convergente.
 2. Se $f$ é continua em $x=L$ e $a_n\to L$ então: $f(a_n)\to f(L)$
 3. Teorema do confronto: Se $a_n\to L, c_n\to L$ e $a_n\le b_n\le c_n$ então $b_n\to L$

## Ordem de Crescimento

Ferramenta para calcular operações entre funções (ex: limites) através de comparações: $c<\log_{a}n<n^c<a^n<n!<n^n$ onde $c,k$ são constantes e $a>1$.

## Exemplo

Determine se $\Big((n+\pi )^{\frac{1}{n}}\Big)$ converge ou diverge.

### Analisando o limite de $(a_n)$
$$
(a_n)=(n+\pi )^{\frac{1}{n}}\\
\lim\limits_{n\to \infin}a_n=\lim\limits_{n\to \infin}(n+\pi )^{\frac{1}{n}}
$$

Lembrando que $n\in \natnums^*$ então para poder usar todas as propriedades dos reais temos que tomar:
$$
f(x)=(x+\pi )^{\frac{1}{x}}, x\in \reals
$$

Agora sim analisando o limite:
$$
\lim\limits_{x\to \infin}f(x)=\lim\limits_{x\to \infin}(x+\pi )^{\frac{1}{x}}
$$

Manipulando o limite:

$=\lim\limits_{x\to\infin}e^{\ln((x+\pi)^{\frac{1}{x}})}$

$=e^{\lim\limits_{x\to\infin}(\ln((x+\pi)^{\frac{1}{x}}))}$

Analisando o limite do expoente:

$\lim\limits_{x\to\infin}\big(\ln((x+\pi)^{\frac{1}{x}})\big)$

$=\lim\limits_{x\to\infin}\big(\frac{1}{x}\ln(x+\pi)\big)$

$=\lim\limits_{x\to\infin}\big(\frac{\ln(x+\pi)}{x}\big)$

Usando a regra de L'Hospital:

$=\lim\limits_{x\to\infin}\frac{1}{x+\pi}=0$

Substituindo no expoente:

$e^0=1 \implies \lim\limits_{n\to \infin}a_n=1$

logo a série converge para 1.
