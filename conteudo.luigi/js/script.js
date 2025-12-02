/* =========================================================
   AULA COMPLETA DE LÓGICA EM JAVASCRIPT
   Tópicos: Variáveis, Tipos de Dados, Arrays, Objetos,
            Constantes, Operadores, Console.log e If/Else.
   Estrutura didática:
   1) Explicação   2) PASSO A PASSO (antes)   3) Código (depois)
   ========================================================= */


/* ===================== 1) VARIÁVEIS =====================

   Variáveis são “caixinhas” que guardam valores na memória.

   Você pode:
   - Criar vazias e preencher depois
   - Atribuir valores imediatamente
   - Trocar o valor ao longo do código

   Em JavaScript:
   🔹 let  → quando o valor pode mudar
   🔹 const → quando NÃO deve mudar

   ---------------------------------------------------------
   DESAFIO 1: nomeAluno (string)
   PASSO A PASSO (antes do código):
   1) Identifique o tipo: é texto → string.
   2) Strings vão entre aspas.
   3) Substitua o valor vazio por seu nome entre aspas.
   ---------------------------------------------------------
*/
// Código para o aluno completar:
let nomeAluno = "Vinicius"; 
console.log(nomeAluno)

/* ---------------------------------------------------------
   DESAFIO 2: comidaFavorita (string)
   PASSO A PASSO:
   1) O tipo também é string.
   2) Escreva o nome da comida entre aspas.
   3) Não use números aqui.
   --------------------------------------------------------- */
let comidaFavorita = "Melancia"; 
console.log(comidaFavorita)

/* ---------------------------------------------------------
   Exemplos prontos (números): 
   - não precisam de aspas
   --------------------------------------------------------- */
let numeroAulas = 28;
let horarioAula = 3; // horas de aula
console.log(numeroAulas,horarioAula)

/* ---------------------------------------------------------
   DESAFIO 3: numeroAlunosSala (number)
   PASSO A PASSO:
   1) Confirme que é Number (sem aspas).
   2) Troque o 0 pelo total real de alunos.
   3) Use apenas dígitos.
   --------------------------------------------------------- */
let numeroAlunosSala = 10; 
console.log(`Quantidade de alunos na sala ${numeroAlunosSala}`)

/* ---------------------------------------------------------
   DESAFIO 4: suaIdade (number)
   PASSO A PASSO:
   1) Troque undefined por um número inteiro.
   2) Não use aspas.
   3) Evite negativos ou frações.
   --------------------------------------------------------- */
let suaIdade = Number(25);
console.log(`Minha idade é de ${suaIdade}`) 



/* ===================== 2) TIPOS DE DADOS =====================

   Principais tipos:
   - String  → texto ("entre aspas")
   - Number  → número (sem aspas)
   - Boolean → true/false (sem aspas)

   ---------------------------------------------------------
   Exemplo (boolean):
   --------------------------------------------------------- */
let estaAcesaALuz = true; // true = sim, a luz está acesa.
console.log(estaAcesaALuz)

/* ---------------------------------------------------------
   DESAFIO 5: estaLigado (boolean)
   PASSO A PASSO:
   1) Decida: seu computador está ligado?
   2) Use true para ligado, false para desligado.
   3) Sem aspas.
   --------------------------------------------------------- */
   let estaLigado = true; 

console.log(estaLigado? "O computador está ligado" : "O computador está desligado")


/* ---------------------------------------------------------
   DESAFIO 6: estouComFome (boolean)
   PASSO A PASSO:
   1) Responda com true/false.
   2) Sem aspas.
   3) Pode mudar depois (let ok).
   --------------------------------------------------------- */
let estouComFome = false; 


console.log(estouComFome ? "Estou com fome." : "Sem fome agora.");


/* ===================== 3) ARRAYS (LISTAS) =====================

   Array = lista ordenada de valores entre colchetes [].
   Cada item é separado por vírgula.

   Ex.: ["Arroz", "Feijão", "Carne"]

   ---------------------------------------------------------
   DESAFIO 7: listaDeCompras (strings)
   PASSO A PASSO:
   1) Pense em 3 itens reais do mercado.
   2) Substitua cada "comida" por um item entre aspas.
   3) Mantenha as vírgulas e os colchetes.
   --------------------------------------------------------- */
