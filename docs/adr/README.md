# Registros de decisão arquitetural

ADRs registram decisões técnicas duráveis quando existem alternativas relevantes, consequências operacionais ou um custo real de reversão. Não são necessários para ajustes triviais nem para tecnologias que permanecem apenas como direção futura.

## Convenção

- arquivo: `NNNN-titulo-curto.md`;
- estados: `Proposed`, `Accepted`, `Superseded` ou `Deprecated`;
- proposta criada em branch de tarefa e revisada por Pull Request;
- uma decisão aceita não é reescrita para esconder a história;
- uma mudança posterior cria outro ADR e referencia o anterior.

Nenhum ADR de backend está aceito neste momento. FastAPI, PostgreSQL e as demais tecnologias descritas na arquitetura-alvo ainda dependem de ativação explícita.

## Modelo

```markdown
# ADR-NNNN — Título

- Status: Proposed
- Data: AAAA-MM-DD

## Contexto

Qual problema exige uma decisão durável?

## Decisão

O que foi escolhido e por quê?

## Alternativas consideradas

Quais alternativas plausíveis foram avaliadas?

## Consequências

Quais efeitos positivos, negativos e operacionais são esperados?

## Ativação e rollback

Como ativar, verificar e reverter a decisão?

## Condição de revisão

Qual evidência justificará revisitar a decisão?
```
