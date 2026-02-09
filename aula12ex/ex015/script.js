function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Homem'
            img.setAttribute('src', 'simbl-homem.png')
        } else if (fsex[1].checked){
            genero = 'Mulher'
            img.setAttribute('src', 'simbl-mulher.avif')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detctamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}