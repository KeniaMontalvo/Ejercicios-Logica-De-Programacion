let fraseARevertir = prompt("Ingrese frase a revertir");

function revertirOracion (){

    //dividir la frase por letra
    let fraseSeleccionada = fraseARevertir.split("");

    //revertir la palabra
    let fraseRevertida = fraseSeleccionada.reverse();

    //reunir las palabras para que no regresen como objetos separados
    let fraseFinal = fraseRevertida.join("");

    return console.log(fraseFinal);
}

revertirOracion();