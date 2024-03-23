//Exercicio 1
function soma(n1, n2) {
  return n1 + n2;
}

function subtracao(n1, n2) {
  return n1 - n2;
}

function divisao(n1, n2) {
  return n1 / n2;
}

function multiplicacao(n1, n2) {
  return n1 * n2;
}

function calcular(n1, n2, func) {
  console.log(func(n1, n2));
}

//Exercicio 2
function classificarTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return "Equilátero";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

//Exercicio 3
function exponential(n1, pwd) {
  let base = n1;
  let result = 1;
  if (pwd === 0) {
    return 1;
  }
  for (pwd; pwd > 0; pwd--) {
    result *= base;
  }
  return result;
}

//Exercicio 4
function dividirEImprimir(dividendo, divisor) {
  if (divisor === 0) {
    console.log("Erro: Divisão por zero!");
    return;
  }

  const resultado = Math.floor(dividendo / divisor);
  const resto = dividendo % divisor;

  console.log("Resultado da divisão:", resultado);
  console.log("Resto da divisão:", resto);
}

//Exercicio 5
function formatarDinheiro(valor) {
  const valorArredondado = Math.round(valor * 100) / 100;
  const valorFormatado = valorArredondado.toFixed(2);
  const valorFinal = valorFormatado.replace(".", ",");
  return `R$${valorFinal}`;
}

//Exercicio 6
function jurosSimples(inicial, taxa, tempo) {
  let final = inicial;
  for (let i = tempo; tempo > 0; tempo--) {
    final += (inicial * (taxa/100));
  }
  return parseFloat(final.toFixed(2))
}

function jurosComposto(inicial, taxa, tempo){
    let final = inicial;
    for(let i = tempo; tempo > 0; tempo--){
        final += final * (taxa / 100);
    }
    return parseFloat(final.toFixed(2))
}

// 07) Bhaskara
function calcularBhaskara(ax2, bx, c) {
    const delta = (bx ** 2) - (4 * ax2 * c);
    
    if (delta < 0) {
        return "Delta é negativo";
    } else {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        return [x1, x2];
    }
}

// 08) Comparar Pontuações
function compararPontuacoes(pontuacoes) {
    const pontuacoesArray = pontuacoes.split(' ').map(Number);
    let recordeMaximo = pontuacoesArray[0];
    let recordeMinimo = pontuacoesArray[0];
    let contadorRecordeMaximo = 0;
    let indicePiorJogo = 0;

    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (pontuacoesArray[i] > recordeMaximo) {
            recordeMaximo = pontuacoesArray[i];
            contadorRecordeMaximo++;
        } else if (pontuacoesArray[i] < recordeMinimo) {
            recordeMinimo = pontuacoesArray[i];
            indicePiorJogo = i;
        }
    }

    return [contadorRecordeMaximo, indicePiorJogo + 1];
}

// 09) Classificar Nota
function classificarNota(nota) {
    if (nota < 38) {
        return nota;
    } else {
        const proximoMultiploDeCinco = Math.ceil(nota / 5) * 5;
        if (proximoMultiploDeCinco - nota < 3) {
            return proximoMultiploDeCinco;
        } else {
            return nota;
        }
    }
}

// 10) Verificar Divisibilidade por 3
function verificarDivisibilidadePorTres(numero) {
    return numero % 3 === 0;
}

// 11) Ano Bissexto
function ehAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// 12) Calcular Fatorial
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// 13) Verificar Dia Útil
function verificarDiaUtil(numeroDoDia) {
    switch (numeroDoDia) {
        case 1:
        case 7:
            return "Fim de semana";
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil";
        default:
            return "Dia inválido";
    }
}

// 14) Verificar Fruta
function verificarFruta(fruta) {
    switch (fruta) {
        case "maçã":
            return "Não vendemos esta fruta aqui";
        case "kiwi":
            return "Estamos com escassez de kiwis";
        case "melancia":
            return "Aqui está, são 3 reais o quilo";
        default:
            return "Erro: Fruta não reconhecida";
    }
}

