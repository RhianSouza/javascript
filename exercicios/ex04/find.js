const product = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 }
]

console.log(product.find(p => p.preco < 100))

// 2 ------------   
const numeros = [3, 7, 12, 5, 20]

console.log(numeros.find(n => n > 10))

// 3 -----------

const usuarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 30 },
  { nome: "João", idade: 18 }
];

console.log(usuarios.find(u => u.nome === "Carlos"))
 
// 3 ------------  
