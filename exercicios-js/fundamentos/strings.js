const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5))   //Não irá retornar um erro, apenas um retorno vazio
console.log(escola.charCodeAt(3))   //retorna o código ascii em html
console.log(escola.indexOf('p'))    //busca se existir o valor dentro da string e retorna sua posição, caso contrário -1
console.log(escola.substring(1))    //imprime a partir da posição 1
console.log(escola.substring(0,3))  //imprime da posição zero até a posição 3 sem incluir a terceira posição 
console.log('Escola '.concat(escola).concat("!")) 
console.log('Escola '+escola+"!")
console.log(escola.replace(3, 'e'))     //realiza a troca do 3 por e, caso o 3 não for encontrado nada é feito

//regex
console.log(escola.replace(/\d/, 'e'))  //substitua todas os números pela letra e - isto é uma expressão regular
console.log(escola.replace(/\w/, 'e'))  //substitua a primeira letra ou número pela letra e
console.log(escola.replace(/\w/g, 'e'))  //substitua todas letras ou números pela letra e

/********************/
console.log('Ana,Carla,Claúdio'.split(','))  //converte os elementos em um array através do separador ','
console.log('Ana,Carla,Claúdio'.split(/,/))  //mesma função mas com regex
