//A. Inscribir un participante
//    a. Solicitar el nombre de un participante.
//    b. Añadirlo al conjunto.
//    c. No permitir nombres duplicados.
//B. Dar de baja un participante
//    a. Solicitar un nombre.
//    b . Eliminarlo del conjunto si existe.
//    c. Informar si no se encuentra.
//C. Comprobar inscripción
//    a. Solicitar un nombre.
//    b. Indicar si está inscrito en la actividad.
//D. Mostrar participantes
//    a. Recorrer el conjunto y mostrar todos los participantes inscritos.
//    b. Mostrar el número total de participantes.
//E. Vaciar inscripciones: Eliminar todos los participantes del conjunto.


let participantes = new Set();
let opcion = "";

while (opcion !== "F") {
    opcion = window.prompt(
        "MENU PARTICIPANTES\n" +
        "A. Inscribir participante\n" +
        "B. Dar de baja a un participante\n" +
        "C. Comprobar inscripción\n" +
        "D. Mostrar participantes\n" +
        "E. Vaciar participantes\n" +
        "F. Salir"
    );


    switch (opcion) {
        case "A":
            let participante = window.prompt("introduce un participante");

            if (participantes.has(participante)) {
                console.log("el participante ya esta inscrito");
            } else {
                participantes.add(participante);
                console.log("participante inscrito");
            }

            console.table(participantes);
            break;

        case "B":
            let participante1 = window.prompt("dar de baja a un participante");

            if (participantes.delete(participante1)) {
                console.log("participante dado de baja");
            } else {
                console.log("no se ha encontrado el participante");
            }

            console.table(participantes);
            break;

        case "C":
            let participante2 = window.prompt("escribe un participante para comprobar la inscripcion");

            if (participantes.has(participante2)) {
                console.log("esta inscrito en la actividad");
            } else {
                console.log("no esta incrito en la actividad");
            }

            console.table(participantes);
            break;

        case "D":
            console.log("participantes incritos");
            participantes.forEach(function (nombre) {
                console.log(nombre);
            });

            console.log("total de participantes : " + participantes.size);

            console.table(participantes);
            break;

        case "E":
            participantes.clear();
            console.log("se ha vaciado todas las incripciones de los participantes");

            console.table(participantes);
            break;

        case "F":
            console.log("saliendo del programa");
            
            console.table(participantes);
            break;

        default:

            console.log("opcion incorrecta");

            console.table(participantes);
            break;
    }
}