/*Questão 1*/ 
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);


/* Questão 2 */

function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    while (b <= numero) {
        if (b === numero) {
            return true; // O número pertence à sequência de Fibonacci
        }
        
        let temp = a + b;
        a = b;
        b = temp;
    }

    return false; // O número não pertence à sequência de Fibonacci
}

// Número a ser verificado se está na sequência de Fibonacci
const numeroVerificar = 21; 

// Chamando a função para verificar se o número está na sequência de Fibonacci
const resultado = verificaFibonacci(numeroVerificar);

// Exibindo o resultado
if (resultado) {
    console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`);
}

/*Questão 5*/ 

function inverteString(str) {
    let resultado = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    return resultado;
}

// String a ser invertida
const stringOriginal = 'Eu gosto de fazer trilhas';


const stringInvertida = inverteString(stringOriginal);


console.log(stringInvertida); 
