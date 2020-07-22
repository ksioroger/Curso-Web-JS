console.log(typeof console)     //object

console.log(Math.ceil(6.1))     //teto de 6.1, ou seja 7

const obj1 = {}
obj1.nome = 'Bola'
obj1['nome2'] = 'Bola2'   //essa notação server para criar ou acessar um chave, principalmente em casos onde temos espaços no nome
console.log(obj1.nome)
console.log(obj1)

function Obj(nome){
    this.nome = nome            //criando atríbutos
    this.exec = function(){     //criando funções
        console.log('Exec ...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()