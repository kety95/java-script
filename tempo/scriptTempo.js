//outro
function tempo(){
    var opcao = document.getElementById('tempo1')
    var img = document.getElementById('imagem')

    if(opcao.value == 'Ensolarado'){
        img.src = 'https://images.pexels.com/photos/7790347/pexels-photo-7790347.jpeg?auto=compress&cs=tinysrgb&w=300'
        document.body.style.background = '#EDAD65'
    }else if(opcao.value == 'Nublado'){
        img.src = 'https://images.pexels.com/photos/12166201/pexels-photo-12166201.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
        document.body.style.background = '#649CB8'
    }else if(opcao.value == 'Chuvoso'){
        img.src = 'https://images.pexels.com/photos/5264122/pexels-photo-5264122.jpeg?auto=compress&cs=tinysrgb&w=1600'
        document.body.style.background = '#B9B9B9'
    }else{
        window.alert("Escolha uma opção válida: Chuvoso, Nublado ou Ensolarado!")
    }
}