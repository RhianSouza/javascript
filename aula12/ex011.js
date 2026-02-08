var idade = 17
console.log (`Você tem ${idade} anos.`)

if (idade < 16 || idade >= 65){
    console.log('Não Vota')
} else if (idade >= 18){
    console.log('Voto Obrigatório')
} else if (idade >=16){
    console.log('Voto Opcional')
}