/**Criando uma função anônima */

//Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(3,5)

//Arrow functions, neste tipo de função a palavra function é substituída por =>
//Armazenando uma função arrow em uma variável
const soma = (a, b) =>  {
    return a + b
}
console.log(soma(3,4))

//retorno implícito com arrow functions
const subtracao = (a, b) => a - b
console.log(subtracao(10, 7))

//arrow com um único parâmetro
const imprimir = a => console.log(a) 
imprimir('Olar!!')