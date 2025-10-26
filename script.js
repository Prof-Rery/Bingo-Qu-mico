// ========== Dados dos elementos ==========
const elementos = [
  { simbolo: "H", nome: "Hidrogênio", numero: 1, tipo: "Não metal", periodo: 1, familia: 1 },
  { simbolo: "He", nome: "Hélio", numero: 2, tipo: "Gás nobre", periodo: 1, familia: 18 },
  { simbolo: "Li", nome: "Lítio", numero: 3, tipo: "Metal alcalino", periodo: 2, familia: 1 },
  { simbolo: "Be", nome: "Berílio", numero: 4, tipo: "Metal alcalino-terroso", periodo: 2, familia: 2 },
  { simbolo: "B", nome: "Boro", numero: 5, tipo: "Semimetal", periodo: 2, familia: 13 },
  { simbolo: "C", nome: "Carbono", numero: 6, tipo: "Não metal", periodo: 2, familia: 14 },
  { simbolo: "N", nome: "Nitrogênio", numero: 7, tipo: "Não metal", periodo: 2, familia: 15 },
  { simbolo: "O", nome: "Oxigênio", numero: 8, tipo: "Não metal", periodo: 2, familia: 16 },
  { simbolo: "F", nome: "Flúor", numero: 9, tipo: "Halogênio", periodo: 2, familia: 17 },
  { simbolo: "Ne", nome: "Neônio", numero: 10, tipo: "Gás nobre", periodo: 2, familia: 18 },
  // (adicione os demais elementos conforme desejar)
];

// ========== Controle do bingo ==========
let elementosRestantes = [...elementos];
let elementosSorteados = [];

// ========== Sorteio ==========
function sortearElemento() {
  if (elementosRestantes.length === 0) {
    alert("Todos os elementos já foram sorteados!");
    return;
  }

  const indice = Math.floor(Math.random() * elementosRestantes.length);
  const elemento = elementosRestantes.splice(indice, 1)[0];
  elementosSorteados.push(elemento);

  exibirSorteado(elemento);
  destacarElementoNaTabela(elemento.simbolo);
}

// ========== Exibição ==========
function exibirSorteado(elemento) {
  const display = document.getElementById("sorteado");
  display.innerHTML = `
    <div class="elemento-sorteado">
      <p>${elemento.numero}</p>
      <h1>${elemento.simbolo}</h1>
      <p>${elemento.nome}</p>
    </div>
  `;

  const lista = document.getElementById("historico");
  const item = document.createElement("span");
  item.classList.add("historico-item");
  item.textContent = elemento.simbolo;
  lista.appendChild(item);
}

// ========== Gerar tabela ==========
function gerarTabelaPeriodica() {
  const tabela = document.getElementById("tabela");

  // Criar grade
  for (let periodo = 1; periodo <= 7; periodo++) {
    const linha = document.createElement("div");
    linha.classList.add("linha");

    for (let familia = 1; familia <= 18; familia++) {
      const celula = document.createElement("div");
      celula.classList.add("celula");

      const elemento = elementos.find(e => e.periodo === periodo && e.familia === familia);
      if (elemento) {
        celula.innerHTML = `
          <div class="elemento" id="elem-${elemento.simbolo}">
            <small>${elemento.numero}</small>
            <h3>${elemento.simbolo}</h3>
          </div>
        `;
      }

      linha.appendChild(celula);
    }

    tabela.appendChild(linha);
  }
}

// ========== Destacar elemento sorteado ==========
function destacarElementoNaTabela(simbolo) {
  const elemDiv = document.getElementById(`elem-${simbolo}`);
  if (elemDiv) {
    elemDiv.classList.add("sorteado");
  }
}

// ========== Inicialização ==========
document.addEventListener("DOMContentLoaded", gerarTabelaPeriodica);
