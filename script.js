// === Dados dos elementos químicos ===
const elementos = [
  // 1º período
  { numero: 1, simbolo: "H", nome: "Hidrogênio", tipo: "Não metal", periodo: 1, familia: 1 },
  { numero: 2, simbolo: "He", nome: "Hélio", tipo: "Gás nobre", periodo: 1, familia: 18 },

  // 2º período
  { numero: 3, simbolo: "Li", nome: "Lítio", tipo: "Metal alcalino", periodo: 2, familia: 1 },
  { numero: 4, simbolo: "Be", nome: "Berílio", tipo: "Metal alcalino-terroso", periodo: 2, familia: 2 },
  { numero: 5, simbolo: "B", nome: "Boro", tipo: "Semimetal", periodo: 2, familia: 13 },
  { numero: 6, simbolo: "C", nome: "Carbono", tipo: "Não metal", periodo: 2, familia: 14 },
  { numero: 7, simbolo: "N", nome: "Nitrogênio", tipo: "Não metal", periodo: 2, familia: 15 },
  { numero: 8, simbolo: "O", nome: "Oxigênio", tipo: "Não metal", periodo: 2, familia: 16 },
  { numero: 9, simbolo: "F", nome: "Flúor", tipo: "Halogênio", periodo: 2, familia: 17 },
  { numero: 10, simbolo: "Ne", nome: "Neônio", tipo: "Gás nobre", periodo: 2, familia: 18 },

  // 3º período
  { numero: 11, simbolo: "Na", nome: "Sódio", tipo: "Metal alcalino", periodo: 3, familia: 1 },
  { numero: 12, simbolo: "Mg", nome: "Magnésio", tipo: "Metal alcalino-terroso", periodo: 3, familia: 2 },
  { numero: 13, simbolo: "Al", nome: "Alumínio", tipo: "Metal", periodo: 3, familia: 13 },
  { numero: 14, simbolo: "Si", nome: "Silício", tipo: "Semimetal", periodo: 3, familia: 14 },
  { numero: 15, simbolo: "P", nome: "Fósforo", tipo: "Não metal", periodo: 3, familia: 15 },
  { numero: 16, simbolo: "S", nome: "Enxofre", tipo: "Não metal", periodo: 3, familia: 16 },
  { numero: 17, simbolo: "Cl", nome: "Cloro", tipo: "Halogênio", periodo: 3, familia: 17 },
  { numero: 18, simbolo: "Ar", nome: "Argônio", tipo: "Gás nobre", periodo: 3, familia: 18 },

  // 4º período
  { numero: 19, simbolo: "K", nome: "Potássio", tipo: "Metal alcalino", periodo: 4, familia: 1 },
  { numero: 20, simbolo: "Ca", nome: "Cálcio", tipo: "Metal alcalino-terroso", periodo: 4, familia: 2 },
  { numero: 21, simbolo: "Sc", nome: "Escândio", tipo: "Metal de transição", periodo: 4, familia: 3 },
  { numero: 22, simbolo: "Ti", nome: "Titânio", tipo: "Metal de transição", periodo: 4, familia: 4 },
  { numero: 23, simbolo: "V", nome: "Vanádio", tipo: "Metal de transição", periodo: 4, familia: 5 },
  { numero: 24, simbolo: "Cr", nome: "Cromo", tipo: "Metal de transição", periodo: 4, familia: 6 },
  { numero: 25, simbolo: "Mn", nome: "Manganês", tipo: "Metal de transição", periodo: 4, familia: 7 },
  { numero: 26, simbolo: "Fe", nome: "Ferro", tipo: "Metal de transição", periodo: 4, familia: 8 },
  { numero: 27, simbolo: "Co", nome: "Cobalto", tipo: "Metal de transição", periodo: 4, familia: 9 },
  { numero: 28, simbolo: "Ni", nome: "Níquel", tipo: "Metal de transição", periodo: 4, familia: 10 },
  { numero: 29, simbolo: "Cu", nome: "Cobre", tipo: "Metal de transição", periodo: 4, familia: 11 },
  { numero: 30, simbolo: "Zn", nome: "Zinco", tipo: "Metal de transição", periodo: 4, familia: 12 },
  { numero: 31, simbolo: "Ga", nome: "Gálio", tipo: "Metal", periodo: 4, familia: 13 },
  { numero: 32, simbolo: "Ge", nome: "Germânio", tipo: "Semimetal", periodo: 4, familia: 14 },
  { numero: 33, simbolo: "As", nome: "Arsênio", tipo: "Semimetal", periodo: 4, familia: 15 },
  { numero: 34, simbolo: "Se", nome: "Selênio", tipo: "Não metal", periodo: 4, familia: 16 },
  { numero: 35, simbolo: "Br", nome: "Bromo", tipo: "Halogênio", periodo: 4, familia: 17 },
  { numero: 36, simbolo: "Kr", nome: "Criptônio", tipo: "Gás nobre", periodo: 4, familia: 18 },

  // 5º período
  { numero: 37, simbolo: "Rb", nome: "Rubídio", tipo: "Metal alcalino", periodo: 5, familia: 1 },
  { numero: 38, simbolo: "Sr", nome: "Estrôncio", tipo: "Metal alcalino-terroso", periodo: 5, familia: 2 },
  { numero: 39, simbolo: "Y", nome: "Ítrio", tipo: "Metal de transição", periodo: 5, familia: 3 },
  { numero: 40, simbolo: "Zr", nome: "Zircônio", tipo: "Metal de transição", periodo: 5, familia: 4 },
  { numero: 41, simbolo: "Nb", nome: "Nióbio", tipo: "Metal de transição", periodo: 5, familia: 5 },
  { numero: 42, simbolo: "Mo", nome: "Molibdênio", tipo: "Metal de transição", periodo: 5, familia: 6 },
  { numero: 43, simbolo: "Tc", nome: "Tecnécio", tipo: "Metal de transição", periodo: 5, familia: 7 },
  { numero: 44, simbolo: "Ru", nome: "Rutênio", tipo: "Metal de transição", periodo: 5, familia: 8 },
  { numero: 45, simbolo: "Rh", nome: "Ródio", tipo: "Metal de transição", periodo: 5, familia: 9 },
  { numero: 46, simbolo: "Pd", nome: "Paládio", tipo: "Metal de transição", periodo: 5, familia: 10 },
  { numero: 47, simbolo: "Ag", nome: "Prata", tipo: "Metal de transição", periodo: 5, familia: 11 },
  { numero: 48, simbolo: "Cd", nome: "Cádmio", tipo: "Metal de transição", periodo: 5, familia: 12 },
  { numero: 49, simbolo: "In", nome: "Índio", tipo: "Metal", periodo: 5, familia: 13 },
  { numero: 50, simbolo: "Sn", nome: "Estanho", tipo: "Metal", periodo: 5, familia: 14 },
  { numero: 51, simbolo: "Sb", nome: "Antimônio", tipo: "Semimetal", periodo: 5, familia: 15 },
  { numero: 52, simbolo: "Te", nome: "Telúrio", tipo: "Semimetal", periodo: 5, familia: 16 },
  { numero: 53, simbolo: "I", nome: "Iodo", tipo: "Halogênio", periodo: 5, familia: 17 },
  { numero: 54, simbolo: "Xe", nome: "Xenônio", tipo: "Gás nobre", periodo: 5, familia: 18 },

  // 6º período
  { numero: 55, simbolo: "Cs", nome: "Césio", tipo: "Metal alcalino", periodo: 6, familia: 1 },
  { numero: 56, simbolo: "Ba", nome: "Bário", tipo: "Metal alcalino-terroso", periodo: 6, familia: 2 },
  { numero: 57, simbolo: "La", nome: "Lantânio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 58, simbolo: "Ce", nome: "Cério", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 59, simbolo: "Pr", nome: "Praseodímio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 60, simbolo: "Nd", nome: "Neodímio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 61, simbolo: "Pm", nome: "Promécio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 62, simbolo: "Sm", nome: "Samário", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 63, simbolo: "Eu", nome: "Európio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 64, simbolo: "Gd", nome: "Gadolínio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 65, simbolo: "Tb", nome: "Térbio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 66, simbolo: "Dy", nome: "Disprósio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 67, simbolo: "Ho", nome: "Hólmio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 68, simbolo: "Er", nome: "Érbio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 69, simbolo: "Tm", nome: "Túlio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 70, simbolo: "Yb", nome: "Itérbio", tipo: "Lantanídeo", periodo: 6, familia: 3 },
  { numero: 71, simbolo: "Lu", nome: "Lutécio", tipo: "Lantanídeo", periodo: 6, familia: 3 },

  { numero: 72, simbolo: "Hf", nome: "Háfnio", tipo: "Metal de transição", periodo: 6, familia: 4 },
  { numero: 73, simbolo: "Ta", nome: "Tântalo", tipo: "Metal de transição", periodo: 6, familia: 5 },
  { numero: 74, simbolo: "W", nome: "Tungstênio", tipo: "Metal de transição", periodo: 6, familia: 6 },
  { numero: 75, simbolo: "Re", nome: "Rênio", tipo: "Metal de transição", periodo: 6, familia: 7 },
  { numero: 76, simbolo: "Os", nome: "Ósmio", tipo: "Metal de transição", periodo: 6, familia: 8 },
  { numero: 77, simbolo: "Ir", nome: "Irídio", tipo: "Metal de transição", periodo: 6, familia: 9 },
  { numero: 78, simbolo: "Pt", nome: "Platina", tipo: "Metal de transição", periodo: 6, familia: 10 },
  { numero: 79, simbolo: "Au", nome: "Ouro", tipo: "Metal de transição", periodo: 6, familia: 11 },
  { numero: 80, simbolo: "Hg", nome: "Mercúrio", tipo: "Metal de transição", periodo: 6, familia: 12 },
  { numero: 81, simbolo: "Tl", nome: "Tálio", tipo: "Metal", periodo: 6, familia: 13 },
  { numero: 82, simbolo: "Pb", nome: "Chumbo", tipo: "Metal", periodo: 6, familia: 14 },
  { numero: 83, simbolo: "Bi", nome: "Bismuto", tipo: "Metal", periodo: 6, familia: 15 },
  { numero: 84, simbolo: "Po", nome: "Polônio", tipo: "Semimetal", periodo: 6, familia: 16 },
  { numero: 85, simbolo: "At", nome: "Astato", tipo: "Halogênio", periodo: 6, familia: 17 },
  { numero: 86, simbolo: "Rn", nome: "Radônio", tipo: "Gás nobre", periodo: 6, familia: 18 },

  // 7º período
  { numero: 87, simbolo: "Fr", nome: "Frâncio", tipo: "Metal alcalino", periodo: 7, familia: 1 },
  { numero: 88, simbolo: "Ra", nome: "Rádio", tipo: "Metal alcalino-terroso", periodo: 7, familia: 2 },
  { numero: 89, simbolo: "Ac", nome: "Actínio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 90, simbolo: "Th", nome: "Tório", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 91, simbolo: "Pa", nome: "Protactínio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 92, simbolo: "U", nome: "Urânio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 93, simbolo: "Np", nome: "Netúnio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 94, simbolo: "Pu", nome: "Plutônio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 95, simbolo: "Am", nome: "Amerício", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 96, simbolo: "Cm", nome: "Cúrio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 97, simbolo: "Bk", nome: "Berquélio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 98, simbolo: "Cf", nome: "Califórnio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 99, simbolo: "Es", nome: "Einstênio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 100, simbolo: "Fm", nome: "Férmio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 101, simbolo: "Md", nome: "Mendelévio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 102, simbolo: "No", nome: "Nobélio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 103, simbolo: "Lr", nome: "Lawrêncio", tipo: "Actinídeo", periodo: 7, familia: 3 },
  { numero: 104, simbolo: "Rf", nome: "Rutherfórdio", tipo: "Metal de transição", periodo: 7, familia: 4 },
  { numero: 105, simbolo: "Db", nome: "Dúbnio", tipo: "Metal de transição", periodo: 7, familia: 5 },
  { numero: 106, simbolo: "Sg", nome: "Seabórgio", tipo: "Metal de transição", periodo: 7, familia: 6 },
  { numero: 107, simbolo: "Bh", nome: "Bóhrio", tipo: "Metal de transição", periodo: 7, familia: 7 },
  { numero: 108, simbolo: "Hs", nome: "Hássio", tipo: "Metal de transição", periodo: 7, familia: 8 },
  { numero: 109, simbolo: "Mt", nome: "Meitnério", tipo: "Metal de transição", periodo: 7, familia: 9 },
  { numero: 110, simbolo: "Ds", nome: "Darmstádio", tipo: "Metal de transição", periodo: 7, familia: 10 },
  { numero: 111, simbolo: "Rg", nome: "Roentgênio", tipo: "Metal de transição", periodo: 7, familia: 11 },
  { numero: 112, simbolo: "Cn", nome: "Copernício", tipo: "Metal de transição", periodo: 7, familia: 12 },
  { numero: 113, simbolo: "Nh", nome: "Nihônio", tipo: "Metal", periodo: 7, familia: 13 },
  { numero: 114, simbolo: "Fl", nome: "Fleróvio", tipo: "Metal", periodo: 7, familia: 14 },
  { numero: 115, simbolo: "Mc", nome: "Moscóvio", tipo: "Metal", periodo: 7, familia: 15 },
  { numero: 116, simbolo: "Lv", nome: "Livermório", tipo: "Metal", periodo: 7, familia: 16 },
  { numero: 117, simbolo: "Ts", nome: "Tenessino", tipo: "Halogênio (transicional)", periodo: 7, familia: 17 },
  { numero: 118, simbolo: "Og", nome: "Oganessônio", tipo: "Gás nobre (transicional)", periodo: 7, familia: 18 }
  ];

// [... elementos 1 a 118 aqui dentro ...]
{ numero: 118, simbolo: "Og", nome: "Oganessônio", tipo: "Gás nobre (transicional)", periodo: 7, familia: 18 }
];

