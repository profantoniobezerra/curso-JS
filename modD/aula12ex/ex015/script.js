function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO!!!] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src','criancamas.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src','adoslmas.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src','adultomas.png')
            } else {
                //idoso
                img.setAttribute('src','idosomas.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src','criancafem.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src','adoslfem.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src','adultofem.png')
            } else {
                //idoso
                img.setAttribute('src','idosafem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}