let listaDeCompras = ["Melancia", "Morango", "Melão"]; 

console.log(listaDeCompras)

/* ---------------------------------------------------------
   DESAFIO 8: listaDeTarefas (strings)
   PASSO A PASSO:
   1) Defina 3 tarefas do seu dia.
   2) Escreva cada uma como string.
   3) Uma tarefa por posição.
   --------------------------------------------------------- */
let listaDeTarefas = ["Lavar Louça 🙄", "Passar pano no chão 🤬", "Cozinhar 😩🥰"]; 
console.log(listaDeTarefas)

/* ---------------------------------------------------------
   DESAFIO 9: listaDeTemperos (strings)
   PASSO A PASSO:
   1) Crie um array com 3 itens.
   2) Cada item é uma string (ex.: "Sal").
   3) Separe por vírgula, mantenha as aspas.
   --------------------------------------------------------- */
let listaDeTemperos = []; 


/* ---------------------------------------------------------
   DESAFIO 10: listaDeMolhos (strings)
   PASSO A PASSO:
   1) Escolha 3 molhos (nomes).
   2) Escreva-os entre aspas.
   3) Separe por vírgula.
   --------------------------------------------------------- */
let listaDeMolhos = ["Molho madera", "Molho branco", "Molho rosé" ]; 
console.log(listaDeMolhos)


/* ===================== 4) OBJETOS =====================

   Objetos = pares chave:valor entre { }.
   Ex.: { nome: "Ana", idade: 25 }

   ---------------------------------------------------------
   Exemplo pronto:
   --------------------------------------------------------- */
let fichaAluno = { nome: "Giovanne", nota: 10, sala: "Sala 20" };
console.log(fichaAluno)

/* ---------------------------------------------------------
   DESAFIO 11: suaFichaAluno
   PASSO A PASSO:
   1) Substitua os valores vazios.
   2) nome e sala → strings (aspas).
   3) nota → number (sem aspas).
   --------------------------------------------------------- */
let suaFichaAluno = { nome: "Vinicius", nota: "9,50", sala: "31" }; 
console.log(suaFichaAluno)

/* ---------------------------------------------------------
   DESAFIO 12: novaFichaAluno
   PASSO A PASSO:
   1) Crie um objeto entre { }.
   2) Adicione chave nome com uma string.
   3) Adicione chave sala com uma string.
   4) Separe as chaves por vírgula.
   --------------------------------------------------------- */
let novaFichaAluno = {nome: "Vinicius", Cor:"Pardo", Idade: 25}; 
console.log(novaFichaAluno)


/* ===================== 5) CONST x LET =====================

   - let  → quando o valor poderá mudar
   - const → valor que não deve ser reatribuído

   --------------------------------------------------------- */
const TAXA_DE_JUROS = 0.25;
const FICHA_FIXA = { nome: "Ricardo", senha: "123" };
// (Sem desafio: foque em entender quando usar cada um.)



/* ===================== 6) CONSOLE.LOG =====================

   console.log(...) exibe informações no console do navegador/VS Code.
   Use para inspecionar valores enquanto desenvolve.

   --------------------------------------------------------- */
let fichaPacienteDebora = { nome: "Debora", condicao: "virose" };
// Exemplo de uso:
// console.log(fichaPacienteDebora);


/* ---------------------------------------------------------
   DESAFIO 13: imprimir fichaAlunoJulia
   PASSO A PASSO:
   1) Escreva console.log(...).
   2) Coloque a variável entre parênteses.
   3) Execute e observe no console.
   --------------------------------------------------------- */
let fichaAlunoJulia = { nome: "Julia", sala: "12" };
 console.log(fichaAlunoJulia)


/* ---------------------------------------------------------
   DESAFIO 14: imprimir fichaAlunoRicardo
   PASSO A PASSO:
   1) Repita o processo do desafio anterior.
   2) Use a variável correta.
   3) Observe o objeto impresso.
   --------------------------------------------------------- */
