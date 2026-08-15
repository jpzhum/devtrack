# Frontend do DevTrack

Este diretório contém a fundação atual do DevTrack em React, TypeScript e Vite. A interface ainda é um ambiente de aprendizagem inicial; o roadmap futuro não representa funcionalidade implementada.

## Pré-requisito

Node.js `^20.19.0` ou `>=22.12.0`.

## Comandos

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

- `npm ci`: instala exatamente as versões registradas no lockfile;
- `npm run dev`: inicia o servidor local do Vite;
- `npm run lint`: executa o Oxlint;
- `npm run build`: verifica TypeScript e gera o build de produção;
- `npm run preview`: serve o build localmente.

automated tests: not configured

## Estrutura atual

```text
frontend/
├── public/          # arquivos públicos
├── src/
│   ├── assets/      # imagens e outros recursos estáticos
│   ├── componentes/ # componentes React atuais
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── package-lock.json
└── vite.config.ts
```

Consulte o [roadmap de aprendizagem](../docs/LEARNING_ROADMAP.md) e o [guia de contribuição](../CONTRIBUTING.md). A implementação de cada tarefa de aprendizagem pertence à pessoa responsável por ela.
