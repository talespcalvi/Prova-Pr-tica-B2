// Função que determina se o número é primo ou não

function determinarPrimo() {
    var numero = parseInt(prompt('Digite seu número'))

    if (numero < 2){
        alert( numero + " não é um número primo");
    return;
  } 
  for ( var i = 2; i <= Math.sqrt(numero); i++){
    if (numero % i === 0) {
        alert ( numero + " não é um número primo");
        return;
      } 
  }
  alert ( numero + " é um número primo")
  return;
}

// Função para listar os números primos de 1 a 1000

function listarPrimo() {
    var primos = [];

    for (var n = 1; n <= 1000; n++) {
        var primo = true;

        if (n < 2) {
            primo = false;
        } else {
            for (var i = 2; i <=  Math.sqrt(n); i++){
                if (n % i === 0) {
                    primo = false;
                    break;
                }
            }
        }
        if (primo) {
            primos.push(n);
        }
    }
    alert ("Os números primos de 1 a 1000 são: " + primos.join(","));
}

// Função para checagem de senha

function checarSenha() {
    var senha = prompt('Digite sua senha')

    if (senha.length < 8) {
        alert ("A senha deve possuir no mínimo 8 caracteres");
        return;
    }
    
    if (!/[A-Z]/.test(senha)) {
        alert ("A senha deve possuir no mínimo uma letra maiúscula");
        return;
    }

    if (!/[a-z]/.test(senha)) {
        alert ("A senha deve possuir no mínimo uma letra minúscula");
        return;
    }

    if (!/[0-9]/.test(senha)) {
        alert ("A senha deve possuir no mínimo um número");
        return;
    }

    alert ("Senha válida");
    return;
}

// Função para calcular fatorial 

function calcularFatorial {
    var numero = parseInt(prompt('Digite seu número'))

    function calcular(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            return numero * calcular(numero - 1);
        }
    }

    var fatorial = calcular(numero);
    alert ("O fatorial de " + numero + " é " + fatorial);
}