let fichaAlunoRicardo = { nome: "Ricardo", sala: "14" };  console.log()
console.log(fichaAlunoRicardo)


/* ===================== 7) OPERADORES DE COMPARAÇÃO =====================

   Comparam valores e retornam true/false.
   >  maior que
   <  menor que
   >= maior ou igual
   <= menor ou igual
   === igual (valor e tipo)

   --------------------------------------------------------- */
let viniciusAltura = 190;
let jonathanAltura = 175;
// Exemplo:
// console.log(viniciusAltura > jonathanAltura); // true

let custoBaguete = 8;
let custoPaoFrances = 1;
// Exemplo:
// console.log(custoPaoFrances < custoBaguete);  // true


/* ---------------------------------------------------------
   DESAFIO 15: comparar ouro e prata (true esperado)
   PASSO A PASSO:
   1) Decida a comparação adequada (maior/menor).
   2) Monte console.log( EXPRESSAO ).
   3) Ajuste a expressão até retornar true.
   --------------------------------------------------------- */
let precoOuroGrama = 60;
let precoPrataGrama = 14;
 console.log(precoOuroGrama > precoPrataGrama); // deve resultar em true



/* ===================== 8) OPERADORES LÓGICOS =====================

   && → E  (todas verdadeiras)
   || → OU (qualquer verdadeira)
   !  → NÃO (inverte)

   --------------------------------------------------------- */
let tenhoPao = true;
let tenhoMaionese = true;
let tenhoSalame = true;
let tenhoManteiga = false;


/* ---------------------------------------------------------
   DESAFIO 16: combinações com &&
   (a) pão com maionese
   (b) pão com maionese e salame
   (c) pão com maionese, salame e manteiga

   PASSO A PASSO (para cada item):
   1) Liste os ingredientes necessários (variáveis booleanas).
   2) Una com && (precisa de TODOS).
   3) Envolva em console.log(...).
   4) Execute e veja true/false.
   --------------------------------------------------------- */
 console.log(tenhoPao && tenhoMaionese && tenhoSalame && tenhoManteiga? "Posso fazer um lanchão" : "Não da para fazer lanche sem todos os itens");


/* ---------------------------------------------------------
   Estoque de bebidas:
   --------------------------------------------------------- */
let tenhoSuco = false;
let tenhoAgua = true;
let tenhoCerveja = true;
let tenhoVinho = false;


/* ---------------------------------------------------------
   DESAFIO 17: combinações com ||
   (a) Água OU Cerveja
   (b) Vinho OU Suco
   (c) Suco OU Vinho OU Água

   PASSO A PASSO (para cada item):
   1) Liste as opções aceitáveis.
   2) Una com || (basta UMA ser true).
   3) Envolva em console.log(...).
   4) Execute e interprete o resultado.
   --------------------------------------------------------- */
 console.log(tenhoAgua || tenhoCerveja ? "Tenho algo pra beber" : "Sem bebida 😅");
console.log(tenhoVinho || tenhoSuco ? "Tem vinho ou suco" : "Nem vinho nem suco");
console.log(tenhoSuco || tenhoVinho || tenhoAgua ? "Alguma opção tem" : "Nada disponível");




/* ===================== 9) IF / ELSE =====================

   if executa um bloco quando a condição é verdadeira;
   else executa quando é falsa.

   Estrutura:
   if (condicao) { ... } else { ... }

   --------------------------------------------------------- */
let saldo = 50;
let precoProduto = 30;
// Exemplo:
// if (saldo >= precoProduto) {
//   console.log("Compra aprovada!");
// } else {
//   console.log("Saldo insuficiente!");
// }

let notaProva = 7;
// Exemplo:
// if (notaProva >= 6) {
//   console.log("Aprovado!");
// } else {
//   console.log("Reprovado!");
// }


