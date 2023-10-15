function calcular(){
    var numero = document.getElementById('num')
    var taboada = document.getElementById('res')

    if(numero.value.length == 0){
        alert('Por favor digite um número!')
    }else{
        var n = Number(numero.value)
        numero = n
        taboada.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            let item = document.createElement('option')
            var resultado = numero * i
            item.text = `${numero} x ${i} = ${resultado}`
            item.value = `taboada${i}`     
            taboada.appendChild(item)
        }
    }
}