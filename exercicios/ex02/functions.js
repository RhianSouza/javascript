// FUNÇÕES DECLARATION
/*
palindromo()

function palindromo() { 
    let palavra = "repaper"
    let separandoLetras = palavra.split("")
    let palavraIvertida = separandoLetras.reverse("")
    palavraIvertida = palavraIvertida.join("")

    if (palavra == palavraIvertida){
        console.log("A palavra " + palavra + " É um palíndromo")
    } else {
        console.log("A palavra " + palavra + " NÃO é um palíndromo")
    }
}
    */



// FUNCÕES EXPRESSION

const palindromo = function () {
    let palavra = "genious"
    let separandoLetras = palavra.split("")
    let palavraIvertida = separandoLetras.reverse()
    palavraIvertida = palavraIvertida.join("")

    if (palavra == palavraIvertida) {
        console.log("A palavra " + palavra + " É um palíndromo")
    } else {
        console.log("A palavra " + palavra + " NÃO é um palíndromo")
    }
}

palindromo()
