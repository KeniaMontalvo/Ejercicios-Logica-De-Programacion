let numeroFactorial;

do {
    //el usuario debe de ingresar el número
    numeroFactorial = parseInt(prompt("Ingrese el número del 1 al 10"));

    //verificar si es un número válido
    if (!isNaN(numeroFactorial) && numeroFactorial >=1 && numeroFactorial <=10){
        break;
    } else {
        alert("Ingrese un número válido del 1 al 10");
    }
} while (true);

//cálculo para el número factorial
let factorial = 1;
for (let i = 1; i <= numeroFactorial; i++){
    factorial *= i;
}

console.log(`El factorial de ${numeroFactorial} es ${factorial}`);