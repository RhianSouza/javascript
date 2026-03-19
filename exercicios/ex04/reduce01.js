const produtos = [
    { nome: "Notebook", preco: 3000, categoria: "tecnologia" },
    { nome: "Mouse", preco: 50, categoria: "tecnologia" },
    { nome: "Camiseta", preco: 80, categoria: "roupa" },
    { nome: "Teclado", preco: 200, categoria: "tecnologia" },
    { nome: "Calça", preco: 120, categoria: "roupa" }
]

const total = produtos
    .filter((p) => {
        return p.categoria === "tecnologia"
    })
    .map((p) => {
        return p.preco * 0.9
    })
    .reduce((acc, preco) => {
        return acc + preco
    }, 0)

console.log(total)