//  1 -------- 
const quadrado = (n) => n * n
console.log(quadrado(7))


const saudacao = (nomea) => "Olá, " + nomea
console.log(saudacao("Rhi"))


const triplo = (num) => num * 3
console.log(triplo(2))


// 3 --------
const apresentacao = (nome, idade) => `Meu nome é ${nome} e eu tenho ${idade} anos.`
console.log(apresentacao('Rhian ', + 21))

// 4 --------
const calcularDescontos = (preco, desconto) => {
    descontoValor = preco * (desconto / 100)
    precoFinal = preco - descontoValor
    return `O preço final é ${precoFinal.toFixed(2)}`
}

console.log(calcularDescontos(100, 10))