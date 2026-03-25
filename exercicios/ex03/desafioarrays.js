// EXERCÍCIO 1 / FEITO
/*
const carrinho = [
    { nome: "Mouse", preco: 50, quantidade: 2 },
    { nome: "Teclado", preco: 150, quantidade: 1 },
    { nome: "Monitor", preco: 900, quantidade: 1 }
];

const nameProduct = carrinho.map(np => np.nome) 

const higherPrice = carrinho.some(hp => hp.preco > 500)

const highestZero = carrinho.every(hz => hz.quantidade > 0)

const totalValue = carrinho.reduce((acc, t) => {
    return acc + (t.preco * t.quantidade)
}, 0)

console.log(nameProduct)
console.log(higherPrice)
console.log(highestZero)
console.log(totalValue)
 */


// 2 -----------------


const usuarios = [
    { nome: "Ana", idade: 22, ativo: true },
    { nome: "Carlos", idade: 17, ativo: false },
    { nome: "João", idade: 30, ativo: true },
    { nome: "Marina", idade: 15, ativo: true }
];

console.log(usuarios.filter(uAtvivos => uAtvivos.ativo))

const users = usuarios
    .filter(uAtvivos => uAtvivos.ativo)
    .map(uNome => uNome.nome)

console.log(users)

console.log(usuarios.some(uMenor => uMenor.idade < 18))

const activeUsers = usuarios
    .filter(uAtvivos => uAtvivos.ativo)
    .every(uAtivosMaiores => uAtivosMaiores.idade >= 18)

console.log(activeUsers)

console.log(usuarios.find(uMaior25 => uMaior25.idade >= 25))

const sumOfAge = usuarios
    .filter(uAtvivos => uAtvivos.ativo)
    .reduce((acc, user) => {
        return acc + user.idade
    }, 0)

console.log(sumOfAge)