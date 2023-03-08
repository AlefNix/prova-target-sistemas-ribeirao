// Os "console.log(" ")" são apenas para melhorar o visual do console

// Questão 1
// Código original em C, resolvido e executado em: http://codepad.org/L48h50SQ
// Adaptado para javascript a baixo

let main = () => {
    let indice = 13, soma = 0, k = 0;

    while(k < indice) {
        k = k + 1;

        soma = soma + k
    }
    console.log(`Resposta da questão 1:  ${soma};`);
    console.log(" ");
    return 0;
}

main();

// Questão 2

const fibonacci = [];
const confere = n => {
    if (n <= 1) {
      return n;
    }
     
    let a = 0, b = 1, c = 1;
    
    while (c < n) {
      c = a + b;
      fibonacci.push(c);
      a = b;
      b = c;
    }
    const verifica = fibonacci.includes(n) ? "pertence" : "não pertence";
    console.log(`O número ${n} ${verifica};`);
};

confere(35);

//Questão 3

// a) 1, 3, 5, 7, 9 -- de 2 em 2;
// b) 2, 4, 8, 16, 32, 64, 128 -- duplicando;
// c) 0, 1, 4, 9, 16, 25, 36, 49 -- somando os números ímpares na sequência;
// d) 4, 16, 36, 64, 100 -- Cada número é igual ao quadrado dos números pares da sequência, no caso o próximo é 10**2. 
// e) 1, 1, 2, 3, 5, 8, 13 -- somando os dois últimos números para obter o próximo
// f) 2, 10, 12, 16, 17, 18, 19 , 200 -- números que iniciam com a letra D


// Questão 4
// Se eles se cruzam estão na mesma distância de Ribeirão Preto e essa distância é de 60,9km
// A resolução está em uma foto no mesmo repositório dessa prova

// Questão 5
// Essa funcção vai calcular o tamanho da string e copiar pelo index do maior para o menor para criar a string inversa
function reverse() {
    let string = "Alef Bryan";
    let inverso = '';
    for (var i = string.length - 1; i >= 0; i--)
      inverso += string[i];
    console.log("");
    console.log("Questão 5:")
    console.log(inverso);
}

reverse();