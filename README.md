# 🅿️ Parquímetro Digital

Um simulador de parquímetro digital que calcula o tempo de estacionamento com base no valor inserido.

## 📋 Sobre o Projeto

Este projeto simula um parquímetro digital onde o usuário pode inserir um valor em reais e o sistema calcula automaticamente o tempo de estacionamento disponível, além de informar se há troco.

### 💰 Tabela de Preços

| Valor     | Tempo    |
|-----------|----------|
| R$ 1,00   | 30 min   |
| R$ 1,75   | 60 min   |
| R$ 3,00   | 120 min  |

## 🚀 Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. Digite o valor desejado no campo "Valor (R$)"
3. Clique no botão "Calcular"
4. O sistema mostrará:
   - O tempo disponível para estacionamento
   - O valor do troco (se houver)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
   - Classes
   - Template Strings
   - Array Methods

## ⚙️ Funcionalidades

- Cálculo automático do tempo baseado no valor inserido
- Validação de entrada de valores
- Cálculo automático de troco
- Interface amigável e responsiva
- Feedback visual para o usuário

## 🔍 Regras de Negócio

- O valor mínimo aceito é R$ 1,00
- O tempo máximo de estacionamento é 120 minutos
- O sistema sempre otimiza o tempo, utilizando as maiores frações possíveis
- Valores inválidos são rejeitados com mensagem de erro apropriada

## 📝 Notas de Desenvolvimento

O projeto foi desenvolvido como parte do curso da EBAC, aplicando conceitos de:
- Programação Orientada a Objetos
- Manipulação do DOM
- Tratamento de eventos
- Validação de dados
- Formatação de valores monetários