let num1 = parseInt(prompt("Ingrese un número del 1 - 10"));
let num2 = parseInt(prompt("Ingrese un número del 1 - 10"));
let num3 = parseInt(prompt("Ingrese un número del 1 - 10"));

const numeros = [num1, num2, num3];

const numMayorAMenor = numeros;

numMayorAMenor.sort((a,b) => {
    return b - a
});
//devuelve de mayor a menor
console.log("Números de mayor a menor " + numMayorAMenor);

const numMenorAMayor = numeros;
//función de menor a mayor
numMenorAMayor.sort((a,b) => {
    return a - b
});
//devuelve de menor a mayor
console.log("Números de menor a mayor " + numMenorAMayor);