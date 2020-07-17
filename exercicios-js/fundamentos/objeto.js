const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40  //evitar notações onde as chaves tem nome com espaço 
//prod1['Desconto'] = 0.30

console.log(prod1)

/**NO exemplo abaixo temos uma chave obj dentro do objeto prod1, e dentro dela chave/objeto temos ainda uma
 * outra chave também nomeada obj, apesar de ambas estarem contidas dentro do objeto prod2, neste caso é permitido
 * já que para prod2, apenas uma chave nomeada obj existe.
 * NOTA: NÃO É PERMITIDO MAIS DE UMA CHAVE COM O MESMO NOME DENTRO DE UM OBJETO
 */
/**const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla : 1,
        obj: {
            blabla = 2
        }
    }
} */

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod2)

/**Caso fosse usar este mesmo exemplo como JSON seria algo como: */
//{"nome": "Camisa Polo","preco": 79.90}