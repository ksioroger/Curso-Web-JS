const funcs = []    //podia ter sido declarado com var
for (var i = 0; i < 10 ; i++){
    funcs.push(function(){  //criando uma função anônima e armazenando na posição i do array
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

/**Neste exemplo independente de qual posição de funcs for acessada sempre o retorno vai ser 10
 * afinal ele é o valor de i quando saiu do loop, mesmo a função armazenada em func[x] ter sido criada
 * quando o i tinha outro valor
 */