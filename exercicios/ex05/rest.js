const usuario = {
  nome: "Ana",
  idade: 28,
  email: "ana@email.com",
  senha: "123456"
};

const {senha, ...rest} = usuario

console.log(rest) 