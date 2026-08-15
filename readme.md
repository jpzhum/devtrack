# DevTrack

[![Frontend CI](https://github.com/jpzhum/devtrack/actions/workflows/frontend-ci.yml/badge.svg?branch=develop)](https://github.com/jpzhum/devtrack/actions/workflows/frontend-ci.yml)

O DevTrack é um projeto incremental de aprendizagem e uma futura plataforma de crescimento de desenvolvedores baseada em evidências. O repositório conecta prática técnica, Issues, autoria, revisão e validação sem apresentar o roadmap futuro como funcionalidade pronta.

## Estado atual

O projeto está em **R0 — Learning Sandbox**.

- M0 — colaboração e Git: concluído;
- M1 — fundamentos e organização de componentes: concluído;
- [M2 — props tipadas e fluxo pai → filho](https://github.com/jpzhum/devtrack/issues/29): próximo objetivo;
- frontend inicial em React, TypeScript e Vite;
- lint e build disponíveis e protegidos por CI após a integração deste workflow;
- automated tests: not configured;
- backend, banco de dados, autenticação, API e deploy: não implementados.

A direção futura está documentada em [Visão de produto](docs/PRODUCT_VISION.md), [Roadmap de aprendizagem](docs/LEARNING_ROADMAP.md) e [Arquitetura-alvo](docs/ARCHITECTURE_TARGET.md). Decisões técnicas concretas serão registradas em [ADRs](docs/adr/README.md).

## Responsabilidades

### Kel — implementação das tarefas de aprendizagem

- investiga e implementa a própria solução;
- cria seus commits e Pull Requests;
- executa validações e explica os conceitos trabalhados.

### João — mentoria e governança

- organiza Issues, roadmap e infraestrutura;
- orienta o fluxo Git e revisa Pull Requests;
- usa perguntas e pistas progressivas sem substituir a autoria da Kel.

IA e outras ferramentas podem apoiar pesquisa, explicação e revisão. Elas não implementam a tarefa de aprendizagem no lugar da pessoa responsável.

## Stack implementada

- React 19;
- TypeScript;
- Vite;
- Oxlint;
- npm.

FastAPI, PostgreSQL e outras tecnologias citadas na arquitetura são direção-alvo, não dependências atuais.

## Estrutura

```text
devtrack/
├── .github/
│   ├── ISSUE_TEMPLATE/     # modelos operacionais de Issues
│   └── workflows/          # CI do frontend
├── docs/
│   ├── adr/                # decisões arquiteturais futuras
│   ├── ARCHITECTURE_TARGET.md
│   ├── LEARNING_ROADMAP.md
│   └── PRODUCT_VISION.md
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
├── .gitignore
├── CONTRIBUTING.md
└── readme.md
```

Não existe pacote npm na raiz. O lockfile válido pertence exclusivamente a `frontend/`.

## Executar localmente

Pré-requisito: Node.js `^20.19.0` ou `>=22.12.0`. A CI usa Node.js 24.

```bash
git clone https://github.com/jpzhum/devtrack.git
cd devtrack
git switch develop
cd frontend
npm ci
npm run dev
```

Validações atuais:

```bash
cd frontend
npm ci
npm audit
npm run lint
npm run build
```

## Fluxo de contribuição

```text
branch de tarefa → Pull Request para develop → revisão → merge
develop → Pull Request de release → main
```

- `feature/*`: implementação de produto ou aprendizagem;
- `docs/*`: documentação;
- `chore/*`: infraestrutura e governança;
- `develop`: integração revisada;
- `main`: releases estáveis.

Consulte [CONTRIBUTING.md](CONTRIBUTING.md) antes de iniciar uma tarefa.

## Planejamento

Issues representam trabalho; o campo `Status` do GitHub Project representa `Backlog → Ready → In Progress → In Review → Done`. Apenas o próximo conceito de aprendizagem recebe escopo operacional detalhado. O restante permanece no roadmap e nos [epics de produto](https://github.com/jpzhum/devtrack/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22type%3A%20epic%22) para evitar tarefas futuras obsoletas.
