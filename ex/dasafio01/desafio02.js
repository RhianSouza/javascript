const carrinho = { 
   nome: ["arroz", "macarrão", "óleo"],
   preco: [8, 2, 3],
   quantidade: [1, 1, 2],

   mostrarProdutos: function() {
        console.log(`produto: ${this.nome[0]} Preço ${this.preco[0]} Quantidade ${this.quantidade[0]}`)
   }
}

carrinho.mostrarProdutos()