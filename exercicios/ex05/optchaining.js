// 1 -----
const pessoa = {
  nome: "Ana"
};

console.log(pessoa?.idade)

// 2 -----
const produto = {
  detalhes: {
    preco: 50
  }
};

console.log(produto.detalhes?.preco)
// 3 -----
const usuario = {};

console.log(usuario?.perfil?.endereco?.cidade)

// 4 -----
const numeros = [5, 10];

console.log(numeros?.[3])

// 5 -----
const carro = {
  ligar: () => "Ligado"
};

console.log(carro?.ligar())
console.log(carro?.desligar?.())

// 6 -----
const empresa = {
  funcionario: {
    nome: "Carlos"
  }
};

console.log(empresa?.funcionario?.nome?.toUpperCase())

// 7 ------
const user = {
  perfil: null
};

console.log(user?.perfil?.nome)

// 8 -----
const sistema = {
  login: () => ({
    usuario: {
      nome: "João"
    }
  })
};

console.log(sistema?.login?.()?.usuario?.nome)

