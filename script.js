// Objeto que guarda todas as escolhas da usuária
const escolhas = {
  tipo: null,
  data: '',
  hora: '',
  comidas: [],
  bebidas: []
};

function criarCoracoes() {
  const container = document.getElementById('coracoes');
  const emojis = ['💕','💗','💖','🌸','✨','💝'];
  for (let i = 0; i < 20; i++) {
    const c = document.createElement('div');
    c.className = 'coracao';
    c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    c.style.left              = (Math.random() * 100) + '%';
    c.style.fontSize          = (14 + Math.random() * 14) + 'px';
    c.style.animationDuration = (5  + Math.random() * 7)  + 's';
    c.style.animationDelay    = (Math.random() * 6)        + 's';
    container.appendChild(c);
  }
}

// ─── Troca de telas
function irPara(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');

  // Esconde o botão Não quando sair da tela 2
  if (id !== 'tela2') {
    document.getElementById('btn-nao').style.display = 'none';
  }
}

// ─── Envelope 
function abrirEnvelope() {
  document.getElementById('aba').classList.add('aberta');
  setTimeout(() => {
    irPara('tela2');
    document.getElementById('btn-nao').style.display = 'block';
    ativarBotaoFujao();
  }, 800);
}

// Botão 
function ativarBotaoFujao() {
  const btn = document.getElementById('btn-nao');
  let tentativas = 0;

  btn.addEventListener('mousemove', () => {
    tentativas++;

    // Calcula posição aleatória dentro da janela
    const margem = 80;
    const novoX = margem + Math.random() * (window.innerWidth  - btn.offsetWidth  - margem * 2);
    const novoY = margem + Math.random() * (window.innerHeight - btn.offsetHeight - margem * 2);

    btn.style.left   = novoX + 'px';
    btn.style.top    = novoY + 'px';
    btn.style.right  = 'auto';
    btn.style.bottom = 'auto';

    // Vai ficando menor e transparente com o tempo
    if (tentativas > 5)  btn.style.fontSize = '0.75rem';
    if (tentativas > 10) btn.style.opacity  = '0.3';
  });

  // No celular, foge ao toque
  btn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const novoX = Math.random() * (window.innerWidth  - 140);
    const novoY = Math.random() * (window.innerHeight - 60);
    btn.style.left = novoX + 'px';
    btn.style.top  = novoY + 'px';
  });
}

function fugir() {
  tentativas++;

  const larguraBtn = 140;
  const alturaBtn  = 52;
  const margem     = 16;

  const maxX = window.innerWidth  - larguraBtn - margem;
  const maxY = window.innerHeight - alturaBtn  - margem;

  const novoX = margem + Math.random() * maxX;
  const novoY = margem + Math.random() * maxY;

  btn.style.left   = novoX + 'px';
  btn.style.top    = novoY + 'px';
  btn.style.right  = 'auto';
  btn.style.bottom = 'auto';
  btn.style.width  = larguraBtn + 'px'; /* tamanho fixo sempre */

  if (tentativas > 5)  btn.style.fontSize = '0.75rem';
  if (tentativas > 10) btn.style.opacity  = '0.3';
}

// ─── Seleção única (tipo de encontro) ─────────────────
function selecionarUm(el, chave, valor) {
  // Remove seleção de todos os cards da mesma grade
  el.closest('.grade-opcoes').querySelectorAll('.card-opcao')
    .forEach(c => c.classList.remove('selecionado'));

  el.classList.add('selecionado');
  escolhas[chave] = valor;
}

// ─── Seleção múltipla (comidas e bebidas) ─────────────
function selecionarVarios(el, chave, valor) {
  el.classList.toggle('selecionado');

  if (el.classList.contains('selecionado')) {
    escolhas[chave].push(valor);
  } else {
    escolhas[chave] = escolhas[chave].filter(x => x !== valor);
  }
}


function avancarSeSelecionado(chave, proxTela) {
  if (!escolhas[chave]) {
    alert('Escolha uma opção antes de continuar! 💕');
    return;
  }
  irPara(proxTela);
}

// ─── Salva data e hora ────────────────────────────────
function salvarDataHora() {
  const data = document.getElementById('inputData').value;
  const hora = document.getElementById('inputHora').value;

  if (!data) {
    alert('Escolha uma data! 📅');
    return;
  }

  escolhas.data = data;
  escolhas.hora = hora;
  irPara('tela5');
}


function mostrarResumo() {
  irPara('tela7');


  const dataFormatada = escolhas.data
    ? new Date(escolhas.data + 'T12:00').toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'long', year: 'numeric'
      })
    : '—';

  const comidas = escolhas.comidas.length
    ? escolhas.comidas.map(i => `<span class="tag">${i}</span>`).join('')
    : '—';

  const bebidas = escolhas.bebidas.length
    ? escolhas.bebidas.map(i => `<span class="tag">${i}</span>`).join('')
    : '—';

  document.getElementById('card-resumo').innerHTML = `
    <div class="linha-resumo">
      <span class="rotulo">🌙 Encontro</span>
      <span>${escolhas.tipo || '—'}</span>
    </div>
    <div class="linha-resumo">
      <span class="rotulo">📅 Data</span>
      <span>${dataFormatada}</span>
    </div>
    <div class="linha-resumo">
      <span class="rotulo">⏰ Horário</span>
      <span>${escolhas.hora || '—'}</span>
    </div>
    <div class="linha-resumo">
      <span class="rotulo">🍕 Comidas</span>
      <span>${comidas}</span>
    </div>
    <div class="linha-resumo">
      <span class="rotulo">🥤 Bebidas</span>
      <span>${bebidas}</span>
    </div>
  `;

  lancarConfetes();
}

function lancarConfetes() {
  const wrap = document.getElementById('confetes');
  const cores = ['#f472a8','#fbbf24','#a78bfa','#34d399','#60a5fa'];

  for (let i = 0; i < 50; i++) {
    const c = document.createElement('div');
    c.className = 'confete';
    c.style.left             = (Math.random() * 100) + '%';
    c.style.background       = cores[Math.floor(Math.random() * cores.length)];
    c.style.width            = (8 + Math.random() * 10) + 'px';
    c.style.height           = c.style.width;
    c.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    c.style.animationDelay   = (Math.random() * 1.5) + 's';
    wrap.appendChild(c);


    setTimeout(() => c.remove(), 4000);
  }
}


criarCoracoes();
