const usuario = {
    nome:"ana", 
    idade: 30, 
    email:"ana123@gmail.com", 
    cidade:"Limeira", 
    hobbies:["dançar", " cantar"],

    apresentar: function(){
        console.log(`Oi, eu sou ${this.nome}, Tenho ${this.idade} anos e meu email é ${this.email}`)
    },
 
    mostrarHobbies: function(){
        for (let i = 0; i < this.hobbies.length; i++){
            console.log(this.hobbies[i])
        }
    }
}

usuario.profissao = "médica"
usuario.cidade = "Campinas"
usuario.hobbies.push(" ler")

console.log(`Olá, meu nome é ${usuario.nome}, moro em ${usuario.cidade}, e trabalho como ${usuario.profissao}.`)

usuario.apresentar()
usuario.mostrarHobbies()