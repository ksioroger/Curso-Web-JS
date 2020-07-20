var numero = 1
{
    var numero = 2
    console.log('Dentro: ', numero)
}

console.log('Fora: ', numero)

/**Neste exemplo o var pode ser utilizado para redeclarar a mesma variável, e pelo seu tipo de funcionamento
 * permite que se sobrescreva a variável e alterando o seu valor, aliás mesmo alterando o valor dentro do
 * bloco a alteração tem valor global 
 */