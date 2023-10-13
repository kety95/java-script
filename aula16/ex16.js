let v = function parimpar(n){
    if (n%2 == 0) {
        return 'Par'
    }else{
        return 'ímpar'
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(i + ' ' + v(i))
}
