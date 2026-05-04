const mensagem = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("Olá Mundo!")
    }, 1000)
});

mensagem
    .then((msg) => {
        console.log(mensagem)
    })