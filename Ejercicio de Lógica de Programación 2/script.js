let gradosAConvertir = parseInt(prompt("Ingrese los grados Celsius a convertir en Fahrenheit y Kelvin"));

function conversionAFarenheit (){
    let formulaFarenheit = (gradosAConvertir * (9/5)) + 32
    return formulaFarenheit;
}

function conversionAKelvin (){
    let formulaKelvin = gradosAConvertir + 273
    return formulaKelvin;
}

console.log("Grados Fahrenheit: " + conversionAFarenheit());
console.log("Grados Kelvin: " + conversionAKelvin());
