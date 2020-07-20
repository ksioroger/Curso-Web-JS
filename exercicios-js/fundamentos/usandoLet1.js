/**Neste exemplo o let tem escopo de bloco, neste cado então temos duas variáveis numero,
 * a primeira é global e vale 1 e a segunda é do bloco e vale 2
 */
var numero = 1
{
    let numero = 2
    console.log('Dentro: ', numero)
}
console.log('Fora: ', numero)

/**Neste exemplo como ele não encontra a variável no bloco onde esta 
 * ele olha para fora para ver se a variável existe globalmente
 */
var numero = 1
{
    let numero2 = 2
    console.log('Dentro: ', numero)
}
console.log('Fora: ', numero)