// 15) Comprar Carro
function comprarCarro(modeloDesejado) {
    switch (modeloDesejado) {
        case "hatch":
            return "Compra efetuada com sucesso";
        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            return "Tem certeza que não prefere este modelo?";
        default:
            return "Não trabalhamos com este tipo de automóvel aqui";
    }
}

// 16) Calculadora
function calculadora(numero1, operacao, numero2) {
    switch (operacao) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
        default:
            return "Operação inválida";
    }
}

// 17) Novo Salário
function calcularNovoSalario(plano, salarioAtual) {
    switch (plano) {
        case "A":
            return salarioAtual * 1.1;
        case "B":
            return salarioAtual * 1.15;
        case "C":
            return salarioAtual * 1.20;
        default:
            return "Plano inválido";
    }
}

// 18) Escrever por Extenso
function escreverPorExtenso(numero) {
    switch (numero) {
        case 0:
            return "Zero";
        case 1:
            return "Um";
        case 2:
            return "Dois";
        case 3:
            return "Três";
        case 4:
            return "Quatro";
        case 5:
            return "Cinco";
        case 6:
            return "Seis";
        case 7:
            return "Sete";
        case 8:
            return "Oito";
        case 9:
            return "Nove";
        case 10:
            return "Dez";
        default:
            return "Número fora do intervalo";
    }
}

// 20) Notas para Cédulas
function notasParaCedulas(valor) {
    let notas = [100, 50, 10, 5, 1];
    let resultado = '';

    for (let i = 0; i < notas.length; i++) {
        let qtdNotas = Math.floor(valor / notas[i]);
        valor %= notas[i];
        if (qtdNotas > 0) {
            resultado += `${qtdNotas} nota(s) de R$ ${notas[i]}. `;
        }
    }

    return resultado;
}

// 21) Valor Plano de Saúde
function calcularValorPlanoSaude(idade) {
    let valorBase = 100;

    if (idade < 10) {
        return valorBase - 20;
    } else if (idade >= 10 && idade <= 30) {
        return valorBase - 50;
    } else if (idade > 30 && idade <= 60) {
        return valorBase - 5;
    } else {
        return valorBase + 30;
    }
}

// 22) Calcular Valor Anuidade
function calcularValorAnuidade(mes, valorAnuidade) {
    let mesesDecorridos = mes - 1;
    let valorTotal = valorAnuidade * Math.pow(1 + 0.05, mesesDecorridos);
    return valorTotal.toFixed(2);
}

// 23) Média Ponderada Aluno
function calcularMediaPonderadaAluno(codigo, nota1, nota2, nota3) {
    while (codigo >= 0) {
        let notas = [nota1, nota2, nota3];
        notas.sort((a, b) => b - a);

        let media = (4 * notas[0] + 3 * (notas[1] + notas[2])) / 10;

        console.log(`Código do Aluno: ${codigo}`);
        console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
        console.log(`Média: ${media.toFixed(2)}`);
        
        if (media >= 5) {
            console.log("APROVADO\n");
        } else {
            console.log("REPROVADO\n");
        }
        
        // Solicita novo código
        codigo = parseInt(prompt("Digite o código do aluno (negativo para sair):"));
        if (codigo >= 0) {
            // Solicita novas notas
            nota1 = parseFloat(prompt("Digite a primeira nota:"));
            nota2 = parseFloat(prompt("Digite a segunda nota:"));
            nota3 = parseFloat(prompt("Digite a terceira nota:"));
        }
    }
}

// 24) Imprimir Frase com while
function imprimirFraseHelloWorld() {
    let contador = 0;
    while (contador < 11) {
        console.log("Hello World!");
        contador++;
    }
}

// 25) Exibir Números de 1 a 50
function exibirNumeros() {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
}

// 26) Encontrar Números Pares de 1 a 100
function encontrarPares() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

// 27) Crescimento das Crianças
function calcularCrescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    let anos = 0;
    if (altura1 < altura2 && taxaCrescimento1 > taxaCrescimento2) {
        while (altura1 <= altura2) {
            altura1 += taxaCrescimento1;
            altura2 += taxaCrescimento2;
            anos++;
        }
        return anos;
    } else if (altura1 > altura2 && taxaCrescimento1 < taxaCrescimento2) {
        while (altura2 <= altura1) {
            altura1 += taxaCrescimento1;
            altura2 += taxaCrescimento2;
            anos++;
        }
        return anos;
    } else {
        return "Não ultrapassará";
    }
}

