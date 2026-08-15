# Roadmap progressivo de aprendizagem

## Regra operacional

Somente o próximo objetivo de aprendizagem deve virar uma Issue detalhada. Estágios posteriores permanecem neste roadmap ou em epics até que os pré-requisitos sejam demonstrados.

Estados usados:

- **DONE**: evidência integrada e revisada;
- **NEXT**: próximo conceito operacionalizado;
- **FUTURE**: direção ainda não iniciada;
- **TARGET**: capacidade avançada dependente de necessidade real.

## Marcos

| Marco | Foco | Resultado | Estado |
| --- | --- | --- | --- |
| M0 | colaboração e Git | branch, commit, push, PR e revisão | DONE |
| M1 | fundamentos de componentes | JSX, import/export e organização | DONE |
| M2 | fluxo de dados tipado | props, pai/filho e contrato TypeScript | NEXT |
| M3 | coleções | arrays, objetos, `.map()` e `key` | FUTURE |
| M4 | estado e eventos | `useState`, eventos e UI derivada | FUTURE |
| M5 | formulários | inputs controlados e validação básica | FUTURE |
| M6 | shell da aplicação | rotas, layouts e estados de tela | FUTURE |
| M7 | arquitetura frontend | fronteira de dados e estados remotos | FUTURE |
| M8 | backend | HTTP, FastAPI, Pydantic e contratos | FUTURE |
| M9 | persistência | PostgreSQL, SQLAlchemy e migrações | FUTURE |
| M10 | identidade | autenticação, sessão e autorização | FUTURE |
| M11 | domínio principal | projetos, tecnologias e objetivos | FUTURE |
| M12 | roadmap e evidência | pré-requisitos e progresso explicável | FUTURE |
| M13 | integração GitHub | GitHub App, webhooks e normalização | FUTURE |
| M14 | analytics | agregações e painéis de evidência | FUTURE |
| M15 | testes em profundidade | unidade, integração, componente e E2E | FUTURE |
| M16 | mentor por IA | contratos, limites e avaliação | FUTURE |
| M17 | hardening | segurança, observabilidade e resiliência | FUTURE |
| M18 | implantação | contêineres, CI/CD e rollback | FUTURE |
| M19 | plataforma avançada | busca, notificações e perfil público | TARGET |

## Próximo objetivo: M2 — Issue #29

O objetivo operacional está na Issue [#29 — Criar componente reutilizável com props tipadas](https://github.com/jpzhum/devtrack/issues/29): evoluir de componentes estáticos para um componente reutilizável que recebe dados tipados do componente pai.

Dentro do escopo:

- props;
- fluxo de dados pai → filho;
- contrato de props em TypeScript;
- o mesmo componente usado com pelo menos dois valores diferentes;
- lint, build, commit próprio e Pull Request para `develop`;
- explicação da implementação pela Kel.

Fora do escopo:

- `.map()` e arrays como abstração principal;
- `useState`, hooks, eventos ou formulários;
- router;
- API, backend ou persistência;
- redesign visual.

## Evidência de aprendizagem

| Nível | Evidência |
| --- | --- |
| E0 | objetivo apenas planejado |
| E1 | tentativa iniciada em uma tarefa própria |
| E2 | artefato funcional implementado |
| E3 | critérios e validações aprovados |
| E4 | revisão concluída e correções respondidas |
| E5 | conceito explicado sem leitura de solução pronta |
| E6 | conceito reaplicado corretamente em outro contexto |

Uma tarefa de aprendizagem só está pronta quando seu escopo foi atendido, as validações aplicáveis passam, a pessoa responsável explica o caminho principal e seu próprio commit e PR preservam a autoria.
