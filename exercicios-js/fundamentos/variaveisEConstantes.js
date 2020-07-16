var a = 3
let b = 4

var a = 30      //permitido, var pode ser redeclarado 
//let b = 40        //esta linha gera erro, já que o let não permite redeclarar
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
//c = 50        //Esta linha gera erro, não se pode alterar valor de constante
console.log(c)
