
    var partida = 1
    Number(partida.value)
    var final = 10
    Number(final.value)
    var salto = 2
    Number(salto.value)


    var numeroAtual = partida
    for (let i = numeroAtual; i <= final; i++){      
        console.log(`${numeroAtual}`)
        numeroAtual += salto
        i = numeroAtual
    }
