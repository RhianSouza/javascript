const btn = document.getElementById("titulo")
const titulo = document.querySelector("h1")

btn.addEventListener("click", () => {
    titulo.textContent = "Texto alterado!!"
})


const input = window.document.getElementById("adicionar")
const botao = window.document.getElementById("confirmar")
const lista = window.document.getElementById("lista")

botao.addEventListener("click", () => {
    console.log(input.value)
    const criar = document.createElement("li")
    criar.textContent = input.value
    lista.appendChild(criar)
})
