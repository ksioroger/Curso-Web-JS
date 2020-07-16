const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
    /**template string permite que se pule linha na construção de
     * uma string por exemplo e que isto seja interpretado dentro da string */

console.log(concatenacao, template)

//Expressões utilizando template string
console.log(`1 + 1 = ${1+1}`)


//Arrow function
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`);