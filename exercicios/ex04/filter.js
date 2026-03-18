const numeros = [1, 2, 3, 4, 5, 6]

const evenNumbers = numeros.filter((numero) => {
    if (numero % 2 === 0){
        return true
    } else {
        return false
    }
})

console.log(evenNumbers)