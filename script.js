// ======== ELEMENTOS DA TABELA PERIÓDICA (resumo simplificado) ========
const elementos = [
  { simbolo: "H", nome: "Hidrogênio", tipo: "nao-metal" },
  { simbolo: "He", nome: "Hélio", tipo: "gas-nobre" },
  { simbolo: "Li", nome: "Lítio", tipo: "metal" },
  { simbolo: "Be", nome: "Berílio", tipo: "metal" },
  { simbolo: "B", nome: "Boro", tipo: "semimetal" },
  { simbolo: "C", nome: "Carbono", tipo: "nao-metal" },
  { simbolo: "N", nome: "Nitrogênio", tipo: "nao-metal" },
  { simbolo: "O", nome: "Oxigênio", tipo: "nao-metal" },
  { simbolo: "F", nome: "Flúor", tipo: "halogenio" },
  { simbolo: "Ne", nome: "Neônio", tipo: "gas-nobre" },
  { simbolo: "Na", nome: "Sódio", tipo: "metal" },
  { simbolo: "Mg", nome: "Magnésio", tipo: "metal" },
  { simbolo: "Al", nome: "Alumínio", tipo: "metal" },
  { simbolo: "Si", nome: "Silício", tipo: "semimetal" },
  { simbolo: "P", nome: "Fósforo", tipo: "nao-metal" },
  { simbolo: "S", nome: "Enxofre", tipo: "nao-metal" },
  { simbolo: "Cl", nome: "Cloro", tipo: "halogenio" },
  { simbolo: "Ar", nome: "Argônio", tipo: "gas-nobre" },
  { simbolo: "K", nome: "Potássio", tipo: "metal" },
  { simbolo: "Ca", nome: "Cálcio", tipo: "metal" },
  { simbolo: "Sc", nome: "Escândio", tipo: "metal" },
  { simbolo: "Ti", nome: "Titânio", tipo: "metal" },
  { simbolo: "V", nome: "Vanádio", tipo: "metal" },
  { simbolo: "Cr", nome: "Cromo", tipo: "metal" },
  { simbolo: "Mn", nome: "Manganês", tipo: "metal" },
  { simbolo: "Fe", nome: "Ferro", tipo: "metal" },
  { simbolo: "Co", nome: "Cobalto", tipo: "metal" },
  { simbolo: "Ni", nome: "Níquel", tipo: "metal" },
  { simbolo: "Cu", nome: "Cobre", tipo: "metal" },
  { simbolo: "Zn", nome: "Zinco", tipo: "metal" },
  { simbolo: "Br", nome: "Bromo", tipo: "halogenio" },
  { simbolo: "Kr", nome: "Criptônio", tipo: "gas-nobre" },
  { simbolo: "Ag", nome: "Prata", tipo: "metal" },
  { simbolo: "Sn", nome: "Estanho", tipo: "metal" },
  { simbolo: "I", nome: "Iodo", tipo: "halogenio" },
  { simbolo: "Xe", nome: "Xenônio", tipo: "gas-nobre" },
  { simbolo: "Pt", nome: "Platina", tipo: "metal" },
  { simbolo: "Au", nome: "Ouro", tipo: "metal" },
  { simbolo: "Hg", nome: "Mercúrio", tipo: "metal" },
  { simbolo: "Pb", nome: "Chumbo", tipo: "metal" },
  { simbolo: "U", nome: "Urânio", tipo: "metal" }
];

// ======== VARIÁVEIS DE ESTADO ========
let elementosRestantes = [...elementos];
let sorteados = [];
let sorteioAtivo = false;
let timer;

// ======== ELEMENTOS DOM ========
const btnSortear = document.getElementById("btnSortear");
const btnAuto = document.getElementById("btnAuto");
const btnReiniciar = document.getElementById("btnReiniciar");
const cardAtual = document.getElementById("lastDrawn");
const gridSorteados = document.getElementById("drawnGrid");
const btnGerarCartela = document.getElementById("btnGerarCartela");
const cartela = document.getElementById("cartela");

// ======== FUNÇÕES ========

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
}

// Inicia sorteio automático
function iniciarSorteioAuto() {
  if (sorteioAtivo) return;
  sorteioAtivo = true;
  btnAuto.textContent = "⏹ Parar Automático";
  timer = setInterval(sortearElemento, 3000);
}

// Para sorteio automático
function pararSorteio() {
  sorteioAtivo = false;
  clearInterval(timer);
  btnAuto.textContent = "▶️ Sorteio Automático";
}

// Reinicia o jogo
function reiniciarJogo() {
  pararSorteio();
  elementosRestantes = [...elementos];
  sorteados = [];
  mostrarElemento(null);
  atualizarSorteados();
}

// Gera cartela 5x5 com elementos aleatórios
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
mostrarElemento(null);
