# Boas vindas ao repositório do projeto de adivinhação de Cor!

Projeto desenvolvido como requisito parcial para conclusão do módulo de Fundamentos de Desenvolvimento Web do curso de Desenvolvimento Web da Trybe. Neste projeto, foi desenvolvida uma aplicação utilizando JavaScript, HTML5 e CSS3. Nesta aplicação é possível jogar um jogo de adivinhação de cores e sua pontuação é atualizada de acordo com os acertos.


# Sumário

- [Habilidades](#habilidades)
- [Desenvolvimento](#desenvolvimento)
- [Requisitos do projeto](#requisitos-do-projeto)
  
    `Requisitos obrigatórios:`
    - [1 - Adicione no seu site um título com o nome do seu jogo](#1---adicione-no-seu-site-um-título-com-o-nome-do-seu-jogo)
    - [2 - Adicione um texto com o código RGB a ser adivinhado](#2---adicione-um-texto-com-o-código-rgb-a-ser-adivinhado)
    - [3 - Adicione a página opções de cores para serem adivinhadas](#3---adicione-a-página-opções-de-cores-para-serem-adivinhadas)
    - [4 - Adicione cores nas bolas elas devem ser geradas dinâmicamente](#4---adicione-cores-nas-bolas-elas-devem-ser-geradas-dinâmicamente)
    - [5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto](#5---clicar-em-um-circulo-colorido-deve-ser-mostrado-um-texto-indicando-se-está-correto)
    - [6 - Crie um botão para iniciar/reiniciar o jogo](#6---crie-um-botão-para-iniciarreiniciar-o-jogo)

    `Requisitos bônus:`
    - [7 - Crie um placar que incremente 3 pontos para cada acerto no jogo](#7---crie-um-placar-que-incremente-3-pontos-para-cada-acerto-no-jogo)

---

# Habilidades

- Manipular o DOM.

- Manipular o Javascript.

- Manipular o CSS.

---

## Desenvolvimento

- Desenvolva uma aplicação de um jogo de adivinhação de cores.

---

# Requisitos do projeto

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos!

<p align="center">
  <img
    class="rounded mx-auto d-block"
    src="/guess-the-color.gif"
    alt="Gif exibindo um jogo de adivinhar a cor"
  >
</p>

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

### 👀 Observações importantes:

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

  * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure as pessoas instrutoras.

* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._


---

## Requisitos Obrigatórios:

Neste projeto, você implementará um adivinhador de cor RGB. Ou seja, dada uma string RGB, você irá fornecer 6 alternativas visuais de cores, sendo uma delas a correta! Você poderá estilizar seu projeto da **forma que desejar** desde que todos os requisitos sejam cumpridos. Use sua imaginação! 🧠

---

## Requisitos do projeto

### 1 - Adicione no seu site um título com o nome do seu jogo

**O que será verificado:**

- Será verificado se o **id** do título é `title`.

### 2 - Adicione um texto com o código RGB a ser adivinhado

**O que será verificado:**

- Será verificado se o seu id deve ser rgb-color;

- Será verificado se o texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: `(168, 34, 1)`.

### 3 - Adicione a página opções de cores para serem adivinhadas

**O que será verificado:**

- Será verificado que deve conter 6 circulos como opção de cor de adivinhação;

- Será verificado que a class de todos os circulos deve ser ball.

### 4 - Adicione cores nas bolas elas devem ser geradas dinâmicamente

**O que será verificado:**

- Será verificado que ao carregar a página, as cores de cada um dos 6 circulos coloridos deve ser geradas via JavaScript.

### 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto

**O que será verificado:**

- Será verificado que o seu **id** do elemento deve ser `answer`;

- Será verificado que quando o jogo é iniciado, o texto exibido deve ser `"Escolha uma cor"`;

- Será verificado se o circulo colorido for o **correto**, deve ser exibido o texto "Acertou!";

- Será verificado se o circulo colorido for o **incorreta**, deve ser exibido o texto "Errou! Tente novamente!".

### 6 - Crie um botão para iniciar/reiniciar o jogo

**O que será verificado:**

- Será verificado que o botão deve ter o id reset-game;

- Será verificado que ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento rgb-color deve ser atualizado;

- Será verificado que ao clicar no botão, o elemento answer deve voltar ao estado inicial, exibindo o texto "Escolha uma cor".

## BÔNUS

### 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

**O que será verificado:**

- Será verificado que o elemento deve ter o **id** `score`;

- Será verificado que o valor inicial dele deve ser 0;

- Será verificado que a cada acerto, é incrementado 3 pontos ao placar;

- Será verificado que ao clicar no botão reiniciar, o placar NÃO deve ser resetado.

---

