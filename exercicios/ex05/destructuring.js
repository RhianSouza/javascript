const produto = {
    nome: "mouse",
    preco: 50
}

const { nome, preco } = produto

console.log(`O produto: ${nome} custa R$${preco}`)

// 1 ----------

const usuario = {
  name1: "Rhian",
  age1: 20
}

const {name1, age1} = usuario

console.log(`Nome: ${name1} | Idade: ${age1}`)

// 2 -----------

const numeros = [5, 10, 15]

const [num1, ,num3] = numeros

console.log(`Primeiro: ${num1} | Terceiro: ${num3}`)

// 3 -----------

const pessoa = {
  nome: "Ana",
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
}

const { endereco: {cidade} } = pessoa

console.log(`Cidade: ${cidade}`)

