let num = [7, 8, 5, 6, 3]
//---- ATENÇÃO
num.push(1) 
num.sort()
//---- A ORDEM DOS FATORES INFLUENCIA NO RESULTADO FINAL!!!
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor Não existe!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}


