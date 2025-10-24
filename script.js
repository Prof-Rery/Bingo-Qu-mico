// ======== DADOS DOS ELEMENTOS ========
const elementos = [
  { simbolo: "H", nome: "Hidrogênio", tipo: "nao-metal", pos: 1 },
  { simbolo: "He", nome: "Hélio", tipo: "gas-nobre", pos: 18 },
  { simbolo: "Li", nome: "Lítio", tipo: "metal", pos: 3 },
  { simbolo: "Be", nome: "Berílio", tipo: "metal", pos: 4 },
  { simbolo: "B", nome: "Boro", tipo: "semimetal", pos: 5 },
  { simbolo: "C", nome: "Carbono", tipo: "nao-metal", pos: 6 },
  { simbolo: "N", nome: "Nitrogênio", tipo: "nao-metal", pos: 7 },
  { simbolo: "O", nome: "Oxigênio", tipo: "nao-metal", pos: 8 },
  { simbolo: "F", nome: "Flúor", tipo: "halogenio", pos: 9 },
  { simbolo: "Ne", nome: "Neônio", tipo: "gas-nobre", pos: 10 },
  { simbolo: "Na", nome: "Sódio", tipo: "metal", pos: 11 },
  { simbolo: "Mg", nome: "Magnésio", tipo: "metal", pos: 12 },
  { simbolo: "Al", nome: "Alumínio", tipo: "metal", pos: 13 },
  { simbolo: "Si", nome: "Silício", tipo: "semimetal", pos: 14 },
  { simbolo: "P", nome: "Fósforo", tipo: "nao-metal", pos: 15 },
  { simbolo: "S", nome: "Enxofre", tipo: "nao-metal", pos: 16 },
  { simbolo: "Cl", nome: "Cloro", tipo: "halogenio", pos: 17 },
  { simbolo: "Ar", nome: "Argônio", tipo: "gas-nobre", pos: 18 },
  { simbolo: "K", nome: "Potássio", tipo: "metal", pos: 19 },
  { simbolo: "Ca", nome: "Cálcio", tipo: "metal", pos: 20 },
  { simbolo: "Fe", nome: "Ferro", tipo: "metal", pos: 26 },
  { simbolo: "Cu", nome: "Cobre", tipo: "metal", pos: 29 },
  { simbolo: "Zn", nome: "Zinco", tipo: "metal", pos: 30 },
  { simbolo: "Br", nome: "Bromo", tipo: "halogenio", pos: 35 },
  { simbolo: "Ag", nome: "Prata", tipo: "metal", pos: 47 },
  { simbolo: "Sn", nome: "Estanho", tipo: "metal", pos: 50 },
  { simbolo: "I", nome: "Iodo", tipo: "halogenio", pos: 53 },
  { simbolo: "Xe", nome: "Xenônio", tipo: "gas-nobre", pos: 54 },
  { simbolo: "Au", nome: "Ouro", tipo: "metal", pos: 79 },
  { simbolo: "Hg", nome: "Mercúrio", tipo: "metal", pos: 80 },
  { simbolo: "Pb", nome: "Chumbo", tipo: "metal", pos: 82 },
  { simbolo: "U", nome: "Urânio", tipo: "metal", pos: 92 },
];

// ======== VARIÁVEIS ========
let elementosRestantes = [...elementos];
let sorteados = [];
let sorteioAtivo = false;
let timer;

// ======== ELEMENTOS DOM ========
const btnSortear = document.getElementById("btnSortear");
const btnAuto = document.getElementById("btnAuto");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnGerarCartela = document.getElementById("btnGerarCartela");
const cardAtual = document.getElementById("lastDrawn");
const gridSorteados = document.getElementById("drawnGrid");
const cartela = document.getElementById("cartela");
const periodicTable = document.getElementById("periodicTable");

// ======== FUNÇÕES ========

// Cria visualização da tabela periódica
function criarTabelaPeriodica() {
  for (let i = 1; i <= 118; i++) {
    const el = elementos.find(e => e.pos === i);
    const cell = document.createElement("div");
    cell.classList.add("element-cell");

    if (el) {
      cell.textContent = el.simbolo;
      cell.id = `cell-${el.simbolo}`;
      cell.dataset.tipo = el.tipo;
    } else {
      cell.classList.add("vazio");
    }

    periodicTable.appendChild(cell);
  }
}

// Atualiza o display do último elemento sorteado
function mostrarElemento(el) {
  if (!el) {
    cardAtual.innerHTML = `<div class="element-card empty">---</div>`;
    return;
  }

  cardAtual.innerHTML = `
    <div class="element-card ${el.tipo}">
      <div class="el-symbol">${el.simbolo}</div>
      <div class="el-name">${el.nome}</div>
    </div>
  `;
}

// Atualiza lista de elementos já sorteados
function atualizarSorteados() {
  gridSorteados.innerHTML = sorteados.map(el => `
    <div class="element-card ${el.tipo}" title="${el.nome}">
      <div class="el-symbol">${el.simbolo}</div>
    </div>
  `).join("");
}

// Destaca o elemento sorteado na tabela periódica
function destacarNaTabela(simbolo, tipo) {
  const cell = document.getElementById(`cell-${simbolo}`);
  if (cell) {
    cell.className = `element-cell ${tipo} sorted`;
  }
}

// Sorteia um novo elemento
function sortearElemento() {
  if (elementosRestantes.length === 0) {
    alert("Todos os elementos já foram sorteados!");
    pararSorteio();
    return;
  }

  const idx = Math.floor(Math.random() * elementosRestantes.length);
  const el = elementosRestantes.splice(idx, 1)[0];
  sorteados.push(el);
  mostrarElemento(el);
  atualizarSorteados();
  destacarNaTabela(el.simbolo, el.tipo);
}

// Sorteio automático
function iniciarSorteioAuto() {
  if (sorteioAtivo) return;
  sorteioAtivo = true;
  btnAuto.textContent = "⏹ Parar Automático";
  timer = setInterval(sortearElemento, 3000);
}

function pararSorteio() {
  sorteioAtivo = false;
  clearInterval(timer);
  btnAuto.textContent = "▶️ Sorteio Automático";
}

// Reiniciar jogo
function reiniciarJogo() {
  pararSorteio();
  elementosRestantes = [...elementos];
  sorteados = [];
  mostrarElemento(null);
  atualizarSorteados();

  // resetar tabela
  document.querySelectorAll(".element-cell").forEach(cell => {
    cell.className = "element-cell";
  });
}

// Gera cartela de bingo 5x5
function gerarCartela() {
  const copia = [...elementos];
  const selecionados = [];
  while (selecionados.length < 25 && copia.length > 0) {
    const idx = Math.floor(Math.random() * copia.length);
    selecionados.push(copia.splice(idx, 1)[0]);
  }

  cartela.innerHTML = `
    <div class="bingo-card">
      ${selecionados.map(el => `
        <div class="element-card ${el.tipo}" title="${el.nome}">
          <div class="el-symbol">${el.simbolo}</div>
        </div>
      `).join("")}
    </div>
  `;
}

// ======== EVENTOS ========
btnSortear.addEventListener("click", sortearElemento);
btnAuto.addEventListener("click", () => {
  if (sorteioAtivo) pararSorteio();
  else iniciarSorteioAuto();
});
btnReiniciar.addEventListener("click", reiniciarJogo);
btnGerarCartela.addEventListener("click", gerarCartela);

// ======== INICIALIZAÇÃO ========
criarTabelaPeriodica();
mostrarElemento(null);
