function contar(){
    var partida = document.getElementById('inicio')
    var p = Number(partida.value)
    partida = p
    var final = document.getElementById('fim')
    var f = Number(final.value)
    final = f
    var salto = document.getElementById('passo')
    var s = Number(salto.value)
    salto = s
    var resultado = document.getElementById('res')

    // if(partida.value.length == 0 || final.value.length == 0 || salto.value.length == 0){
    //     window.alert('[ERRO] Faltam dados!')
    // }else{
        
        var numeroAtual = partida
        if(partida < final){
            for (let i = numeroAtual; i <= final; i++){      
                resultado.innerHTML += `${numeroAtual} \u{1F449}`
                numeroAtual += salto
                i = numeroAtual
            }
        }else{
            for (let i = numeroAtual; i >= final; i-=salto){      
                resultado.innerHTML += `${numeroAtual} \u{1F449}`
                numeroAtual += salto
            }
        }       
        resultado.innerHTML += `\u{1F3C1}`
}