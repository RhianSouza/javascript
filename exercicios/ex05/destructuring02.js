const produtos = [
    { nome: "Mouse", preco: 50, categoria: "Eletrônicos" },
    { nome: "Teclado", preco: 100, categoria: "Eletrônicos" },
    { nome: "Caderno", preco: 20, categoria: "Papelaria" },
    { nome: "Caneta", preco: 5, categoria: "Papelaria" }
];

const produtosFormatados = produtos
    .map(({ nome, categoria }) => `${nome} - ${categoria}`)

const produtosFiltrados = produtos
    .filter(({ preco }) => preco >= 30)
    .map(({ nome, preco }) => `${nome} custa R$${preco}`)

const totalPrecos = produtos
    .reduce((acc, { preco }) => {
        return acc + preco
    }, 0)

const agruparCategoria = produtos
    .reduce((acc, { nome, categoria }) => {
        if (!acc[categoria]){
            acc[categoria] = []
        }

        acc[categoria].push(nome)

        return acc
    }, {})


console.log(produtosFormatados)
console.log(produtosFiltrados)
console.log(totalPrecos)
console.log(agruparCategoria)
 
// -----

const vendas = [
  { produto: "Mouse", categoria: "Eletrônicos", preco: 50, quantidade: 2 },
  { produto: "Teclado", categoria: "Eletrônicos", preco: 100, quantidade: 1 },
  { produto: "Caderno", categoria: "Papelaria", preco: 20, quantidade: 5 },
  { produto: "Caneta", categoria: "Papelaria", preco: 5, quantidade: 10 }
]

const groupByCategory = vendas
    .reduce((acc, {produto, categoria, preco, quantidade}) => {
        if (!acc[categoria]){
            acc[categoria] = {
                total: 0,
                produtos: []
            }
        }

        acc[categoria].total += preco * quantidade
        acc[categoria].produtos.push(produto)

        return acc 
    }, {})

console.log(groupByCategory)