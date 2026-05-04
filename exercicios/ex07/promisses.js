const sucesso = true

const mensagem = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (sucesso) {
            resolve("olá mundo!")
        } else {
            reject("Deu erro!")
        }
    }, 1000)
});

mensagem
    .then((msg) => {
        console.log(msg)
    })
    .catch((erro) => {
        console.log(erro)
    })

//-------------------------
const numero = 8

const maiorOuMenor = new Promise((resolve, reject) => {
    
    if (numero > 10) {
        resolve("Maior que 10")
    } else {
        reject ("Menor que 10")
    }
})

maiorOuMenor
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })
