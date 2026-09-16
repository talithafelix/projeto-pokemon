# 🎮 Projeto Pokémon

Um site que consome a [PokéAPI](https://pokeapi.co/) para exibir informações de Pokémons, com busca por nome, sorteio aleatório, troca de tema visual e uma lista completa de Pokémons.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📖 Sobre o projeto

Este é um projeto pessoal de estudo, criado para praticar consumo de APIs, manipulação do DOM e organização de código em JavaScript puro (sem frameworks). Ele utiliza a PokéAPI para buscar dados reais de Pokémons, como nome, altura, peso, habilidades e sprites.

O site é dividido em duas páginas principais:

- **`index.html`** — página inicial, com busca de Pokémon por nome, sorteio aleatório e um "GIF" no cabeçalho que troca de Pokémon a cada segundo.
- **`pokemons.html`** — página com uma lista de Pokémons (atualmente carregando os 300 primeiros da API).

---

## ✅ Funcionalidades atuais

- 🔍 **Busca por nome**: digite o nome de um Pokémon e veja seus dados (altura, peso e habilidades).
- 🎲 **Sorteio aleatório**: botão que sorteia um Pokémon entre os 300 primeiros e exibe suas informações.
- 🖼️ **GIF automático no cabeçalho**: troca a imagem de um Pokémon aleatório a cada segundo, usando os sprites da geração Scarlet/Violet.
- 🎨 **Troca de tema**: alterna entre uma paleta de cores "Pastel" e uma "Vibrante", salvando a preferência no `localStorage` para manter o tema entre visitas.
- ⌨️ **Busca via tecla Enter**: é possível buscar um Pokémon pressionando Enter no campo de texto, sem precisar clicar no botão.
- 🖼️ **Fallback de imagem**: caso o sprite de um Pokémon não seja encontrado, uma imagem padrão (Pokébola) é exibida no lugar.
- 📃 **Lista de Pokémons** (`pokemons.html`): carrega e exibe informações básicas dos 300 primeiros Pokémons da API.

---

## 🚧 Em desenvolvimento / Próximos passos

Este projeto **ainda não está finalizado**. Os principais pontos pendentes são:

- [ ] **Corrigir a página de lista (`pokemons.html`)**:
  - O **layout** ainda não está adequado — os cards estão sendo exibidos sem o estilo correto e sem exibir a imagem/sprite de cada Pokémon.
  - O **funcionamento** precisa de ajustes — a imagem do sprite não está sendo carregada (a chamada para buscar a imagem está comentada no código) e as habilidades de cada Pokémon ainda não são exibidas na lista.
  - As 300 requisições feitas em sequência deixam o carregamento da página lento; a ideia é otimizar isso futuramente (ex: paginação ou requisições em lote).
- [ ] Adicionar tratamento de erros mais robusto na página de lista.
- [ ] Revisar responsividade em telas menores.
- [ ] Possível adição de filtros (por tipo, geração, etc.) na lista de Pokémons.

Contribuições, sugestões e feedbacks são bem-vindos!

---

## 🗂️ Estrutura do projeto

```
├── index.html        # Página inicial (busca, sorteio, gif e troca de tema)
├── index.js           # Lógica de busca, sorteio e gif automático
├── tema.js             # Lógica de troca de tema (claro/pastel <-> vibrante)
├── pokemons.html   # Página com a lista de Pokémons
├── pokemons.js      # Lógica de carregamento da lista (em correção)
├── style.css           # Estilos e paletas de cores do projeto
└── README.md
```

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3** (variáveis CSS para os temas de cores)
- **JavaScript** (Vanilla JS, com `fetch`, `async/await` e módulos ES)
- **[PokéAPI](https://pokeapi.co/)** — fonte dos dados dos Pokémons
- **Google Fonts** (fonte "Pixelify Sans" para dar um visual retrô ao projeto)

---

## ▶️ Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/talithafelix/projeto-pokemon/tree/V2
   ```
2. Abra o arquivo `index.html` em um navegador (recomenda-se usar uma extensão como o **Live Server** do VS Code, já que o projeto usa módulos JavaScript e faz requisições a uma API externa).
3. Para acessar a lista de Pokémons, clique no botão **"Lista de pokemons"** na página inicial ou abra diretamente o `pokemons.html`.

---

## 📌 Observações

Este é um projeto em constante evolução, feito com fins de aprendizado. Feedbacks são muito bem-vindos! 😄
