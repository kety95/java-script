function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if(hora == 1){
        msg.innerHTML = `Agora é ${hora} hora, `
    }else{
        msg.innerHTML = `Agora são ${hora} horas, `
    }
    
    if (hora >= 6 && hora < 12){
        msg.innerHTML += '<br>BOM DIA!'
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        msg.innerHTML += '<br>BOA TARDE!'
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else if (hora > 18 && hora < 23){
        msg.innerHTML += '<br>BOA NOITE!'
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }else{
        msg.innerHTML += '<br>BOA MADRUGADA!'
        img.src = 'img/madrugada.jpg'
        document.body.style.background = 'rgb(129, 129, 228)'
    }
}

