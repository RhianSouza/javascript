// SETTIMEOUT 

const semaforo = setTimeout(() => {
    console.log("🔴 VERMELHO")

    setTimeout(() => {
        console.log("🟡 AMARELO")

        setTimeout(() => {
            console.log("🟢 VERDE")
        }, 1000)
    }, 1000)
}, 1000)

// SETINTERVAL

let contador = 10

const regressivo = setInterval(() => {

    if (contador % 2 === 0) {
        console.log(contador + " - par")
    } else {
        console.log(contador)
    }

    if (contador === 0) {
        console.log("BOOM")
        clearInterval(regressivo)
    }

    contador--

}, 1000)
