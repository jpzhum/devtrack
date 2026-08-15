# Visão de produto do DevTrack

> Este documento descreve o estado-alvo. Ele não representa funcionalidades já implementadas.

## Visão

O DevTrack será uma plataforma de crescimento de desenvolvedores baseada em evidências. O produto conectará o que uma pessoa pretende aprender ao que ela constrói, como o trabalho é validado e revisado e quais capacidades técnicas foram demonstradas.

## Princípios

- evidência vale mais do que autorrelato isolado;
- progresso deve ser explicável e apontar evidências presentes e ausentes;
- cada tarefa de aprendizagem introduz um conceito principal;
- a pessoa responsável investiga, implementa, commita e explica a própria solução;
- dados e anotações de aprendizagem são privados por padrão;
- IA pode explicar, questionar e resumir, mas não substitui a autoria da aprendizagem;
- arquitetura só cresce quando requisitos observáveis justificam a complexidade.

## Capacidades-alvo

1. identidade, perfil e controles de privacidade;
2. grafo de habilidades, objetivos e roadmap com pré-requisitos;
3. projetos, itens de trabalho e evidências de entrega;
4. sessões de aprendizagem e cockpit de mentoria;
5. integração GitHub por GitHub App e webhooks verificados;
6. progresso e analytics baseados em evidências;
7. assistente de mentoria com decisões humanas explícitas;
8. perfil público com evidências escolhidas pelo usuário;
9. administração, auditoria, exportação e exclusão de dados.

## Evidência de progresso

O modelo-alvo conecta:

```text
objetivo → marco → objetivo de aprendizagem → Issue → branch → commit
→ Pull Request → revisão e CI → evidência → progresso → próximo objetivo
```

Atividade no GitHub comprova trabalho, não compreensão por si só. Explicação e reaplicação exigem evidência adicional da pessoa aprendiz e, quando aplicável, do mentor.

## Estado atual

O repositório está no nível de maturidade **R0 — Learning Sandbox**:

- frontend inicial em React, TypeScript e Vite;
- colaboração por Issues, branches e Pull Requests;
- componentes iniciais já organizados;
- lint e build disponíveis;
- backend, persistência, autenticação e integrações ainda não iniciados;
- testes automatizados ainda não configurados.

## Não objetivos atuais

Backend, autenticação, banco de dados, GitHub App, analytics, IA, filas, Redis, microserviços, RAG e Kubernetes não fazem parte da próxima tarefa. Esses itens permanecem como direção de produto e só entram em execução por Issue, critérios de ativação e decisão técnica revisada.
