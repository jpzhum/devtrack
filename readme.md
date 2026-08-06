# DevTrack

O DevTrack é um projeto web em construção para organizar e acompanhar projetos de desenvolvimento. O projeto também funciona como ambiente de aprendizagem prática: cada etapa é planejada, implementada e revisada de forma incremental.

## Problema que o projeto pretende resolver

Informações sobre tarefas, andamento e organização de um projeto podem ficar dispersas. O DevTrack pretende reunir esse acompanhamento em uma interface web, facilitando a visualização do trabalho e de seu progresso.

> O escopo funcional ainda está sendo definido nas Issues. Esta descrição representa a direção do projeto, não um sistema concluído.

## Status atual

O projeto está em fase inicial de desenvolvimento.

- A estrutura inicial do frontend foi criada e integrada em `develop`.
- O frontend ainda preserva elementos do projeto-base e componentes iniciais de aprendizagem.
- A estrutura geral do repositório e a base do backend continuam planejadas nas Issues.
- Não há uma versão estável ou funcionalidade final publicada.

## Participantes e responsabilidades

### Kel

- desenvolvimento e implementação;
- aprendizagem prática;
- autoria das próprias tarefas, commits e soluções.

### João

- mentoria técnica e revisão;
- organização do projeto;
- orientação sobre o fluxo Git;
- suporte no planejamento.

A mentoria e a revisão não transferem para João a autoria do código desenvolvido pela Kel.

## Stack confirmada

Com base no `frontend/package.json`, o projeto usa atualmente:

- React 19;
- TypeScript;
- Vite;
- Oxlint;
- npm para instalação de dependências e execução dos scripts.

O backend ainda não foi iniciado; portanto, nenhuma tecnologia de backend ou banco de dados está definida aqui.

## Estrutura atual

```text
devtrack/
├── frontend/
│   ├── public/              # arquivos públicos do frontend
│   ├── src/                 # código-fonte e recursos do frontend
│   ├── package.json         # dependências e scripts
│   └── vite.config.ts       # configuração do Vite
└── readme.md               # documentação geral do projeto
```

Diretórios como `backend/` e `docs/` ainda não existem e só devem ser adicionados quando as tarefas correspondentes forem executadas.

## Configuração local

### Pré-requisitos

- Node.js compatível com as dependências declaradas pelo projeto;
- npm.

### Executar o frontend

```bash
git clone https://github.com/jpzhum/devtrack.git
cd devtrack
git switch develop
cd frontend
npm install
npm run dev
```

O Vite informará no terminal o endereço local da aplicação.

Scripts disponíveis no frontend:

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # verifica o TypeScript e gera a build
npm run lint     # executa o Oxlint
npm run preview  # serve localmente a build gerada
```

## Fluxo de branches

```text
feature/* → develop → main
```

- `feature/*`: uma branch por tarefa, criada a partir de `develop`;
- `develop`: integra e revisa o trabalho em desenvolvimento;
- `main`: recebe apenas versões consideradas estáveis;
- toda integração deve passar por revisão antes do merge.

Branches exclusivamente documentais podem usar o prefixo `docs/`, mantendo o mesmo destino inicial: `develop`.

## Pull Requests

Cada tarefa deve ser enviada em um Pull Request para `develop`. O PR deve:

- ter escopo pequeno e relacionado a uma Issue;
- explicar o que foi feito e como foi validado;
- indicar a Issue relacionada, quando houver;
- evitar mudanças sem relação com a tarefa;
- aguardar revisão antes do merge.

O template do repositório orienta essas informações. Consulte também o [guia de contribuição](CONTRIBUTING.md).

## Roadmap

O planejamento é acompanhado pelas Issues e pode mudar conforme o aprendizado e as decisões do projeto.

- Concluído: #7 — Criar estrutura inicial do frontend
- Próxima atividade de frontend: #13 — Organizar os componentes iniciais do frontend
- Estrutura e documentação: #8 — Definir estrutura base do repositório
- Backend planejado: #9 — Configurar base inicial do backend
- Infraestrutura do repositório: #10 — Configurar infraestrutura do repositório

As Issues #1 a #5 representam estados de organização do quadro e não entregas funcionais do produto.