// === Fim da lista de elementos ===

// Elementos sorteados
let sorteados = [];

// Montar tabela periódica visual
const tabela = document.getElementById("tabela");

function criarTabela() {
  tabela.innerHTML = "";

  // Cria estrutura de 7 períodos + actinídeos/lantranídeos
  for (let p = 1; p <= 7; p++) {
    const linha = document.createElement("div");
    linha.classList.add("linha");

    const elementosPeriodo = elementos.filter(e => e.periodo === p);
    for (let i = 1; i <= 18; i++) {
      const el = elementosPeriodo.find(e => e.familia === i);
      const celula = document.createElement("div");
      celula.classList.add("elemento");

      if (el) {
        celula.id = `el-${el.simbolo}`;
        celula.innerHTML = `<strong>${el.simbolo}</strong><span>${el.numero}</span>`;
        celula.classList.add(el.tipo.replace(/\s+/g, "-").toLowerCase());
      } else {
        celula.classList.add("vazio");
      }

      linha.appendChild(celula);
    }

    tabela.appendChild(linha);
  }
}

criarTabela();

// Função para sortear elemento
function sortearElemento() {
  const disponiveis = elementos.filter(e => !sorteados.includes(e.simbolo));
  if (disponiveis.length === 0) {
    alert("Todos os elementos já foram sorteados!");
    return;
  }

  const sorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
  sorteados.push(sorteado.simbolo);

  document.getElementById("sorteado").innerHTML = `
    <h2>${sorteado.simbolo} (${sorteado.nome})</h2>
    <p>Número atômico: ${sorteado.numero}</p>
    <p>Tipo: ${sorteado.tipo}</p>
  `;

  document.getElementById("historico").innerHTML = sorteados.join(", ");

  const celula = document.getElementById(`el-${sorteado.simbolo}`);
  if (celula) celula.classList.add("sorteado");
}

// ========== Inicialização ==========
document.addEventListener("DOMContentLoaded", gerarTabelaPeriodica);
