function calcular(){
    var numero = document.getElementById('num')
    var taboada = document.getElementById('res')

    for(var i = 0; i <= 10; i++){
        resultado = numero * i
        taboada.innerHTML += `${numero} + ' x ' + ${i} + ${resultado}`
    }
}