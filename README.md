# Aceitas_um_Date-

Um site romântico e interativo criado para convidar alguém para um encontro de forma divertida e personalizada.

✨ Funcionalidades
📩 1. Envelope Animado
Tela inicial com um envelope.

Mensagem:

"Click the envelope to open My Love"

Ao clicar, o envelope abre com animação e revela o restante do site.
💘 2. Pedido de Encontro

Pergunta principal:

"Will you go on a date with me?"

Com dois botões:

✅ Yes!
❌ No
Comportamento Especial do Botão "No"

Quando o usuário tenta aproximar o cursor do botão "No", ele foge para outra posição aleatória da tela.

Objetivo:

Tornar praticamente impossível clicar em "No".
Criar uma experiência divertida e engraçada.

Tecnologias utilizadas:

JavaScript
Eventos de mouse (mouseover)
Posicionamento dinâmico com CSS

Exemplo de lógica:

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
🌅 3. Escolha do Tipo de Encontro

Opções disponíveis:

Netflix & Chill 🍿
Sunset Picnic 🌇
Dinner Date 🍝
Coffee Date ☕
Movie Night 🎬

O usuário seleciona apenas uma opção.

📅 4. Escolha da Data e Horário

Utiliza:

<input type="datetime-local">

Permite escolher:

Dia
Mês
Ano
Horário
🍕 5. Escolha das Comidas

Exemplos:

Pipoca 🍿
Nachos 🧀
Pizza 🍕
Hambúrguer 🍔
Sushi 🍣
Chocolate 🍫

Pode ser implementado com checkboxes.

🥤 6. Escolha das Bebidas

Exemplos:

Coca-Cola 🥤
Suco Natural 🍊
Frappé 🧋
Milkshake 🍓
Água 💧

Também utilizando checkboxes.

🎉 7. Tela Final

Após preencher tudo, o site exibe uma confirmação contendo:

Tipo de encontro escolhido
Data
Horário
Comidas
Bebidas

Exemplo:

Date Confirmed! 💖

Netflix & Chill

12/07/2026 - 19:00

Food: Pizza, Nachos

Drinks: Coca-Cola, Frappé

Can't wait to see you! ❤️

🎨 Design
Paleta de Cores
Rosa Claro (#FFD6E8)
Branco (#FFFFFF)
Vermelho Suave (#FF6B81)
Lilás Claro (#F3E8FF)
Estilo
Romântico
Minimalista
Responsivo
Animações suaves
❤️ Corações Flutuantes

O fundo possui corações animados gerados dinamicamente.

Exemplo:

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);
🛠️ Tecnologias Utilizadas
HTML5
CSS3
JavaScript (Vanilla JS)
📁 Estrutura do Projeto
date-invitation/
│
├── index.html
├── style.css
├── script.js
│
└── assets/
    ├── envelope.png
    ├── heart.svg
    └── background.jpg
🚀 Como Executar
Clone o repositório:
git clone https://github.com/seuusuario/date-invitation.git
Entre na pasta:
cd date-invitation
Abra o arquivo:
index.html

ou utilize a extensão Live Server do VS Code.

📱 Responsividade

O site foi projetado para funcionar em:

Desktop
Tablet
Smartphone
