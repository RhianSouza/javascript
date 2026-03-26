const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 }
]

const resultado = produtos.map(({ nome, preco }) => {
    return `${nome} custa R$${preco}`
})

console.log(resultado)

// 2 ----------

const usuarios = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 22 },
    { nome: "João", idade: 15 }
]

const res = usuarios.map(({nome, idade}) => {
    if (idade >= 18) {
        return `${nome} é maior de idade`
    } else {
        return `${nome} é menor de idade`
    }
})


console.log(res)