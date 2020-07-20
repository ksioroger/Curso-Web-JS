const funcs = []    //podia ter sido declarado com var
for (let i = 0; i < 10 ; i++){
    funcs.push(function(){  //criando uma função anônima e armazenando na posição i do array
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

/**Neste exemplo será possível acessar os valores de i no momento em que o array recebeu os valores
 * ao criar a variável com let essa possíbilidade passou a existir já que let tem escopo de bloco
 */