function nomeFlex(...nome) {
    const nomeJuntos = nome.join(", ")
    return 'Olá ' + nomeJuntos
}

console.log(nomeFlex(""))

if (nome.length === 0){
    console.log("Insira um nome")
}
    
/* ARRUMAR O CÓDIGO DEPOIS */

// -----------------
const a = [1, 2, 3];
const b = [3, 4, 5];

const [primeiro, ...rest] = b

const ab = [...a, ...b]

console.log(ab)
// NÃO SEI USAR SET