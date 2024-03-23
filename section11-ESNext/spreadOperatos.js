//spread em objetos
const funcionario = {nome: "maria", salario: 12568.09}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//spread com array
const grupoA = ["José", "Maria", "Jesus"]
const grupoB = ["João", ...grupoA, "Tiago"]
console.log(grupoB)