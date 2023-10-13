//outro
function tempo(){
    var opcao = document.getElementById('tempo')
    var img = document.getElementById('imagem')

    if(opcao.value == 'Ensolarado'){
        img.src = 'https://images.pexels.com/photos/7790347/pexels-photo-7790347.jpeg?auto=compress&cs=tinysrgb&w=300'
        document.body.style.background = 'blue'

        // img.src = 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=300'
    }else if(opcao.value == 'Nublado'){
        img.src = 'https://images.pexels.com/photos/12166201/pexels-photo-12166201.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
    }else if(opcao.value == 'Chuvoso'){
        img.src = 'https://images.pexels.com/photos/7539498/pexels-photo-7539498.jpeg?auto=compress&cs=tinysrgb&w=300'

        // img.src = 'https://images.pexels.com/photos/194927/pexels-photo-194927.jpeg?auto=compress&cs=tinysrgb&w=300'
    }else{
        window.alert("Escolha uma opção válida: Chuvoso, Nublado ou Ensolarado!")
    }
}