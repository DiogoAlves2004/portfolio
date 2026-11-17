# Diogo World

Portfólio de Diogo Alves em um lobby 2D de plataforma. Arte vetorial desenhada em Canvas, animação com requestAnimationFrame e física independente da taxa de quadros. Sem dependências de execução ou chaves de API.

## Executar

Sirva a pasta `dist` por HTTP (módulos JavaScript não funcionam abrindo o arquivo diretamente):

```sh
python3 -m http.server 8080 --directory dist
```

Abra http://localhost:8080. Para hospedar, publique `dist` em qualquer hospedagem estática. Em GitHub Pages, use essa pasta como artefato de implantação.

## Controles

- Setas ou A/D: mover; espaço, W ou seta para cima: pular.
- E ou Enter: entrar na porta próxima; também é possível clicar nas portas.
- Escape: fechar seção; no lobby dos projetos, voltar ao principal.
- Celular: botões de movimento, salto e interação na tela.
- Menu superior: acesso direto às seções sem jogar.
- Som opcional, desligado inicialmente. Preferência de movimento reduzido respeitada nos efeitos decorativos.

## Conteúdo

Edite `dist/app.js` para atualizar textos, projetos, portas e links. `dist/curriculo.html` é um resumo técnico imprimível como PDF. Empresas, datas e formação não foram inventadas; precisam ser preenchidas pelo titular.

O laboratório de telecinese interpreta cores por regras locais. Não é uma integração real com um modelo de IA. O site não envia os comandos a servidores.

## Verificação

```sh
npm run check
npm test
```

A física tem testes para colisão, aterrissagem em plataformas, limites do mapa e salto sem repetição involuntária.

## SDD e ADR

Os requisitos, critérios de aceite e decisões estão em [docs/README.md](docs/README.md). A SPEC-001 registra também as verificações ainda pendentes, sem tratar inspeção de código como teste visual concluído.
