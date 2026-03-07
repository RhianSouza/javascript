// 1 ----------
const subtrair = function (x, y) {
    return x - y
}

var resultado = subtrair(10, 3)

console.log(resultado)

// 2 -----------
const mensagem = function () {
    return "Javascript"
}

console.log(`Hoje eu estou estudando ${mensagem()}`)

// 3 ----------
const verificarPar = function (numero) {
    if (numero % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(verificarPar(4))
console.log(verificarPar(7))

// 4 ---------
const maiorNumero = function (a, b) {
    if (a === b){
        return "Os números são iguais"
    }

    if(a > b){
        return a
    } else {
        return b
    }
}

console.log(maiorNumero(10, 5))
console.log(maiorNumero(7, 7))
console.log(maiorNumero(3, 8))