const carrinho = { 
   produto: [
      {nome: "Arroz", preco: 16, quantidade: 1},
      {nome: "Macarrão", preco: 12, quantidade: 3},
      {nome: "Óleo", preco: 5, quantidade: 6},
   ],

   mostrarProdutos: function(){
      for(let i = 0; i < this.produto.length; i++){
         console.log(`Produto: ${this.produto[i].nome} Preço: ${this.produto[i].preco} Quantidade: ${this.produto[i].quantidade}`)
      }
   },

   calcularTotal: function(){
      let total = 0
      for (let i = 0; i < this.produto.length; i++){

         total += this.produto[i].preco * this.produto[i].quantidade
      }
      console.log(`O valor total da compra é R$${total}`)
      },

      adicionarProduto: function(nome, preco, quantidade){
         this.produto.push({
            nome: nome,
            preco: preco,
            quantidade: quantidad
         })
      }


   }

carrinho.adicionarProduto("leite", 4, 4)
carrinho.adicionarProduto("Sal", 9, 1)
carrinho.adicionarProduto("Açucar", 6, 2)

carrinho.mostrarProdutos()
carrinho.calcularTotal()