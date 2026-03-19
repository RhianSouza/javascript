/* const numeros = [1, 2, 3, 4, 5]

const multiplicar = numeros.map((numero) => {
    return numero * 2
})

console.log(multiplicar) */

const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 900 }
]

// SAIDA EM FORMATO DE TEMPLATE STRING

const resultado = produtos
    .filter((p) => p.preco > 100)
    .map((p) => `${p.nome} custa R$${(p.preco * 1.10).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`)

console.log(resultado)


// SAIDA EM FORMATO DE OBJETO
const total = produtos
    .filter((p) => p.preco <= 100)
    .map(p => ({
        nome: p.nome,
        preco: (p.preco * 0.8).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }))

console.log(total)