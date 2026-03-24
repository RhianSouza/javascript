const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 }
];

console.log(produtos.some(p => p.preco < 100))

// 2 -----------

const numeros = [5, 10, -3, 8];

console.log(numeros.some(n => n < 0))

// 3 -----------

const usuarios = [
    { nome: "Ana", idade: 22 },
    { nome: "Carlos", idade: 30 },
    { nome: "João", idade: 17 }
];

console.log(usuarios.some(m18 => m18.idade < 18))

// 4 -----------

const product = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 }
];

console.log(product.some(p => p.preco < 100))