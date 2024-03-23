import http from "http";

const getTurma = (letra, callback) => {
  const url = "http://files.cod3r.com.br/curso-js/turmas" + letra + ".json";
  http.get(url, (res) => {
    let result = "";

    res.on("data", (dados) => {
      result += dados;
    });

    res.on("end", () => {
      callback(result);
    });
  });
};

let nomes = []
getTurma("A", alunos => {
    console.log(alunos);
})
