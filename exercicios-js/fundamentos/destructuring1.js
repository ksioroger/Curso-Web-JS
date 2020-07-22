//Recurso disponível a partir de ES2015

const pessoa ={
    nome: 'Ana',
    idade: 28,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa    //usando destructuring posso receber os valores de nome e idade do objeto pessoa
console.log(nome, idade)

const{nome:n, idade:i} = pessoa     //similar ao modo anterior, mas aqui posso definir novos nomes de variável
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
/**por padrão ao tentar receber um valor de chave que não existe ele irá definir como undefined, mas é
 * possível definir um valor que seja standard para esses casos,como foi feito com a chave bemHumorada  */

const {endereco: {logradouro, numero, CEP}} = pessoa
console.log(logradouro, numero, CEP)
/*Para acessar um objeto dentro de outro objeto é necessário informar o nome do objeto seguido de : e somente
então acessar os valores das chaves deste objeto */

//const {conta: {ag, num}} = pessoa
//console.log(ag, num)
/*O código acima irá gerar um erro já que não se pode ler um valor de chaves de um objeto que não 
existe (undefined ou null) */