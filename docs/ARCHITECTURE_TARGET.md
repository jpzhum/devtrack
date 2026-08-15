# Arquitetura-alvo do DevTrack

> Arquitetura-alvo não é arquitetura implementada. Toda ativação futura exige uma Issue, critérios verificáveis e, quando a decisão for durável, um ADR.

## Baseline atual

- frontend: React, TypeScript, Vite e Oxlint;
- instalação: npm com lockfile em `frontend/`;
- validação: lint e build;
- backend, banco de dados, autenticação, filas e integrações: não implementados;
- testes automatizados: não configurados.

## Estratégia

O sistema deve permanecer um monólito modular até que requisitos mensuráveis de escala, implantação ou propriedade justifiquem uma extração. Qualidade significa fronteiras claras, testes proporcionais, observabilidade e segurança — não quantidade de serviços.

## Direção técnica

| Camada | Direção | Condição de ativação |
| --- | --- | --- |
| frontend | React + TypeScript + Vite | já estabelecido; evoluir progressivamente |
| rotas | React Router ou equivalente | múltiplas telas reais exigirem navegação |
| estado remoto | TanStack Query ou equivalente | backend e problemas repetidos de cache/invalidação existirem |
| API | FastAPI + Pydantic | marco explícito de backend |
| persistência | PostgreSQL | domínio persistente e contratos de dados definidos |
| ORM e migrações | SQLAlchemy 2 + Alembic | junto da persistência relacional |
| autenticação | sessão segura gerenciada pelo servidor | requisitos de identidade e autorização definidos |
| GitHub | GitHub App + webhooks assinados | modelo de evidência e permissões aprovados |
| trabalho assíncrono | primeiro no processo; worker depois | retries, latência ou durabilidade exigirem execução independente |
| observabilidade | logs estruturados, depois OpenTelemetry | conforme novas fronteiras operacionais surgirem |

## Fronteiras futuras do backend

- `identity`: usuários, sessões, associação e permissões;
- `learning`: habilidades, conceitos, pré-requisitos e roadmap;
- `projects`: projetos, itens de trabalho, marcos e releases;
- `evidence`: evidências normalizadas e suas relações com habilidades;
- `integrations.github`: instalação, webhooks e cliente GitHub;
- `analytics`: snapshots, agregações e consultas de leitura;
- `ai`: adaptador de provedor e recomendações estruturadas.

Detalhes de provedor não devem vazar para as regras de negócio. Analytics não altera fontes de verdade, e IA não faz mudanças de código ou progresso sem decisão humana explícita.

## Gates de complexidade

- Redis somente quando várias instâncias precisarem de coordenação compartilhada;
- worker somente quando tarefas exigirem retries ou durabilidade fora da requisição;
- microserviços somente quando uma fronteira tiver escala, implantação ou propriedade independente;
- RAG ou banco vetorial somente para um caso de recuperação validado que dados estruturados não resolvam;
- Kubernetes somente quando a operação realmente se beneficiar da complexidade de orquestração.

## Segurança e privacidade

- autorização no servidor para todo recurso protegido;
- cookies `HttpOnly` e `Secure` em produção, com proteção CSRF adequada;
- segredos somente em ambiente ou gerenciador de segredos;
- webhooks assinados, idempotentes e auditáveis;
- evidências e notas privadas por padrão;
- exportação e exclusão de dados como capacidades de produção;
- nenhum token, código privado ou conteúdo sensível em logs e telemetria.
