const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //retorna undefinied já que não existe elemento no índice 4
valores[4] = 1
console.log(valores[4])

console.log(valores.length)     //retorna o tamanho do array, no caso o valor será 5

valores[10] = 1 //neste caso será pulado as posições e ir diretamente para a posição 10 do array
console.log(valores)        //irá informar que existem 5 posições/elementos vazios e imprimir os que contém valores

console.log(valores.length)     //retorna o tamanho do array, no caso o valor será 11

valores.push({id: 3}, false, null, 'teste') //permite acrescentar diversos tipos de dados por ser uma linguagem fracamente tipada
console.log(valores)

valores.pop()       //remove o último item do array
console.log(valores)
delete valores[0]    //permite remover um item da posição X do array
console.log(valores)


console.log(typeof valores)     //retorna object