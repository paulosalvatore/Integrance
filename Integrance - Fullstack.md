# Fullstack

Minha sugestão de stack de tecnologia:

- Node JS
- JavaScript
  - Boas práticas
  - Prettier, eslint, husky, lintstaged
- TypeScript
- Frontend
  - Angular
    - Componentes
    - Services
    - Modules
    - Sass
    - Requisições HTTP
    - RxJS
- Backend
  - Nest
    - CRUD
    - CLI
    - Validation
    - Auth
    - Com algum DB/ORM simples

## Softwares utilizados

- **IDE:** VSCode
- **HTTP Request:** Postman/Insomnia/Thunder Client

## Comandos Nodemon

```bash
npm i -D nodemon
```

Quando quisermos rodar algo global, usar `npx`:

```
npx nodemon
```

**Contra:** `npx` depende da internet:

## Rodar aplicação

Aplicação em modo "produção":

```bash
npm start
```

Aplicação em modo "desenvolvimento":

```bash
npm run dev
```

Backend sempre deve devolver resultados em JSON.

## PM2

Para ambientes em produção, usar o `pm2`:

- https://www.npmjs.com/package/pm2

## Status Code

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

## Linguagem compilada vs linguagem interpretada

**Linguagem compilada:** C#, Java, C++, C, Kotlin com Java, etc

Determinar os tipos em build time (tempo de compilação)

**Build/Compilar:** transforma código em arquivo binário

**Run:** execução do código binário



**Linguagem interpretada:** JavaScript, Python, etc

Determinar os tipos em run time (tempo de execução)

**Run/Interpretar:** um software irá ler e interpretar nosso código para executar em alguma outra linguagem.

### NodeJS

É um software, que funciona como um motor (engine), escrito em C++, com o objetivo de interpretar códigos JavaScript.

### TypeScript

**Transpile:** quase igual ao compilar, mas significa transformar uma linguagem em outra

O que roda na prática é sempre JavaScript. O TypeScript só está presente durante o desenvolvimento para auxiliar quem está desenvolvendo a aplicação a entender os tipos de cada informação.

Além disso, ele também tentar forçar os tipos das variáveis (mas forçar o tipo é opcional).

Podemos ignorar o TypeScript com:

- Tipagem `any`
- `//@ts-ignore`

**Tempo de transpile/build:** TypeScript/Motor do TypeScript

**Tempo de execução/run:** JavaScript

## Atalhos

`Ctrl + .`: Auto complete no VSCode

## Dúvidas

### Tratamento de body

Tratamento na própria rota (?)

