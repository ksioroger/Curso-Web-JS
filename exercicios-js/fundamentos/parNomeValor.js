//Par nome/valor
const saudacao = 'Opa'  //contexto léxico 1     contexto global

function exec(){
    const saudacao = 'Falaaa'   //contexto léxico 2     contexto de bloco de função
    return saudacao
}

//Objetos são grupos aninhados de pares chave ou nome/valor
//dentro de cliente poderia ter chaves com o nome saudacao e dentro do objeto endereco também de forma
//que um não iria interferir no outro
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)