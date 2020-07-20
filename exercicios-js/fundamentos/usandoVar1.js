{
    {
        {
            {
                var a = 123     //desta forma a variável é global
            }
        }
    }
}
console.log(a)

function teste() {
    var local = 1234
    console.log(local)
}
teste()
//console.log(local)    //neste caso a variável local não é visível
                        //pois foi criada dentro do escopo de uma função