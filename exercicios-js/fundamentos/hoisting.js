console.log('a = ', a)  //undefined
var a = 2
console.log('a = ', a)  //2

//devido ao hoisting a declaração de var irá ser puxada para o topo do código quando for interpretado
//hoisting apenas é valido para var

console.log('b = ', a)  //undefined
var b = 2
console.log('b = ', a)  
