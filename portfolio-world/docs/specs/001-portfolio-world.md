# SPEC-001 — Portfólio como lobby de plataforma 2D

Estado: implementada, validação visual pendente.

## Objetivo e escopo

Apresentar Diogo Alves por uma experiência navegável com personagem, lobby central e portas. Não há fases, pontuação, desafios obrigatórios nem bloqueio de conteúdo por habilidade no jogo. Referência: requisitos fornecidos pelo titular nesta conversa.

A implementação inicial precedeu este documento. Esta especificação consolida os requisitos autorizados e serve de base para revisão e próximas alterações; não afirma que os documentos existiam antes do código.

## Requisitos e critérios de aceite

| ID | Requisito | Critério de aceite | Verificação |
| --- | --- | --- | --- |
| R01 | Mundo 2D de plataforma com visual atual | Personagem se move lateralmente, pula e aterrissa em plataformas; arte sem pixelização obrigatória | Testes de física; revisão visual pendente |
| R02 | Lobby principal | Portas Sobre mim, Currículo, Projetos e Contato; acesso por proximidade e E/Enter ou clique | Implementação; teste manual pendente |
| R03 | Lobby de projetos | Porta Projetos troca o lobby; cada porta apresenta um projeto; botão permite voltar | Implementação; teste manual pendente |
| R04 | Personagem nas seções | Continua visível abaixo do conteúdo, com mãos animadas e energia guiada pelo cursor | Implementação; revisão visual pendente |
| R05 | Fluidez | requestAnimationFrame, passo de física limitado a 25 ms, aceleração e desaceleração | Inspeção e testes de limite de velocidade |
| R06 | Dispositivos móveis | Enquadramento acompanha personagem, controles touch com pointer capture | Implementação; teste em viewport móvel pendente |
| R07 | Acesso direto | Navegação permite abrir seções sem jogar; diálogos usam foco e Escape nativos | Implementação; teste de teclado pendente |
| R08 | Informações verdadeiras | Conteúdo baseado no perfil e repositórios públicos; não inventar histórico, clientes ou resultados | Revisão de conteúdo concluída |
| R09 | Currículo | Resumo técnico abre em página imprimível como PDF | Implementação; impressão visual pendente |
| R10 | Laboratório de IA | Demonstração local identificada como regras; nenhuma alegação de agente de IA real | Revisão de conteúdo concluída |
| R11 | GitHub | Código em branch própria; preservar main e arquivos existentes | Publicação pendente |
| R12 | Preferências | Som desligado inicialmente; movimento reduzido desliga efeitos decorativos | Inspeção; teste manual pendente |

## Não incluído

Backend, integração LLM real, credenciais, analytics, autenticação e geração automática de currículo completo. As portas de projetos usam repositórios públicos confirmados. Não há exposição de repositórios privados no conteúdo.

## Estados e fluxo

Lobby principal → proximidade com porta → tecla E/Enter → diálogo ou lobby de projetos.
Lobby de projetos → porta → diálogo de projeto → fechar → mesmo lobby.
Seção aberta → movimento pausado → personagem em telecinese → fechar → retorno ao jogo.

O menu oferece rotas diretas equivalentes. Trocar lobby reposiciona o jogador em ponto seguro. Perda de foco limpa comandos ativos. Entradas desconhecidas no laboratório exibem instruções de cores válidas.

## Evolução orientada por especificação

Antes de alterar comportamento: atualizar ou criar SPEC com requisitos verificáveis. Registrar ADR quando houver decisão estrutural, dependência importante ou alternativa rejeitada. Implementar a menor mudança que cumpre a SPEC, verificar critérios afetados e atualizar o estado sem marcar como testado o que não foi executado.

## Riscos e pendências

Validar visualmente em desktop e celular. O serviço de prévia recusou abertura da porta 4173 com EPERM no ambiente inicial; isso limita a validação, não prova defeito no site. Currículo completo depende de dados adicionais do titular. Fontes externas são opcionais: há fallback local.
