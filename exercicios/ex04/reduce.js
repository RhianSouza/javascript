let num = [10, 20, 30]

let total = num.reduce((accumulator, n) => {
    return accumulator + n
}, 0)

console.log(total)

// 2 ---------

const carrinho = [
    {nome: "Notebook", preco: 3000, quantidade: 1},
    {nome: "Mouse", preco: 50, quantidade: 2},
    {nome: "Mouse", preco: 50, quantidade: 1}
]

const resultado = carrinho.reduce((acc, p) => {

    acc[p.nome] = (acc[p.nome] || 0) + p.quantidade

    return acc
}, {})

console.log(resultado)