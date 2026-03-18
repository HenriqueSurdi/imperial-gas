# Seção Hero / Pedido Rápido — Imperial Gás

## Objetivo da seção
Esta é a **seção principal de conversão do site**, posicionada no topo da página.  
O objetivo é permitir que o usuário **solicite o gás o mais rápido possível**, reduzindo fricção e destacando os dois principais canais de contato:

- WhatsApp
- Telefone (Disque Gás)

A seção deve transmitir **rapidez, confiança e urgência**, destacando a promessa de **entrega em até 20 minutos**.

---

# Estrutura geral da seção

## Desktop

Layout em **2 colunas**

Texto e CTAs	Elemento visual
Headline	
Descrição	Imagem/Ilustração
Botões (WhatsApp / Ligar)	ou destaque visual
Lista de benefícios	

### Proporção sugerida

- Coluna esquerda: **55%**
- Coluna direita: **45%**

A coluna esquerda concentra **conteúdo e ações**.  
A coluna direita funciona como **apoio visual**.

---

# Coluna esquerda (conteúdo)

Organizar em **fluxo vertical** com espaçamento consistente.

Ordem dos elementos:

1. Headline
2. Texto descritivo
3. Grupo de botões
4. Lista de benefícios

---

# 1. Headline

Elemento principal da seção.

Texto:


🔥 Peça agora seu gás e receba em até 20 minutos


### Comportamento

- Deve ter maior hierarquia visual da seção
- Quebra de linha natural se necessário
- Pode ser limitado a largura máxima para manter legibilidade

Exemplo de estrutura:


H1


---

# 2. Texto descritivo

Pequena frase explicativa abaixo do título.

Texto:


Entrega rápida de gás de cozinha em Betim direto na sua casa.


### Estrutura


paragraph / description text


### Regras

- Deve ficar logo abaixo do título
- Largura menor que a headline
- Espaçamento moderado

---

# 3. Grupo de botões (CTA)

Container horizontal com **dois botões principais**.

Estrutura:


CTA GROUP
├── Botão Primário (WhatsApp)
└── Botão Secundário (Telefone)


### Layout Desktop

Os botões devem ficar **lado a lado**.


[🟢 Pedir no WhatsApp] [📞 Ligar para Disque Gás]


Espaçamento entre eles.

---

## Botão Primário

Função: **WhatsApp**

Texto:


🟢 Pedir no WhatsApp


### Comportamento

- Deve ser o **botão visualmente dominante**
- Usado para iniciar conversa direta

### Interação

- Hover com leve elevação ou alteração visual
- Cursor pointer

---

## Botão Secundário

Função: **ligação telefônica**

Texto:


📞 Ligar para Disque Gás


### Comportamento

- Visualmente menos dominante que o primário
- Mesmo tamanho do primário

---

# 4. Lista de benefícios

Lista curta com **3 elementos de confiança**.

Estrutura:


✔ Entrega rápida
✔ Botijão lacrado
✔ Atendimento imediato


### Layout

- Lista horizontal no desktop
- Pode quebrar em duas linhas se necessário

Estrutura recomendada:


benefits container
├── item
├── item
└── item


Cada item deve conter:


[ícone] texto


Exemplo visual:


✔ Entrega rápida ✔ Botijão lacrado ✔ Atendimento imediato


---

# Coluna direita (visual)

A segunda coluna deve conter um **elemento visual que reforce o serviço**.

Sugestões:

- Foto de botijão de gás
- Ilustração de entrega
- Ícone grande representando delivery
- Imagem de entregador

### Regras

- A imagem deve ocupar boa parte da coluna
- Deve ter boa presença visual sem competir com o texto

---

# Mobile

No mobile o layout deve se transformar em **coluna única**.

Estrutura:


Headline
Descrição
Botão WhatsApp
Botão Ligar
Lista de benefícios
Imagem


---

## Comportamento mobile

### Headline

Centralizada ou alinhada à esquerda.

---

### Botões

Os botões devem ocupar **100% da largura do container**.

Empilhados verticalmente:


[🟢 Pedir no WhatsApp]

[📞 Ligar para Disque Gás]


Espaçamento entre eles.

---

### Lista de benefícios

Deve virar **lista vertical**.


✔ Entrega rápida
✔ Botijão lacrado
✔ Atendimento imediato


---

### Imagem

A imagem deve ficar **abaixo do conteúdo**.

Pode ocupar largura total.

---

# Componentes necessários

A LLM deverá criar os seguintes componentes reutilizáveis.

## CTA Button

Props:

- variant: primary | secondary
- icon
- text
- link

---

## CTA Group

Container responsável por organizar os botões.

Responsivo:

Desktop


flex row


Mobile


flex column


---

## Benefits List

Container para os itens de confiança.

Desktop


flex row


Mobile


flex column


---

## Benefit Item

Estrutura:


icon
text


---

# Espaçamentos gerais

A seção deve possuir **respiro vertical generoso**, pois é a primeira seção do site.

Estrutura recomendada:


section padding vertical grande
container centralizado
grid responsivo


---

# Resultado esperado

A seção deve comunicar rapidamente:

- rapidez da entrega
- facilidade de pedir gás
- contato imediato

E conduzir o usuário para **clicar no WhatsApp ou ligar**, que são as principais conversões 