/* ---------------------------------------------------------
   DESAFIO 18: baldeAzul vs baldeVermelho
   Objetivo: se baldeAzul tiver mais, imprimir “baldeAzul tem mais água!”

   PASSO A PASSO:
   1) Compare os valores com > (ou <).
   2) Monte if (condicao) { ... }.
   3) No bloco, faça console.log com a mensagem.
   4) (Opcional) Teste trocando valores.
   --------------------------------------------------------- */
let baldeAzul = 15;
let baldeVermelho = 12;

if(baldeAzul > baldeVermelho){
   console.log(baldeAzul + " é maior que " + baldeVermelho)
}


//if () { console.log("baldeAzul tem mais água!"); }


/* ---------------------------------------------------------
   DESAFIO 19: baldeVerde vs baldeAmarelo (if/else)
   Objetivo:
   - Se baldeVerde tiver mais: “baldeVerde tem mais água!”
   - Senão: “baldeAmarelo tem mais água!”

   PASSO A PASSO:
   1) Compare baldeVerde e baldeAmarelo com >.
   2) if (condicao) { console.log(...verde...) } else { console.log(...amarelo...) }
   3) Execute e valide.
   --------------------------------------------------------- */
let baldeVerde = 17;
let baldeAmarelo = 22;
if(baldeVerde > baldeAmarelo){
   console.log(`Blade Verde com ${baldeVerde}L é maior que o balde amarelo com ${baldeAmarelo}L` )
}else{
  console.log(`Blade Verde com ${baldeVerde}L é menor que o balde amarelo com ${baldeAmarelo}L` )
}

/* ===================== 10) DESAFIO EXTRA =====================

   🧠 Objetivo:
   - Para cada aluno, calcular a média por matéria e dizer se passou (média > 6).
   - Calcular a média geral da sala por matéria.

   Você usará:
   - Funções (para média)
   - Loops (for/of)
   - If/else
   - Operadores aritméticos e de comparação

   ---------------------------------------------------------
   PASSO A PASSO (guia de resolução):
   1) Crie uma função media(notas):
      - Receba um array de números.
      - Some todos (loop).
      - Divida pelo tamanho e retorne.

   2) Percorra a estrutura:
      - Para cada sala em escola
        - Para cada aluno em sala.alunos
          - Para cada matéria em aluno.materias

   3) Para cada matéria do aluno:
      - Pegue o array de notas (ex.: matematica: [8,7,9]).
      - Calcule a média chamando media(notas).
      - Se média > 6 → "Aprovado", senão "Reprovado".
      - Imprima: nome do aluno, matéria, resultado.

   4) Média geral por matéria na sala:
      - Tenha acumuladores por matéria (somas) e contadores.
      - Some as médias individuais dos alunos.
      - Ao fim da sala, divida soma/quantidade para obter a média da sala por matéria.
      - Exiba: nome da sala + média de cada matéria.

   5) Validação e formatação:
      - Teste para as duas salas.
      - (Opcional) Ao exibir, use toFixed(2) somente no console.log.

   --------------------------------------------------------- */

function media(notas) {
  if (!Array.isArray(notas) || notas.length === 0) return 0;
  let soma = 0;
  for (const n of notas) soma += Number(n) || 0;
  return soma / notas.length;
}


const escola = [
  {
    nomeSala: "Sala 1",
    alunos: [
      { nome: "Ana", materias: { matematica: [8, 7, 9], artes: [6, 5, 7], quimica: [9, 8, 10] } },
      { nome: "Bruno", materias: { matematica: [5, 6, 4], artes: [8, 9, 7], quimica: [6, 7, 5] } },
      { nome: "Carla", materias: { matematica: [9, 10, 8], artes: [7, 8, 9], quimica: [10, 9, 10] } }
    ]
  },
  {
    nomeSala: "Sala 2",
    alunos: [
      { nome: "Diego", materias: { matematica: [6, 7, 5], artes: [9, 8, 9], quimica: [7, 6, 8] } },
      { nome: "Eduarda", materias: { matematica: [10, 9, 10], artes: [6, 7, 8], quimica: [9, 10, 9] } },
      { nome: "Felipe", materias: { matematica: [4, 5, 6], artes: [5, 6, 5], quimica: [6, 5, 7] } }
    ]
  }
];

