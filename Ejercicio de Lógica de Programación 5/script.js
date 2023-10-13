//crear un número random y después redondearlo
let numeroIngresado;
const numerosIntentados = [];

do{

    let numeroAleatorio = Math.floor(Math.random()*100) + 1;

    numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 100"));
    numerosIntentados.push(numeroIngresado);

    if(!isNaN(numeroIngresado) && numeroIngresado >= 1 && numeroIngresado <= 100){
        if (numeroIngresado === numeroAleatorio){
            alert("Felicidades, adivinaste el número secreto");
            break;
        } else {
            alert(`Ups, el número secreto era ${numeroAleatorio}, vuelve a intentarlo.`)
        }
    } else {
        alert("Por favor, ingresa un número válido del 1 al 100");
    }
} while (true)

alert("Lista de números intentados antes de adivinar el número secreto: " + numerosIntentados);


