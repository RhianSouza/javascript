const usuario_correto = "julia" 
const senha_correta = 12345
let res = document.getElementById('resultado')

function confirmar(){
    let usuario = document.getElementById('usuario')
    let senha = document.getElementById('senha')
    
    let senhaDigitada = Number(senha.value)

    if (usuario.value === '' || senha.value === ''){
        res.innerHTML = 'Adicione algum valor antes de prosseguir'
    } else if (usuario_correto === usuario.value && senhaDigitada === senha_correta){
        res.innerHTML = `Bem vindo ${usuario.value}`
        usuario.value = ''
        senha.value =  ''
    } else {
        res.innerHTML = 'Usuario ou senha incorreta'
        senha.value = ''
        usuario.value = ''
    }

    
}
    
    
