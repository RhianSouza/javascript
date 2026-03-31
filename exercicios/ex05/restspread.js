// 1 ------ SPREAD 
const a = [1, 2];
const b = [3, 4];

const junto = [...a, ...b]

console.log(junto)

// 2 ------
const numeros = [5, 6, 7];
const copia = [...numeros]

console.log(copia)

// 3 ------
const pessoa = { nome: "Ana", idade: 18 };
const novaInfo = {...pessoa, cidade: "SP"}

console.log(novaInfo)

// 1 ------ REST
const [A, ...resto] = [10, 20, 30, 40];

console.log(A)
console.log(resto)

// 2 ------
function juntar(...valores) {
  return valores;
}
console.log(juntar(1, 2, 3, 4))

// REST + SPREAD

const NUMEROS = [1, 2, 3];

function soma(a, b, c) {
  return a + b + c;
}

console.log(soma(...NUMEROS))

// ------
const lista = [1, 2, 3, 4, 5];

const [primeiro, ...rest1] = lista

console.log(primeiro)
console.log(rest1) 

// ------
const PESSOA = {
  nome: "João",
  idade: 25,
  cidade: "RJ"
};

const {cidade, ...COPIA} = PESSOA 

console.log(COPIA)