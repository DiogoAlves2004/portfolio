# ADR-0003 — Conteúdo verificável e limite do experimento de IA

Estado: aceita para a primeira versão.

## Contexto

Há perfil GitHub e projetos públicos confirmados, mas não foi fornecido currículo completo nem backend de agentes.

## Decisão

Usar apenas experiência técnica confirmada no README público do titular. Apresentar os repositórios públicos d-movies e new-garden sem inventar funcionalidades ou métricas. Oferecer resumo técnico imprimível; identificar informações profissionais ainda não preenchidas.

O laboratório reconhece cores por regras locais e informa essa limitação explicitamente. Não incluir chaves no frontend. Uma futura integração de agente real exige nova SPEC e ADR para backend, contrato de ferramentas, limites de execução, falhas e proteção de credenciais.

## Alternativas consideradas

- Simular respostas como se viessem de IA: rejeitada por induzir visitantes a erro.
- Chamar modelo diretamente no frontend: rejeitada por expor credenciais.
- Inventar trajetória para preencher currículo: rejeitada por falta de evidência.

## Consequências

Primeira versão funciona sem custos de API ou envio de mensagens a terceiros. O laboratório não demonstra um agente real e isso é declarado na interface e no README.
