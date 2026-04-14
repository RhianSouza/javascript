const caixaTexto = window.document.querySelector(".task-input")
const botao = window.document.querySelector(".add-button")
const lista = window.document.querySelector(".task-list")



botao.addEventListener("click", () => {
    if (caixaTexto.value.trim() === "")
        return alert("Insira um valor!")

    const criarItem = document.createElement("li")

    criarItem.classList.add("task-item")

    criarItem.addEventListener("click", () => {
        criarItem.classList.toggle("completed")
    })

    criarItem.textContent = caixaTexto.value
    lista.appendChild(criarItem)

    caixaTexto.value = ""
    caixaTexto.focus()

    const botaoDeletar = document.createElement("button")

    botaoDeletar.textContent = "❌"

    criarItem.appendChild(botaoDeletar)

    botaoDeletar.addEventListener("click", () => {
        event.stopPropagation()
        criarItem.remove()
    })


})

caixaTexto.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        botao.click()
    }
})
