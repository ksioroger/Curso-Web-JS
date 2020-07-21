console.log(typeof Object)          //O retorno é uma function
/** Instânciando uma função, é como se estivesse chamando o construtor em Java*/
console.log(typeof new Object)      //O retorno é um object
console.log(typeof new Object())    //Tem o mesmo valor com ou sem parênteses 

const Cliente = function() {}
console.log(typeof Cliente)     //O retorno é function
console.log(typeof new Cliente) //retorna object

/**Criando classes em JS, possível à partir dor JS 2015 - ES6 */
class Produto {} 
console.log(typeof Produto)     //Classes em JS são function, então o retorno vai ser function
console.log(typeof new Produto) //o retorno é um object, lembrando que podia ser  new Produto()

