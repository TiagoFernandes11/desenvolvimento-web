//processando templates dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return "Outra string"
}

const aluno = "Tiago"
const situacao = "Aprovado"

console.log(tag `${aluno} esta ${situacao}.`)