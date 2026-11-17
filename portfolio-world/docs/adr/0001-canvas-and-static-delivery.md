# ADR-0001 — Canvas 2D e distribuição estática

Estado: aceita para a primeira versão.

## Contexto

O portfólio é um jogo de plataforma 2D com quatro portas, animações suaves e seções de conteúdo. Precisa ser leve, publicável no GitHub e funcionar sem serviços externos obrigatórios.

## Decisão

Usar Canvas 2D para cenário e personagens, JavaScript ES modules para lógica e HTML/CSS para conteúdo e navegação. Distribuir `dist` sem etapa de build. Usar requestAnimationFrame e física em módulo separado, com delta limitado.

## Alternativas consideradas

- Phaser: oferece câmera e física prontas, mas aumenta dependências para esta escala de lobby.
- Godot Web: ferramenta forte para jogos, mas introduz exportação, runtime e integração DOM mais complexos para conteúdo do portfólio.
- Elementos DOM para todo o jogo: facilitam semântica, mas tornam desenho articulado e coordenação de cenário mais trabalhosos.

## Consequências

Sem chaves, pacotes de execução ou backend. Conteúdo continua semântico no DOM. Física e câmera são responsabilidade própria; testes e revisão visual são necessários. Se o mundo crescer em complexidade, reavaliar adoção de engine em novo ADR.
