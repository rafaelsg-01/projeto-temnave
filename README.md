# 🚀 Tem Nave - Jogo de Nave Espacial

Um jogo de nave espacial desenvolvido em HTML5 Canvas com JavaScript puro. Controle sua nave, destrua asteroides e sobreviva o maior tempo possível!

## 🎮 Como Jogar

### Controles Desktop
- **W-A-S-D**: Movimenta a nave
- **Mouse**: Mira e atira
- **Shift**: Ativa o nitro
- **Ctrl + Scroll**: Ajusta o tamanho do mapa
- **F11**: Tela cheia

### Controles Mobile
- **Joystick Esquerdo**: Movimenta a nave
- **Joystick Direito**: Mira e atira
- **Botão de Tela Cheia**: Ativa o modo tela cheia

## 🎯 Objetivo

O objetivo principal é completar o maior número de fases possível! Cada fase completada aumenta a dificuldade e a recompensa. Seu progresso é salvo automaticamente e você pode competir com jogadores de todo o mundo através do sistema de ranking global.

## 🌟 Características

- 🎯 Sistema de mira e tiro preciso
- 💨 Sistema de nitro com rastro visual
- 💰 Sistema de recompensas por destruir asteroides
- 🏆 Ranking global de jogadores
- 🛒 Loja de melhorias para sua nave
- 📱 Suporte completo para dispositivos móveis
- 🎮 Dois modos de jogo: Teletransporte e Quicado
- 🔊 Sistema de som com controle de volume
- 🌌 Efeitos visuais impressionantes

## 🛠️ Melhorias Disponíveis

- **Cadência de Tiro**: Aumenta a velocidade de disparo
- **Velocidade do Tiro**: Aumenta a velocidade dos projéteis
- **Tamanho do Tiro**: Aumenta o tamanho dos projéteis
- **Recarga do Nitro**: Aumenta a velocidade de recarga
- **Capacidade do Nitro**: Aumenta a quantidade máxima de nitro

## 🎨 Design

- Interface moderna e intuitiva
- Cores neon com tema espacial
- Efeitos visuais dinâmicos
- Animações suaves
- Design responsivo para todos os dispositivos

## 🚀 Tecnologias Utilizadas

- HTML5 Canvas
- JavaScript Vanilla
- CSS3
- LocalStorage para salvar progresso
- API REST para ranking global
- Cloudflare Pages para hospedagem
- Cloudflare Workers para API do ranking

## 📱 Compatibilidade

- Desktop (Chrome, Firefox, Safari, Edge)
- Mobile (Android, iOS)
- Tablets
- Requer orientação paisagem em dispositivos móveis

## 🔗 Links

- [Jogar Online](https://temnave.pages.dev)
- [Repositório GitHub](https://github.com/rafaelsg-01/projeto-temnave)

## 👨‍💻 Desenvolvido por

[@rafaelsg-01](https://github.com/rafaelsg-01)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🧠 Lógica do Jogo

### Sistema de Progressão
- **Fases**: O jogo é dividido em fases, cada uma mais desafiadora que a anterior
- **Asteroides**: A quantidade de asteroides aumenta com a fase atual (wave + 4)
- **Recompensas**: A recompensa por fase aumenta exponencialmente (50% a cada fase)
- **Dificuldade**: A velocidade dos asteroides aumenta gradualmente com a fase

### Mecânicas de Jogabilidade
- **Movimentação**: 
  - Velocidade base: 4 unidades/quadro
  - Nitro: Aumenta para 8 unidades/quadro
  - Controles suaves e responsivos

- **Sistema de Tiro**:
  - Cadência inicial: 1000ms (1 tiro por segundo)
  - Velocidade inicial: 8 unidades/quadro
  - Tamanho inicial: 6 pixels
  - Mira precisa com o mouse/joystick

- **Nitro**:
  - Capacidade inicial: 100 unidades
  - Dreno: 0.5 unidades/quadro
  - Recarga: 0.05 unidades/quadro
  - Efeito visual de rastro

### Sistema de Melhorias
- **Progressão Gradual**:
  - Cadência: Diminui 30ms por nível (mínimo 200ms)
  - Velocidade: Aumenta 2 unidades por nível
  - Tamanho: Aumenta 8 pixels por nível
  - Nitro: Capacidade aumenta 50 unidades por nível
  - Recarga: Aumenta 0.05 unidades por nível

- **Preços**:
  - Aumentam exponencialmente após o nível 10
  - Baseados em uma tabela de preços inicial
  - Multiplicador de 2x a cada nível após o 10

### Balanceamento
- **Mobile vs Desktop**:
  - Mobile: 25% dos asteroides do desktop
  - Desktop: 50% dos asteroides originais
  - Interface adaptativa

- **Modos de Jogo**:
  - Teletransporte: Asteroides reaparecem do lado oposto
  - Quicado: Asteroides ricocheteiam nas bordas

### Sistema de Pontuação
- **Recompensas por Asteroide**:
  - Base: Tamanho do asteroide / 5
  - Multiplicador de fase: 1 + (fase * 0.2)
  - Bônus de melhorias: 1 + (total de níveis * 0.1)

- **Ranking Global**:
  - Baseado no nível máximo alcançado
  - Atualizado em tempo real
  - Persistente entre sessões

### Otimizações
- **Performance**:
  - Canvas otimizado para renderização
  - Sistema de partículas eficiente
  - Gerenciamento de memória com limpeza de objetos

- **Persistência**:
  - Dados salvos localmente
  - Progresso mantido entre sessões
  - Sincronização com ranking global

### Detalhes Técnicos
- **API**:
  - Endpoint: `https://temnave-api-work.projetobot.workers.dev`
  - Métodos: POST para scores, GET para ranking
  - Resposta em JSON

- **Armazenamento**:
  - LocalStorage para dados do jogador
  - Cookies para preferências
  - Cache para assets

- **Segurança**:
  - IDs únicos para jogadores
  - Validação de dados
  - Proteção contra manipulação 