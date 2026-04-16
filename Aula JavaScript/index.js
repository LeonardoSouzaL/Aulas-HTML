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

const texto2 = prompt("Digite um número: ");
console.log(texto2 + 5);
alert(texto2 + 5);

const numero2 = Number(prompt("Digite um número: "));
console.log(numero2 + 5);
alert(numero2 + 5);