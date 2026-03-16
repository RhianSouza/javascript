const numeros = [2, 4, 6]

const triplicados = numeros.map(numero => numero * 3) 

console.log(triplicados)

// 2 -----------

const pessoas = [
{nome: "Ana", idade: 20},
{nome: "Carlos", idade: 25},
{nome: "pedro", idade: 30}
]

const nomes = pessoas.map(pessoa => pessoa.nome)
//const idade = pessoas.map(idade => idade.idade)

console.log(nomes)
//console.log(idade)

// 3 -----------

const produtos = [
    {nome: "Notebook", preco: 3000},
    {nome: "Mouse", preco: 50}
]

const adicionar = produtos.map(produto => {
    return{
        nome: produto.nome,
        preco: (produto.preco * 1.10).toFixed(2)
    }
})

console.log(adicionar)