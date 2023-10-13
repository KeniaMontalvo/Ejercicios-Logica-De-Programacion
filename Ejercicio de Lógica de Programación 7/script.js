function calcularMinutosParaFinDeSemana() {
    const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes"];

    // Se cambian los ingresos a minúsculas para que coincidan con el array
    const dia = prompt("Ingrese un día de la semana (Lunes - Viernes):").toLowerCase();

    // Método includes para revisar si existe un valor en dicho array
    if (!diasSemana.includes(dia)) {
        console.log("Día no válido. Ingrese un día de la semana válido.");

        //si no es un día válido se rehace la función
        calcularMinutosParaFinDeSemana();
        return;
    }

    const horaMinutos = prompt("Ingrese la hora en formato 'horas:minutos':");

    // Separamos lo ingresado con un :
    const [horas, minutos] = horaMinutos.split(":").map(Number);

    // Verificar si los ingresos son válidos
    if (isNaN(horas) || isNaN(minutos) || horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
        console.log("Hora no válida. Ingrese una hora en formato válido.");
        calcularMinutosParaFinDeSemana();
        return;
    }

    // Calcular los minutos hasta el fin de semana
    // Se usa el indexOf para saber en qué posición de la semana está actualmente para multiplicarlo por las 24 horas de cada día que faltan para llegar al fin de semana
    const minutosActuales = (diasSemana.indexOf(dia) * 24 * 60) + (horas * 60) + minutos;
    const minutosParaFinDeSemana = ((4 * 24 * 60) + (15 * 60)) - minutosActuales;

    console.log(`Faltan ${minutosParaFinDeSemana} minutos para el fin de semana`);
}

calcularMinutosParaFinDeSemana();
