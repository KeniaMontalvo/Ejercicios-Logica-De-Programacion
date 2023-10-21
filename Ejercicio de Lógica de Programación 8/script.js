// Solicitar al usuario 10 números y almacenarlos en un array
const numeros = [];
for (let i = 0; i <= 10; i++) {
    const numero = parseInt(prompt("Ingrese un número:"));
    numeros.push(numero);
    console.log(`pos[${i}] = ${numeros[i]}`);
}

// Se imprime el array tal cual lo ingresó el usuario
console.log("Array original:");
for (let i = 0; i < numeros.length; i++) {
    console.log(`pos[${i}] = ${numeros[i]}`);
}

// Verificar si un número es primo
function numPrimo(numero) {
    if (numero <= 1) {
        return false
    } else if (numero <= 3) {
        return true
    } else if (numero % 2 === 0 || numero % 3 === 0) {
        return false
    }

    // Inicia con i = 5 ya que se han visto los números anteriores y verifica números hasta i * i sea menor o igual a 'numero'.
    // Incrementa en 6 para rechazar los que son múltiplos de 2 y 3.
    for (let i = 5; i * i <= numero; i += 6) {

        // En cado caso que se pueda dividir los siguientes números en 0 o en 2, rechazarlos
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// Separar los números primos y no primos
const primos = [];
const noPrimos = [];
for (const numero of numeros) {
    if (numPrimo(numero)) {
        primos.push(numero);
    } else {
        noPrimos.push(numero);
    }
}

// Unir los números primos al principio del array
const arrayOrdenado = primos.concat(noPrimos);

// Imprimir el array con la posición y el valor
console.log("Array ordenado:");
for (let i = 0; i < arrayOrdenado.length; i++) {
    console.log(`pos[${i}] = ${arrayOrdenado[i]}`);
}