const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 7 },
  { nome: "João", nota: 4 }
];

console.log(alunos.every(a => a.nota >= 6))

// 2 ---------

const idades = [18, 21, 25, 30]

console.log(idades.every(maior => maior >= 18))

// 3 -----------

const produtos = [
  { nome: "Mouse", estoque: true },
  { nome: "Teclado", estoque: true },
  { nome: "Monitor", estoque: false }
];

console.log(produtos.every(p => p.estoque === true))

// 4 ---------------

const palavras = ["casa", "sol", "carro"]

console.log(palavras.every(m3 => m3.length > 3))

// 5 --------------

/* USANDO SOME, EVERY E FIND */
const usuarios = [
  { nome: "Ana", idade: 22, ativo: true },
  { nome: "Carlos", idade: 17, ativo: false },
  { nome: "João", idade: 30, ativo: true }
];

console.log(usuarios.some(users => users.idade < 18))
console.log(usuarios.every(users => users.ativo === true))
console.log(usuarios.find(users => users.ativo))//forma simplificada