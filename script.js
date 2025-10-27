// ======================= DADOS COMPLETOS (118 elementos) =======================
// Cada item: { numero, simbolo, nome, tipo, periodo, familia }
// Tipos são simplificados: metal, nao-metal, halogenio, gas-nobre, semimetal, lantanideo, actinideo, metal-de-transicao, metal-alcalino, metal-alcalino-terroso, etc.

const elementos = [
  // 1
  { numero:1, simbolo:"H", nome:"Hidrogênio", tipo:"nao-metal", periodo:1, familia:1 },
  { numero:2, simbolo:"He", nome:"Hélio", tipo:"gas-nobre", periodo:1, familia:18 },

  // 2
  { numero:3, simbolo:"Li", nome:"Lítio", tipo:"metal-alcalino", periodo:2, familia:1 },
  { numero:4, simbolo:"Be", nome:"Berílio", tipo:"metal-alcalino-terroso", periodo:2, familia:2 },
  { numero:5, simbolo:"B", nome:"Boro", tipo:"semimetal", periodo:2, familia:13 },
  { numero:6, simbolo:"C", nome:"Carbono", tipo:"nao-metal", periodo:2, familia:14 },
  { numero:7, simbolo:"N", nome:"Nitrogênio", tipo:"nao-metal", periodo:2, familia:15 },
  { numero:8, simbolo:"O", nome:"Oxigênio", tipo:"nao-metal", periodo:2, familia:16 },
  { numero:9, simbolo:"F", nome:"Flúor", tipo:"halogenio", periodo:2, familia:17 },
  { numero:10, simbolo:"Ne", nome:"Neônio", tipo:"gas-nobre", periodo:2, familia:18 },

  // 3
  { numero:11, simbolo:"Na", nome:"Sódio", tipo:"metal-alcalino", periodo:3, familia:1 },
  { numero:12, simbolo:"Mg", nome:"Magnésio", tipo:"metal-alcalino-terroso", periodo:3, familia:2 },
  { numero:13, simbolo:"Al", nome:"Alumínio", tipo:"metal", periodo:3, familia:13 },
  { numero:14, simbolo:"Si", nome:"Silício", tipo:"semimetal", periodo:3, familia:14 },
  { numero:15, simbolo:"P", nome:"Fósforo", tipo:"nao-metal", periodo:3, familia:15 },
  { numero:16, simbolo:"S", nome:"Enxofre", tipo:"nao-metal", periodo:3, familia:16 },
  { numero:17, simbolo:"Cl", nome:"Cloro", tipo:"halogenio", periodo:3, familia:17 },
  { numero:18, simbolo:"Ar", nome:"Argônio", tipo:"gas-nobre", periodo:3, familia:18 },

  // 4
  { numero:19, simbolo:"K", nome:"Potássio", tipo:"metal-alcalino", periodo:4, familia:1 },
  { numero:20, simbolo:"Ca", nome:"Cálcio", tipo:"metal-alcalino-terroso", periodo:4, familia:2 },
  { numero:21, simbolo:"Sc", nome:"Escândio", tipo:"metal-de-transicao", periodo:4, familia:3 },
  { numero:22, simbolo:"Ti", nome:"Titânio", tipo:"metal-de-transicao", periodo:4, familia:4 },
  { numero:23, simbolo:"V", nome:"Vanádio", tipo:"metal-de-transicao", periodo:4, familia:5 },
  { numero:24, simbolo:"Cr", nome:"Cromo", tipo:"metal-de-transicao", periodo:4, familia:6 },
  { numero:25, simbolo:"Mn", nome:"Manganês", tipo:"metal-de-transicao", periodo:4, familia:7 },
  { numero:26, simbolo:"Fe", nome:"Ferro", tipo:"metal-de-transicao", periodo:4, familia:8 },
  { numero:27, simbolo:"Co", nome:"Cobalto", tipo:"metal-de-transicao", periodo:4, familia:9 },
  { numero:28, simbolo:"Ni", nome:"Níquel", tipo:"metal-de-transicao", periodo:4, familia:10 },
  { numero:29, simbolo:"Cu", nome:"Cobre", tipo:"metal-de-transicao", periodo:4, familia:11 },
  { numero:30, simbolo:"Zn", nome:"Zinco", tipo:"metal-de-transicao", periodo:4, familia:12 },
  { numero:31, simbolo:"Ga", nome:"Gálio", tipo:"metal", periodo:4, familia:13 },
  { numero:32, simbolo:"Ge", nome:"Germânio", tipo:"semimetal", periodo:4, familia:14 },
  { numero:33, simbolo:"As", nome:"Arsênio", tipo:"semimetal", periodo:4, familia:15 },
  { numero:34, simbolo:"Se", nome:"Selênio", tipo:"nao-metal", periodo:4, familia:16 },
  { numero:35, simbolo:"Br", nome:"Bromo", tipo:"halogenio", periodo:4, familia:17 },
  { numero:36, simbolo:"Kr", nome:"Criptônio", tipo:"gas-nobre", periodo:4, familia:18 },

  // 5
  { numero:37, simbolo:"Rb", nome:"Rubídio", tipo:"metal-alcalino", periodo:5, familia:1 },
  { numero:38, simbolo:"Sr", nome:"Estrôncio", tipo:"metal-alcalino-terroso", periodo:5, familia:2 },
  { numero:39, simbolo:"Y", nome:"Ítrio", tipo:"metal-de-transicao", periodo:5, familia:3 },
  { numero:40, simbolo:"Zr", nome:"Zircônio", tipo:"metal-de-transicao", periodo:5, familia:4 },
  { numero:41, simbolo:"Nb", nome:"Nióbio", tipo:"metal-de-transicao", periodo:5, familia:5 },
  { numero:42, simbolo:"Mo", nome:"Molibdênio", tipo:"metal-de-transicao", periodo:5, familia:6 },
  { numero:43, simbolo:"Tc", nome:"Tecnécio", tipo:"metal-de-transicao", periodo:5, familia:7 },
  { numero:44, simbolo:"Ru", nome:"Rutênio", tipo:"metal-de-transicao", periodo:5, familia:8 },
  { numero:45, simbolo:"Rh", nome:"Ródio", tipo:"metal-de-transicao", periodo:5, familia:9 },
  { numero:46, simbolo:"Pd", nome:"Paládio", tipo:"metal-de-transicao", periodo:5, familia:10 },
  { numero:47, simbolo:"Ag", nome:"Prata", tipo:"metal-de-transicao", periodo:5, familia:11 },
  { numero:48, simbolo:"Cd", nome:"Cádmio", tipo:"metal-de-transicao", periodo:5, familia:12 },
  { numero:49, simbolo:"In", nome:"Índio", tipo:"metal", periodo:5, familia:13 },
  { numero:50, simbolo:"Sn", nome:"Estanho", tipo:"metal", periodo:5, familia:14 },
  { numero:51, simbolo:"Sb", nome:"Antimônio", tipo:"semimetal", periodo:5, familia:15 },
  { numero:52, simbolo:"Te", nome:"Telúrio", tipo:"semimetal", periodo:5, familia:16 },
  { numero:53, simbolo:"I", nome:"Iodo", tipo:"halogenio", periodo:5, familia:17 },
  { numero:54, simbolo:"Xe", nome:"Xenônio", tipo:"gas-nobre", periodo:5, familia:18 },

  // 6
  { numero:55, simbolo:"Cs", nome:"Césio", tipo:"metal-alcalino", periodo:6, familia:1 },
  { numero:56, simbolo:"Ba", nome:"Bário", tipo:"metal-alcalino-terroso", periodo:6, familia:2 },

  // lantanídeos 57-71: colocados com periodo 6, family 3 (representação visual: we place them separately)
  { numero:57, simbolo:"La", nome:"Lantânio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:58, simbolo:"Ce", nome:"Cério", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:59, simbolo:"Pr", nome:"Praseodímio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:60, simbolo:"Nd", nome:"Neodímio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:61, simbolo:"Pm", nome:"Promécio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:62, simbolo:"Sm", nome:"Samário", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:63, simbolo:"Eu", nome:"Európio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:64, simbolo:"Gd", nome:"Gadolínio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:65, simbolo:"Tb", nome:"Térbio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:66, simbolo:"Dy", nome:"Disprósio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:67, simbolo:"Ho", nome:"Hólmio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:68, simbolo:"Er", nome:"Érbio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:69, simbolo:"Tm", nome:"Túlio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:70, simbolo:"Yb", nome:"Itérbio", tipo:"lantanideo", periodo:6, familia:3 },
  { numero:71, simbolo:"Lu", nome:"Lutécio", tipo:"lantanideo", periodo:6, familia:3 },

  { numero:72, simbolo:"Hf", nome:"Háfnio", tipo:"metal-de-transicao", periodo:6, familia:4 },
  { numero:73, simbolo:"Ta", nome:"Tântalo", tipo:"metal-de-transicao", periodo:6, familia:5 },
  { numero:74, simbolo:"W", nome:"Tungstênio", tipo:"metal-de-transicao", periodo:6, familia:6 },
  { numero:75, simbolo:"Re", nome:"Rênio", tipo:"metal-de-transicao", periodo:6, familia:7 },
  { numero:76, simbolo:"Os", nome:"Ósmio", tipo:"metal-de-transicao", periodo:6, familia:8 },
  { numero:77, simbolo:"Ir", nome:"Irídio", tipo:"metal-de-transicao", periodo:6, familia:9 },
  { numero:78, simbolo:"Pt", nome:"Platina", tipo:"metal-de-transicao", periodo:6, familia:10 },
  { numero:79, simbolo:"Au", nome:"Ouro", tipo:"metal-de-transicao", periodo:6, familia:11 },
  { numero:80, simbolo:"Hg", nome:"Mercúrio", tipo:"metal-de-transicao", periodo:6, familia:12 },
  { numero:81, simbolo:"Tl", nome:"Tálio", tipo:"metal", periodo:6, familia:13 },
  { numero:82, simbolo:"Pb", nome:"Chumbo", tipo:"metal", periodo:6, familia:14 },
  { numero:83, simbolo:"Bi", nome:"Bismuto", tipo:"metal", periodo:6, familia:15 },
  { numero:84, simbolo:"Po", nome:"Polônio", tipo:"semimetal", periodo:6, familia:16 },
  { numero:85, simbolo:"At", nome:"Astato", tipo:"halogenio", periodo:6, familia:17 },
  { numero:86, simbolo:"Rn", nome:"Radônio", tipo:"gas-nobre", periodo:6, familia:18 },

  // 7
  { numero:87, simbolo:"Fr", nome:"Frâncio", tipo:"metal-alcalino", periodo:7, familia:1 },
  { numero:88, simbolo:"Ra", nome:"Rádio", tipo:"metal-alcalino-terroso", periodo:7, familia:2 },

  // actinídeos 89-103 (representados similar a lantanídeos, periodo 7 family 3)
  { numero:89, simbolo:"Ac", nome:"Actínio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:90, simbolo:"Th", nome:"Tório", tipo:"actinideo", periodo:7, familia:3 },
  { numero:91, simbolo:"Pa", nome:"Protactínio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:92, simbolo:"U", nome:"Urânio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:93, simbolo:"Np", nome:"Netúnio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:94, simbolo:"Pu", nome:"Plutônio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:95, simbolo:"Am", nome:"Amerício", tipo:"actinideo", periodo:7, familia:3 },
  { numero:96, simbolo:"Cm", nome:"Cúrio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:97, simbolo:"Bk", nome:"Berquélio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:98, simbolo:"Cf", nome:"Califórnio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:99, simbolo:"Es", nome:"Einstênio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:100, simbolo:"Fm", nome:"Férmio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:101, simbolo:"Md", nome:"Mendelévio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:102, simbolo:"No", nome:"Nobélio", tipo:"actinideo", periodo:7, familia:3 },
  { numero:103, simbolo:"Lr", nome:"Lawrêncio", tipo:"actinideo", periodo:7, familia:3 },

  // 104-118 (transactinídios / metais pesados)
  { numero:104, simbolo:"Rf", nome:"Rutherfórdio", tipo:"metal-de-transicao", periodo:7, familia:4 },
  { numero:105, simbolo:"Db", nome:"Dúbnio", tipo:"metal-de-transicao", periodo:7, familia:5 },
  { numero:106, simbolo:"Sg", nome:"Seabórgio", tipo:"metal-de-transicao", periodo:7, familia:6 },
  { numero:107, simbolo:"Bh", nome:"Bóhrio", tipo:"metal-de-transicao", periodo:7, familia:7 },
  { numero:108, simbolo:"Hs", nome:"Hássio", tipo:"metal-de-transicao", periodo:7, familia:8 },
  { numero:109, simbolo:"Mt", nome:"Meitnério", tipo:"metal-de-transicao", periodo:7, familia:9 },
  { numero:110, simbolo:"Ds", nome:"Darmstádio", tipo:"metal-de-transicao", periodo:7, familia:10 },
  { numero:111, simbolo:"Rg", nome:"Roentgênio", tipo:"metal-de-transicao", periodo:7, familia:11 },
  { numero:112, simbolo:"Cn", nome:"Copernício", tipo:"metal-de-transicao", periodo:7, familia:12 },
  { numero:113, simbolo:"Nh", nome:"Nihônio", tipo:"metal", periodo:7, familia:13 },
  { numero:114, simbolo:"Fl", nome:"Fleróvio", tipo:"metal", periodo:7, familia:14 },
  { numero:115, simbolo:"Mc", nome:"Moscóvio", tipo:"metal", periodo:7, familia:15 },
  { numero:116, simbolo:"Lv", nome:"Livermório", tipo:"metal", periodo:7, familia:16 },
  { numero:117, simbolo:"Ts", nome:"Tenessino", tipo:"halogenio", periodo:7, familia:17 },
  { numero:118, simbolo:"Og", nome:"Oganessônio", tipo:"gas-nobre", periodo:7, familia:18 }
];

// ======================= ESTADO DO JOGO =======================
let sorteados = [];          // array de objetos sorteados
let timerAuto = null;

// ======================= REFERÊNCIAS DOM =======================
const tabelaEl = document.getElementById("tabela");
const lanthEl = document.getElementById("lanthanides");
const actEl = document.getElementById("actinides");
const lastDrawnText = document.getElementById("sorteioText");
const drawnGrid = document.getElementById("drawnGrid");
const cartelaEl = document.getElementById("cartela");

const btnSortear = document.getElementById("btnSortear");
const btnAuto = document.getElementById("btnAuto");
const btnParar = document.getElementById("btnParar");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnGerarCartela = document.getElementById("btnGerarCartela");

// ======================= FUNÇÕES PRINCIPAIS =======================

// cria a grade principal 7 períodos × 18 famílias
function montarTabela() {
  tabelaEl.innerHTML = "";
  // Para cada periodo (1..7) criamos 18 células (familias)
  for (let p = 1; p <= 7; p++) {
    for (let f = 1; f <= 18; f++) {
      const celula = document.createElement("div");
      celula.className = "celula";
      // buscar elemento que pertença a este periodo e familia
      const el = elementos.find(e => e.periodo === p && e.familia === f && !isLanthanideAct(e));
      if (el) {
        const card = criarCardElemento(el);
        celula.appendChild(card);
      } else {
        // espaço vazio
        const vazio = document.createElement("div");
        vazio.className = "elemento-card vazio";
        vazio.innerHTML = "";
        celula.appendChild(vazio);
      }
      tabelaEl.appendChild(celula);
    }
  }

  // montar lantanídeos e actinídeos em linhas separadas (visual)
  montarSerieLantanideosActinideos();
}

function isLanthanideAct(el) {
  return (el.numero >= 57 && el.numero <= 71) || (el.numero >= 89 && el.numero <= 103);
}

function criarCardElemento(el) {
  const card = document.createElement("div");
  card.className = "elemento-card " + tipoParaClasse(el.tipo);
  card.id = `elem-${el.simbolo}`;
  card.dataset.simbolo = el.simbolo;
  card.dataset.numero = el.numero;
  card.dataset.nome = el.nome;
  card.innerHTML = `<div style="font-size:0.85rem">${el.numero}</div><div style="font-size:1.05rem">${el.simbolo}</div><div style="font-size:0.6rem;opacity:0.8">${el.nome}</div>`;
  return card;
}

function tipoParaClasse(tipo) {
  if (!tipo) return "outro";
  return tipo.toString().toLowerCase().replace(/\s+/g, "-");
}

function montarSerieLantanideosActinideos() {
  // limpar
  lanthEl.innerHTML = "";
  actEl.innerHTML = "";

  const lanth = elementos.filter(e => e.numero >=57 && e.numero <=71);
  const act = elementos.filter(e => e.numero >=89 && e.numero <=103);

  lanth.forEach(el => {
    const c = criarCardElemento(el);
    c.classList.add("lantanideo");
    lanthEl.appendChild(c);
  });

  act.forEach(el => {
    const c = criarCardElemento(el);
    c.classList.add("actinideo");
    actEl.appendChild(c);
  });
}

// sorteia um elemento aleatório que ainda não foi sorteado
function sortearElemento() {
  const disponiveis = elementos.filter(e => !sorteados.some(s => s.numero === e.numero));
  if (disponiveis.length === 0) {
    alert("Todos os elementos já foram sorteados!");
    return;
  }
  const idx = Math.floor(Math.random() * disponiveis.length);
  const el = disponiveis[idx];
  sorteados.push(el);

  // atualizar display
  lastDrawnText.textContent = `${el.simbolo} — ${el.nome} (Z=${el.numero})`;
  const pill = document.createElement("div");
  pill.className = "drawn-item";
  pill.textContent = el.simbolo;
  drawnGrid.appendChild(pill);

  // destaque visual na tabela (se estiver na grade principal ou nas linhas lanth/act)
  const card = document.getElementById(`elem-${el.simbolo}`);
  if (card) card.classList.add("sorteado");
}

// iniciar sorteio automático
function iniciarAuto() {
  if (timerAuto) return;
  timerAuto = setInterval(sortearElemento, 2500);
  btnAuto.disabled = true;
  btnParar.disabled = false;
}

// parar
function pararAuto() {
  if (!timerAuto) return;
  clearInterval(timerAuto);
  timerAuto = null;
  btnAuto.disabled = false;
  btnParar.disabled = true;
}

// reiniciar tudo
function reiniciar() {
  pararAuto();
  sorteados = [];
  drawnGrid.innerHTML = "";
  lastDrawnText.textContent = "Nenhum elemento sorteado ainda";
  // remover classe sorteado de todos
  document.querySelectorAll(".elemento-card.sorteado").forEach(n => n.classList.remove("sorteado"));
  cartelaEl.innerHTML = "";
}

// gerar cartela 5x5 (aleatória, sem repetição)
function gerarCartela() {
  cartelaEl.innerHTML = "";
  const pool = [...elementos];
  // embaralhar
  for (let i = pool.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const selecionados = pool.slice(0, 25);
  selecionados.forEach(el => {
    const c = document.createElement("div");
    c.className = "card";
    c.innerHTML = `<div style="font-size:1.3rem;font-weight:800">${el.simbolo}</div><div style="font-size:0.7rem">${el.nome}</div>`;
    cartelaEl.appendChild(c);
  });
}

// ======================= EVENTOS =======================
btnSortear.addEventListener("click", sortearElemento);
btnAuto.addEventListener("click", iniciarAuto);
btnParar.addEventListener("click", pararAuto);
btnReiniciar.addEventListener("click", reiniciar);
btnGerarCartela.addEventListener("click", gerarCartela);

// inicializa
document.addEventListener("DOMContentLoaded", () => {
  montarTabela();
  // start: parar botão
  btnParar.disabled = true;
});
