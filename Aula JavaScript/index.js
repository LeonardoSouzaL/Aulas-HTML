let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Olá Mundo!!"
console.log(minhaVariavel);

minhaVariavel = true
console.log(minhaVariavel)

let numero = 10;
let texto = "20";

let resultado = numero + texto;
console.log(resultado)

// Barra Barra, faz comentário de linha única

/* 
    Isso é um comentário
    de múltiplas lmhas
*/

console.log("Isso vai executar") //Mas isso aqui é ignorado.

// Case Sensitive
let nome = "Leonardo"
let Nome = "Leonardo"
let NOME = "Leonardo"

console.log(nome)
console.log(Nome)
console.log(NOME)

// Palavras Reservadas
// Não pode criar Variavel com esses nomes.

// Regras de Nomenclatura.
// Pode começar com Letra, com _ ou $
// Pode conter letras, números, _ou $
// Não pode: Comecar com numero
// não pode usar acentos

let Nome2;
let nomeCompleto;
let _contador;
let idade2;

// Nomes de funções começam com Verbos:
function calcularMedida(){

}

function buscarUsuario(){

}

// Tipos Primitivos

// NUMBER - Número
const preco = 19.90
console.log(typeof preco);

// STRING - Texto
const nome3 = "Leonardo"
console.log(typeof nome3)

// BOOLEAN - Verdadeiro ou Falso (0 ou 1)
const ativo = true;
console.log(typeof ativo);

// NULL - Ausência intencional de Valor
const vazio = null
console.log(typeof vazio);

// UNDEFINED - Variável sem valor
let indefinido;
console.log(typeof indefinido);

// BIGINT - Números muito grandes
const grande = 90071992547400993n;
console.log(typeof grande);

// Valores Especiais: NaN e Infinity
// INFINITY - Divisão por Zero
console.log(5 / 0);
console.log(-5 / 0);

// Nan (Not a Number) - Operação Inválida
console.log("abc" * 8);
console.log(Math.sqrt(-1));
console.log(0 / 0);

// Checar se é NaN
console.log(Number.isNaN("abc" * 3));

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade

    if (Number.isNaN(total)) {
        console.log("Erro: Preço ou Quantidade inválidos")
        return 0;
    }
    return total
}

console.log(calcularTotal("abc", 2));
console.log(calcularTotal(10, 5));

// Strings e Template Literals
// Aspas simples, Duplas ou Crase
const nome4 = 'Leonardo'
const nome5 = "Leonardo"
const nome6 =  `Leonardo`

// Propriedades e Métodos
const nomeCompleto2 = "Leonardo Souza";
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());

// TEMPLATE STRING (Crase) - Permite inserir variáveis.
const nome7 = "Leonardo";
const idade = 25;

console.log(`Olá, meu nome é ${nome7} e tenho ${idade} anos.`)

// Conversões de Tipo
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("oi"));

// const texto2 = prompt("Digite um número: ");
// console.log(texto2 + 5);
// alert(texto2 + 5);

const numero2 = Number(prompt("Digite um número: "));
console.log(numero2 + 5);
alert(numero2 + 5);

// Operadores Aritméticos
console.log(2 + 3); // Soma
console.log(5 - 3); // Subtração
console.log(4 * 3); // Multiplicação
console.log(6 / 2); // Divisão 
console.log(6 % 2); // Resto da Divisão
console.log(2 ** 3); // Potência

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);

// Operadores de Comparação
console.log(5 == "5"); // True -> valores são iguais (Após a Conversão)
console.log(5 == 5);

console.log(5 === "5"); // False -> tipos diferentes (Number vs String)
console.log(5 === 5); //True -> Valor E tipo iguais

console.log(5 != "5"); //False -> Valores não são diferente (Após a conversçao
console.log(5 != 7); // // True -> Valores Diferentes

console.log (5!== "5"); //True -> São diferentes (Tipos Diferentes)
console.log(5 !== 5); //False - >NÃO são diferentes (Idênticos)

console.log(!true);
console.log(!false);

const idade3 = 15;
console.log(idade3 >= 18);
console.log(!(idade3 >= 18));

const nome8 = "";
const nomeVazio = nome8 === "";
console.log(nomeVazio);

const nomeNaoVazio = nome8 !== "";
console.log(!!true);

// Estrutura Sequencial (Entrada -> Processamento -> Sáida)
// Entrada
const nome9 = prompt("Digite seu nome:");

// Processamento

// Saída
console.log("Olá," + nome9 + "!" );

// Entrada Soma de dois Números
const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));
// Processamento
const soma = n1 + n2
// Saída
console.log("Resultado: " + soma)

// Dobro de um número
const numero3 = Number(prompt("Digite um número: "));
const dobro = numero3 * 2;
alert(`O dobro de ${numero3} é ${dobro}`)

// Média de duas notas
const nota1 = Number(prompt("Digite sua primeira nota:"));
const nota2 = Number(prompt("Digite sua segunda nota:"));
const resultadoMedia = (nota1 + nota2) / 2;
alert(`A sua média é: ${resultadoMedia.toFixed(1)}`);
    if (resultadoMedia <= 5) {
        alert(`Parabens você é burro, ta reprovado`)
    } else {
        alert(`Parabens aprovado, sua média é ${resultadoMedia}`)
    }

/*
Idade detalhada

Converter anos em meses, dias, horas e minutos

Faça um programa que leia a Idade de uma pessoa em anos e mostre a mesma idade aproximada em:
- Meses
- Dias
- Horas
- Minutos

Use 365 dias por ano como simplificação.
*/

const idadeAnos = Number(prompt("Digite sua Idade em anos: "));
const idadeMeses = idadeAnos * 12;
alert(`Sua idade em Mesês é: ${idadeMeses} Mesês`);
const idadeDias = idadeAnos * 365;
alert(`Sua idade em Dias é: ${idadeDias} Dias`);
const idadeHoras = idadeDias * 24;
alert(`Sua idade em Horas é: ${idadeHoras} Horas`);
const idadeMinutos = idadeHoras * 60;
alert(`Sua idade em Minutos é: ${idadeMinutos} Minutos`);
    if (idadeAnos >= 25) {
        alert(`tu ta ficando ou ja é velho em 😢😜`);
    } else {
        alert(`Ta mucilon ainda 😊`);
    }

/*  
Celsius -> Fahrenheit

Fórmula: F = (C * 9/5) + 32
*/
const Celsius = Number(prompt("Digite a Temperatura em Celsius: "));
const Fahrenheit = (Celsius * 9/5) + 32
alert (`${Celsius} C em Fahrenheit é de: ${Fahrenheit.toFixed()} F`)
    if (Celsius >= 25) {
        alert (`CALOOOOOOOOOOOOR DO DIACHO 🫠🥵`)
    } else {
        alert (`FRIACAAAAAAAAA🥶`)
    }