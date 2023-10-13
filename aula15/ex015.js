let num = [5,2,3]
num[3] = 7
num.push(9)
console.log(num.length)
console.log(`${num}`)
num.sort()
console.log(num)

for(var i=0; i < num.length; i++){
    console.log(num[i])
}
for(var j in num){
    console.log(num[i])
}

var posicao = num.indexOf(5)
console.log(`O valor 5 está naposição ${posicao}`)
