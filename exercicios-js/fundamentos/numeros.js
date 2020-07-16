const peso1 = 1.0
const peso2 = Number('2.0')     //Cast
/**Caso fosse peso1 = 1.1 ou peso2 = Number('2.1') os teste com inInteger abaixo retornariam false */
//Lembrando que o tipo Number abrange tanto inteiros quanto ponto flutuante

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / ( peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))  //permite escolher a quantidade e casas decimais que devem ser impressas

console.log(media.toString())  //converte em string
console.log(media.toString(2))  //converte em string, na verdade converte o valor em binário 

console.log(typeof media)   //retorna o tipo do dado como number
console.log(typeof Number)   //retorna o tipo do dado como function já que se trata de uma função

/**
 * number é um tipo
 * Number é uma função
 * 
 * Atenção ao N maiúsculo ou minúsculo que muda o tipo
 */

