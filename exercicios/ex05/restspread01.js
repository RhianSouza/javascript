// 1 ---------------------------------------------------------------
const usuario = {
  nome: "Carlos",
  idade: 30,
  email: "carlos@email.com"
};

function atualizarUsuario(usuario, novosDados) {
  return {
    ...usuario,
    ...novosDados
  }
}

console.log(usuario, { idade: 31 })

// 2 ---------------------------------------------------------------

const produto = {
  nome: "Notebook",
  preco: 3000,
  estoque: 10
};

function removerPropiedade(obj, prop) {
  const novo = { ...obj }
  delete novo[prop] 
  return novo
}

const resultado = removerPropiedade(produto, "estoque")

console.log(resultado)

// 3 ---------------------------------------------------------------

function somarTudo (...valores) {
  let soma = 0
  for(let i of valores){
    soma += i;
  }

  return soma
}

console.log(somarTudo(1,2,3,4,5))


