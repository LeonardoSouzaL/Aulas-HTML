// Exercícios de Condicionais //

/*--------------------------------------------------------------------
Nível Básico

1. Verificar maioridade:
    1. Peça ao usuário uma idade.
    2. Use um `if-else` para verificar se ele é maior ou menor de idade.

const idadeUsuario = Number(prompt("Digite sua idade: (ex: 25)"));

if (idadeUsuario >= 18) {
    alert("Maior de idade!!")
    console.log("Maior de idade!!")
} else {
    alert("Menor de idade!!")
}
*/

/* --------------------------------------------------------------------
2. Verificar se um número é positivo ou negativo:
    - Peça ao usuário para inserir um número.
    - Use um `if-else` para verificar se o número é positivo, negativo.
    - OBS: *Por hora* considere o 0 como sendo um número negativo.

const PositivoNegativo = Number(prompt("Digite um numero inteiro: "));

if (PositivoNegativo > 0) {
   alert("Seu numero é Positivo!!") 
} else {
    alert("Seu numero é Negativo!!")
} 
*/

/*--------------------------------------------------------------------
3. Aprovação em uma prova:
    - O usuário insere a nota de um aluno (0 a 100).
    - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".


const NotaUsuario = Number(prompt("Digite sua nota: (0 a 100)"));

if (NotaUsuario >= 60) {
    alert("Aprovado!!")
} else {
    alert("Reprovado")
}
*/

/*-------------------------------------------------------------------- 
4. Verificar se um número é positivo, negativo ou zero:
    - Peça ao usuário para inserir um número.
    - Use um `if-else` para verificar se o número é positivo, negativo ou zero.


const PNZ = Number(prompt("Digite um Numero:"));

if (PNZ > 0) {
    alert("Numero Positivo!!")
} else if (PNZ < 0){
    alert("Numero Negativo!!")
} else {
    alert("Numero é Zero!!")
}
*/

/*--------------------------------------------------------------------
5. Classificação de idade:
    - Peça ao usuário para inserir sua idade.
    - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).


const faixa = Number(prompt("Digite sua idade: "));

if (faixa >= 0 && faixa <= 12) {
    alert("Você é Criança")
} else if (faixa >= 13 && faixa <= 17){
    alert("Você é Adolescente")
} else {
    alert("Você é Adulto")
}
*/

/*-------------------------------------------------------------------- 
6. Verificar se um número é par ou ímpar:
    - Peça ao usuário para inserir um número.
    - Use o operador `%` para verificar se o número é divisível por 2.


const ParImpar = Number(prompt("Digite um numero:"));

if (ParImpar % 2 === 0) {
    alert("Seu numero é Par!!");
} else {
    alert("Seu numero é Ímpar!!");
}
*/

/*-------------------------------------------------------------------- 
Nível Intermediário

1. Calculadora simples:
    - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
    - Use um `if-else` para calcular o resultado e exibi-lo.


const N1 = Number(prompt("Digite um Numero: "));
const Operador = prompt ("Digite a operação que deseja com os sinais Soma(+), Subtração(-), Multiplicação(*) ou Divisão(/): ");
const N2 = Number(prompt("Digite seu outro Numero: "));
const OperacaoSoma = N1 + N2;
const OperacaoSub = N1 - N2;
const OperacaoMult = N1 * N2;
const  OperacaoDiv = N1 / N2;


if (Operador === "+") {
    alert(`A soma ${N1} ${Operador} ${N2} = ${OperacaoSoma}`)
} else if (Operador === "-"){
    alert(`A soma ${N1} ${Operador} ${N2} = ${OperacaoSub}`)
} else if (Operador === "*"){
    alert(`A soma ${N1} ${Operador} ${N2} = ${OperacaoMult}`)
} else if (Operador === "/"){
    alert(`A soma ${N1} ${Operador} ${N2} = ${OperacaoDiv}`)
} else {
    alert("Ops!! Algum numero ou operação invalida, tente novamente!!")
}
*/

/* -------------------------------------------------------------------- 
2. Maior entre três números:
    - O usuário insere três números.
    - Use `if-else` para determinar e exibir o maior.


const N1 = Number(prompt("Digite um Numero: "));
const N2 = Number(prompt("Digite um outro Numero: "));
const N3 = Number(prompt("Digite outro Numero: "));

if (N1 > N2 && N1 > N3) {
    alert(`O numero maior numero digitado é: ${N1}`)
} else if ( N2 > N1 && N2 > N3) {
    alert(`O numero maior numero digitado é: ${N2}`)
} else if ( N3 > N1 && N3 > N2){
    alert(`O numero maior numero digitado é: ${N3}`)
} else {
    alert("Ops!! Algum numero invalido, tente novamente!!")
}
*/

/* -------------------------------------------------------------------- 
3. Desconto em compras
    - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
    - Caso contrário, exiba o valor normal.

const valorOriginal = Number(prompt("Digite o valor gasto em compras: "))
let valorFinal;

if (valorOriginal > 100) {
    valorFinal = valorOriginal * 0.9;
    alert(`O valor da sua compra desbloqueou 10% de desconto, sua compra ficou no valor de: R$${valorFinal}`)
} else {
    valorFinal = valorOriginal;
    alert(`O valor da sua compra ficou: R$ ${valorFinal}`)
}
*/

/*-------------------------------------------------------------------- 
4. **Sistema de login simples:**
    - O usuário insere um nome de usuário e senha.
    - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".


const usuario = prompt("Digite seu Login:");
const senha = prompt("Digite sua Senha:");

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario === "gerente");

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    alert("Acesso liberado!!")
} else {
    alert("Acesso Negado!!")
}
*/

/*-------------------------------------------------------------------- 
Nível Avançado

1. **Classificação de triângulos:**
    - O usuário insere três lados.
    - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.


const L1 = Number(prompt("Insira o tamanho do primeiro lado: "));
const L2 = Number(prompt("Insira o tamanho do segundo lado: "));
const L3 = Number(prompt("Insira o tamanho do terceiro lado: "));

if (L1 === L2 && L2 === L3) {
    alert("O seu triângulo é: Equilátero")
} else if (L1 === L2 || L2 === L3 || L1 === L3) {
    alert("O seu triângulo é: Isósceles")
} else {
    alert("O seu triângulo é: Escaleno")
}
*/

/*
2. **Conversão de notas para conceitos:**
    - O usuário insere uma nota (0-100).
    - Converta para conceitos:
    - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).
*/
