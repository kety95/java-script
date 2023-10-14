function contar(){
    var partida = document.getElementById('inicio')
    Number(partida.value)
    var final = document.getElementById('fim')
    Number(final.value)
    var salto = document.getElementById('passo')
    Number(salto.value)
    var resultado = document.getElementById('res')

    var numeroAtual = partida
    for (let i = numeroAtual; i <= final; i++){      
        resultado.innerHTML += `${numeroAtual}`
        numeroAtual += salto
        i = numeroAtual
    }
}