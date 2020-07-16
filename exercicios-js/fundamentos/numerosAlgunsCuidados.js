console.log(7 / 0.0001)

console.log(7 / 0)  //retorna um tipo infinto - infinity

console.log('10' / 2 )  /**retorna 5, JS irá analisar o conteúdo da string
                            e ver se pode ser convertido em valor, caso sim
                            ele irá realizar a operação, isso é possível por
                            ela ser uma linguagem fracamente tipada */

console.log('10,2' / 2 )  //vai retornar um NaN - not a number, não identifica como um número
console.log("Show!" * 2)  //Mesmo problema do exemplo de cima

console.log(0.1 + 0.7)  /**Não irá retornar 0.8, por conta de caso necessitar realizar esse
                            calculo corretamente se tornar uma instrução mais lenta 
                            Definido pelo IEEE*/

//console.log(10.toString())   
                                /**Não é possível realizar essa operação, apesar de ser permitida
                                com um number, não é permitida com um valor literal */

console.log((10).toString())
console.log((10).toFixed(2))
console.log((10.345).toFixed(2))
                            /**Não é possível chamar uma função de um literal diretamente, mas
                             * caso ele esteja entre parênteses é possível */