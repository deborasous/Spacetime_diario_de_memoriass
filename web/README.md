# FRONTEND

### Criar a aplicação

O código abaixo vai listar uma série de opções, que nesta aplicação foram todas SIM.

O comando abaixo instala como dependências:
1 - @types/node
2 - @types/react
3 - @types/react-dom
4 - autoprefixer
5 - eslint
6 - eslint-config-next

#### 7 - next

** Trás consigo o Roteamento. Desta forma, tudo o que for colocado dentro do src/app o next entende que são as páginas da aplicação. Para criar uma página, por exemplo: ** Cria uma pasta com o nome login/ e dentro um arquivo page.tsx, cria o componente dentro de page.tsx, colocando o nome Login.... Assim, para acessar essa rota no navegador ... http://localhost:3000/login

\*\* Para rota dentro de rota, exemplo: Login/

8 - postcss
9 - react
10 - react-dom
11 - tailwindcss
12 - typescript

```
npx create-next-app@latest web --use-npm
```

Rodar o projeto:

```
npm run dev
```

### Instala prettier-plugin-tailwindcss

ORDENA AS CLASSES EM ORDEM SEMÂNTICA

Para deixar o código mais bonito.

```
npm i prettier-plugin-tailwindcss -D
```

Depois cria um arquivo na raiz do diretório chamado prettier.config.js

Configura o arquivo (ver dentro do arquivo). Depois CTRL+SHIFT+P e escreve "reload window" e salva, assim todas as classes serão ordenadas em ordem semantica.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
