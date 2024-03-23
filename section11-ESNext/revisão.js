//Novas funções
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

//Melhorias nas notações literais
const nome = "Tiago";

const pessoa = {
  nome,
  ola() {
    return `${this.nome} diz Olá!`;
  },
};

console.log(pessoa.ola());

//Class
class Animal {
  constructor() {
    this.comer = () => console.log("Comendo");
  }
}

class Cachorro extends Animal {
  falar() {
    console.log("AU AU");
  }
}

let dog = new Cachorro();

dog.comer();
dog.falar();
