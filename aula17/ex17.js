let pessoa = {
    nome: 'Ketlyn', 
    sexo: 'F', 
    idade: 20,
    aniversario(){
        this.idade++
        return this.idade
    }
}
pessoa.aniversario()
console.log(pessoa.idade)