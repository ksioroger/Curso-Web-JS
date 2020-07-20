let valor   //não inicializada 
console.log(valor)  //retorna undefined

valor = null    //ausência de valor
console.log(valor)
//console.log(valor.toString())   //erro

const produto = {}
//console.log(produto)        //retorna um objeto vazio
//console.log(produto.preco)  //retorna um undefined já que o produto ao menos foi criado
//console.log(produto.preco.a)    //erro, não se pode ler uma propriedade de algo undefined (no caso o produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //não atribuir undefined 
console.log(!!produto.preço)        //false
console.log(produto)        //retorna um objeto com a chave preço definida como undefined
delete produto.preco        //forma correta de remover um atríbuto de um objeto, ao invés de atribuir undefined    
console.log(produto)

produto.preço = null        //sem preço
                            /**forma de dizer por exemplo que este é um preço invalido, poderia ter utilizado 
                            uma atribuição de -1 para definir como um preço nulo, já que o zero geralmente
                            se usa para definir o preço de algo gratuito */
console.log(!!produto.preco)    //exemplo de uma forma de testar se um preço foi setado
console.log(produto)        
