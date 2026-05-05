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
        reject("Menor que 10")
    }
})

maiorOuMenor
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })

//--------------------------
const user = "nieste"
const password = 88

const login = new Promise((resolve, reject) => {
    if (user === "nieste" && password === 88) {
        resolve("Login Bem-Sucedido")
    } else {
        reject("Credenciais inválidas")
    }
})

login
    .then((resul) => {
        console.log(resul)
    })
    .catch((err) => {
        console.log(err)
    })

//----------------------------
function minhaFuncao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random()

            if (number > 0.5) {
                resolve(number)
            } else {
                reject(`Número inválido ${number}`)
            }
        }, 3000);
    })
}

minhaFuncao()
    .then((num) => {
        console.log(num)
    })
    .catch((errado) => {
        console.log(errado)
    })

//---------------------------
const numeroX = 2

const encadeamento = new Promise((resolve, reject) => {
    resolve(numeroX)
})

encadeamento
    .then((numX1) => {
        return numX1 * 2
    })
    .then((numX1) => {
        console.log(numX1 + 10)
    })