// 28) Contar Números Pares e Ímpares
function contarParesEImpares(vetor) {
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log(`Pares: ${pares}, Ímpares: ${impares}`);
}

// 29) Contar Números no Intervalo
function contarNumerosNoIntervalo(vetor) {
    let dentroIntervalo = 0;
    let foraIntervalo = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }
    console.log(`Dentro do intervalo: ${dentroIntervalo}, Fora do intervalo: ${foraIntervalo}`);
}

// 30) Encontrar Maior e Menor Valor em Vetor
function encontrarMaiorMenorValor(vetor) {
    let maior = vetor[0];
    let menor = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    console.log(`Maior valor: ${maior}, Menor valor: ${menor}`);
}

// 31) Contar Números Negativos
function contarNegativos(vetor) {
    let negativos = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++;
        }
    }
    console.log(`Quantidade de números negativos: ${negativos}`);
}

// 32) Calcular Média Aritmética
function calcularMediaAritmetica(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma / vetor.length;
}

// 33) Concatenar Vetores
function concatenarVetores(vetorInteiro, vetorString, vetorDouble) {
    let resultado1 = vetorInteiro.concat(vetorString, vetorDouble);
    let resultado2 = [].concat(vetorInteiro, vetorString, vetorDouble);
    console.log("Resultado 1:", resultado1);
    console.log("Resultado 2:", resultado2);
}

// 34) Verificar se Caracteres estão Contidos em Ambas as Palavras
function caracteresContidos(palavra1, palavra2) {
    palavra1 = palavra1.toLowerCase();
    palavra2 = palavra2.toLowerCase();
    return [...new Set(palavra1)].every(char => palavra2.includes(char)) && [...new Set(palavra2)].every(char => palavra1.includes(char));
}

// 35) Adicionar Valores de um Vetor em Outro
function adicionarValores(vetorPilha, vetorAdiciona) {
    vetorAdiciona.forEach(elemento => {
        vetorPilha.push(elemento);
    });
    console.log("Vetor Pilha após adição:", vetorPilha);
}

// 36) Multiplicar Elementos de um Vetor por um Número
function multiplicarPorNumero(vetor, numero) {
    return vetor.map(elemento => elemento * numero);
}

// Função que multiplica por 2 apenas se o elemento for maior que 5
function multiplicarPorNumeroSeMaiorQue5(vetor, numero) {
    return vetor.map(elemento => elemento > 5 ? elemento * numero : elemento);
}

// 37) Progressão Aritmética e Geométrica
function progressaoAritmetica(n, a1, r) {
    let termos = [];
    let soma = 0;
    for (let i = 0; i < n; i++) {
        let termo = a1 + i * r;
        termos.push(termo);
        soma += termo;
    }
    console.log("Progressão Aritmética:", termos);
    console.log("Soma dos elementos:", soma);
}

function progressaoGeometrica(n, a1, r) {
    let termos = [];
    let soma = 0;
    for (let i = 0; i < n; i++) {
        let termo = a1 * Math.pow(r, i);
        termos.push(termo);
        soma += termo;
    }
    console.log("Progressão Geométrica:", termos);
    console.log("Soma dos elementos:", soma);
}

// 38) Imprimir Números Ímpares entre Dois Valores
function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio];
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// 39) Trocar Elementos de Vetores
function trocarElementos(vetorA, vetorB) {
    for (let i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]];
    }
    console.log("Vetor A após troca:", vetorA);
    console.log("Vetor B após troca:", vetorB);
}

// 40) Atribuir Conceitos às Notas
function atribuirConceitos(notas) {
    let conceitos = [];
    notas.forEach(nota => {
        if (nota >= 0 && nota <= 4.9) {
            conceitos.push("D");
        } else if (nota >= 5 && nota <= 6.9) {
            conceitos.push("C");
        } else if (nota >= 7 && nota <= 8.9) {
            conceitos.push("B");
        } else if (nota >= 9 && nota <= 10) {
            conceitos.push("A");
        }
    });
    return conceitos;
}


