# ADR-0002 — Lobby livre e personagem persistente

Estado: aceita.

## Contexto

O titular rejeitou fases e pediu um lobby com portas, outro lobby para projetos e personagem na base das seções controlando o mouse com telecinese.

## Decisão

Separar navegação em estados de lobby principal, lobby de projetos e diálogo de conteúdo. Manter o mesmo desenho do personagem no mundo e no diálogo. A telecinese acompanha o cursor por efeitos visuais; não move nem captura o cursor do sistema.

Portas podem ser abertas por teclado, clique direto ou navegação superior. A movimentação é pausada enquanto o diálogo está aberto. Diálogo HTML nativo oferece foco modal e fechamento por Escape. Controles touch e câmera horizontal atendem telas estreitas.

## Alternativas consideradas

- Fases com progressão: rejeitada pelo titular.
- Conteúdo acessível só por saltos: adiciona barreira para recrutadores e pessoas que não jogam.
- Personagem removido ao abrir conteúdo: perde continuidade solicitada.

## Consequências

Experiência lúdica sem conteúdo bloqueado. Renderização em Canvas exige navegação DOM equivalente. Movimento reduzido conserva ações necessárias e remove animações decorativas.
