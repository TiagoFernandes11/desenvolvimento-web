// não aceita repetição e não é indexada
const squads = new Set();
squads.add("Corinthians");
squads.add("Palmeiras");
squads.add("São Paulo");
squads.add("Santos");
squads.add("Bragantino");
squads.add("Corinthians");

console.log(squads);
console.log(squads.size);
console.log(squads.has("Corinthians"));
