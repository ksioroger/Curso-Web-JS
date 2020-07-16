let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)      //pode-se usar a dupla negação para converter um valor não booleano em booleano
//console.log(!isAtivo)

console.log('Os verdadeiros - Retornam true')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')  //espaço vazio
console.log(!![])   //array vazio
console.log(!!{})   //objeto literal ?
console.log(!!Infinity)     //tipo infinito
console.log(!!(isAtivo = true))     //neste exemplo ele esta testando o valor atribuído para a variável e não se a atribuição foi bem sucedida 

console.log('Os falsos - Retornam false')
console.log(!!0)
console.log(!!'')   //string vazia
console.log(!!null) //tipo nulo
console.log(!!NaN)  //not a number - algo que não é um número
console.log(!!undefined)    //indefinido 
console.log(!!(isAtivo = false))     //neste exemplo ele esta testando o valor atribuído para a variável e não se a atribuição foi bem sucedida 

//exemplo final
console.log('Para finalizar os exemplos')
console.log(!!('' || null || 0 || ' ')) //retorna true pois tem a última string com valor, mesmo sendo um valor vazio
//console.log(!!('' || null || 0 || 'teste'))
console.log(('' || null || 0 || 'teste'))   //neste exemplo ele retorna o único valor verdadeiro ou seja a string do final
console.log(('' || null || 0 || 'teste' || 12))     //apesar do valor 12 ser verdadeiro ele retorna apenas o primeiro verdadeiro, no caso a  string

//exemplo do uso do ou ||
let nome = ''
console.log(nome || 'Desconhecido')     //como a var nome é vazia ele imprime o conteúdo verdadeiro no caso o literal 'Desconhecido'