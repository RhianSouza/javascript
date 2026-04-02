/* // 1 ---------------------------------------------------------------
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
 */

//   1 ----------------------------
function variosNum(...numeros) {
  return numeros
}

console.log(variosNum(1, 2, 3, 4))

//   2 ----------------------------
function somaTudo(...rest) {
  let soma = 0

  for(let n of rest){
    soma += n
  }
  return soma
}

console.log(somaTudo(1, 2, 3, 4, 5))

//   3 ----------------------------
function multiplicar(a, b, c) {
  return a * b * c;
}

const num = [3, 3, 3]

console.log(multiplicar(...num))

//   4 ----------------------------
const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

const juntando = [...a, ...b, ...c]

console.log(juntando)

//   5 ----------------------------
const lista = [10, 20, 30, 40];

const [primeiro, ...resto] = lista;

console.log(primeiro);
console.log(resto);

//   DESAFIO FINAL ---
function maiorMenor (...numbers){
  return{
    maior: Math.max(...numbers),
    menor: Math.min(...numbers)
  }
}

console.log(maiorMenor(2, 8, 6, 7, 1))