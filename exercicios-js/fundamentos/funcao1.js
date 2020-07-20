//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a +b)
}

imprimirSoma(2, 3)
imprimirSoma(2)     /** É possível passar apenas um dos parâmetros, porém o segundo
                        será definido como  undefined, logo a soma de 2 + undefinid
                        será um NaN
                        */
imprimirSoma(2,3,4,5,6) //Vai somar os dois primeiros e ignorar os demais valores
imprimirSoma()          //vai definir os dois parâmetros como undefined e o retorno será um NaN

//Função com retorno
//Por padrão a variável b vale 0
function soma (a, b = 0) {
    return a + b
}

console.log(soma(3, 5))     //imprime a soma dos dois valores
console.log(soma(3))        //vai retornar o próprio valor já que por padrão o segundo valor é zerado evitando retornar um NaN
console.log(soma())         //vai retornar um NaN, já que o primeiro parâmetro não tem um valor padrão definido