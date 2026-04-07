function calcular(a, b) {
    function soma() {
        return a + b
    }
    return soma()
}

console.log(calcular(5, 3))

// 2 -------

function contador() {
    let num = 1

    return function () {
        return num++
    }

}

const contar = contador()

console.log(contar())
console.log(contar())
console.log(contar())

// 3 -------
function mutiplicador(num) {

    return function (valor) {
        return num * valor
    }
}

const dobrar = mutiplicador(2)

console.log(dobrar(5))

// 4 --------
function contador2() {
    let num = 0

    return function () {
        return num += 2
    }
}

const CONTAR = contador2()

console.log(CONTAR())
console.log(CONTAR())
console.log(CONTAR())

// 5 -----------
for (var i = 1; i <= 3; i++) {

  setTimeout(function() {
    console.log(i)
  }, 1000)

}