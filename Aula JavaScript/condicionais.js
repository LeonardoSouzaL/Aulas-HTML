// JavaScript: Condicionais (if, else, Operadores Lógicos).
const idade = 15;
if (idade >= 18) {
    console.log("Maior de idade!!");
}

if (idade >= 18) {
    console.log("Maior de idade!!");
} else {
    console.log("Menor de idade!! Caiu na lei Felca bobão!!");
}

// Operadores de Comparação
const a = 10;
const b = 5;
// Maior
console.log("10 > 5:", a > b);
console.log("10 > 5:", b > a);

// Menor
console.log("10 < 5:", b < a);
console.log("10 < 5:", b < a);

// Maior ou Igual
console.log("10 >= 5:", b >= a);
console.log("10 >= 5:", b >= a);

//Menor ou Igual
console.log("10 <= 5:", b <= a);
console.log("10 <= 5:", b <= a);

// Operador && (E / AND)
const idade1 = 20;
const temDocumento = true;
const estaLista = true;

if (idade1 >= 18 && temDocumento && estaLista) {
    console.log("Boa Festa!!")
} else {
    console.log("Lamento, Não pode entrar!!")
}