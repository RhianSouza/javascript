function mostrarMensagem (){
    console.log('Olá Mundo!')
}

function executar (funcao) {
    funcao()
}

 executar(mostrarMensagem)

 // 2 --------
const saudar = function(){
    console.log("Olá Rhian")
}

const processar = function(funcao){
    funcao()
}

processar(saudar)

// 3 -------

const somar = (n1, n2) => {
    console.log(n1 + n2)
}

const executarOperaçao = (funcao) => {
    funcao(5, 5)
}

executarOperaçao(somar)