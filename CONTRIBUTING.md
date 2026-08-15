# Como contribuir

O DevTrack usa contribuições pequenas, rastreáveis e revisáveis. Toda mudança começa em uma Issue com escopo e critérios de aceite coerentes com o estado atual do repositório.

## Antes de começar

1. Confirme a Issue e sua responsabilidade.
2. Verifique objetivo, fora de escopo e validação.
3. Atualize sua branch local a partir de `develop`.
4. Crie uma branch exclusiva para a tarefa.

Prefixos:

- `feature/<descricao-curta>` para implementação;
- `docs/<descricao-curta>` para documentação;
- `chore/<descricao-curta>` para infraestrutura e governança.

Tarefas futuras que ainda não possuem pré-requisitos permanecem no roadmap ou em epics; não crie implementação antecipada.

## Durante a tarefa

- mantenha o diff dentro do escopo da Issue;
- preserve a autoria da pessoa responsável;
- faça commits claros e focados;
- não versione dependências instaladas, builds, arquivos locais ou segredos;
- registre decisões técnicas duráveis em ADR quando necessário;
- execute as validações aplicáveis e interprete eventuais falhas.

Para alterações no frontend:

```bash
cd frontend
npm ci
npm audit
npm run lint
npm run build
```

automated tests: not configured

Não introduza uma suíte de testes apenas para alterar esse registro; testes entram por uma tarefa própria quando houver comportamento que justifique protegê-los.

## Pull Request e revisão

Abra o Pull Request para `develop` e preencha o template. O PR deve:

- vincular a Issue correspondente;
- explicar o que mudou e o que ficou fora do escopo;
- registrar comandos e resultados de validação;
- aguardar revisão antes do merge;
- receber correções na mesma branch pela pessoa responsável.

Releases estáveis são promovidas por Pull Request de `develop` para `main`. Push direto e force-push não fazem parte do fluxo normal.

## Aprendizagem e autoria

A pessoa responsável por uma tarefa de aprendizagem investiga, implementa, commita e explica sua solução. O mentor cuida de planejamento, perguntas, pistas progressivas, revisão e governança.

IA pode apoiar pesquisa, explicação, preparação de sessão e revisão. Ela não deve gerar ou commitar a solução da tarefa de aprendizagem no lugar da pessoa responsável.
