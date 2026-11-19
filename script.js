/*
Ejercicio 1(Listas): Gestión de notas de una clase
Desarrolla un programa en JavaScript que permita gestionar las notas de
los alumnos de una clase mediante una lista (array) de tamaño variable.
El programa comenzará con una lista de notas vacía y mostrará un menú
interactivo que permita al usuario realizar diferentes operaciones sobre ella.
El menú deberá repetirse continuamente hasta que el usuario seleccione la
opción de salir. 
Opciones del menú
El programa deberá implementar las siguientes funcionalidades:
A. Introducir una nota al principio 
    a. Solicitar una nota al usuario.
window.prompt();
    b. Insertarla al principio de la lista.
window.prompt.notas.unshift("");
B. Introducir una nota al final
    a. Solicitar una nota al usuario.
window.prompt();
    b. Añadirla al final de la lista.
window.prompt.notas.push("");
C. Subir todas las notas X puntos
    a. Solicitar cuántos puntos se quieren sumar. ( debe ser notas menores de 10 porque si se pasa de 10 debe de dar un error )
window.prompt();
if notas =< 10{
 notas * 
} 
    b. Incrementar todas las notas de la lista en esa cantidad.
D. Calcular estadísticas actuales
    a. Mostrar las siguientes estadísticas:
console.table();
    b. Moda: nota que más veces aparece en la lista.
    c. Máximo: nota más alta.
console.log( Math.max(...notas));
    d. Mínimo: nota más baja.
console.log("notas min: " + Math.min(...notas));
    e. Media: promedio de todas las notas.
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}

let media = suma / notas
    f. En caso de que la lista esté vacía, se deberá informar al
usuario de que no es posible calcular las estadísticas.
alert.windows("la lista esta vacia");
notas.has("");

E. Vaciar notas
    a. Eliminar todos los elementos de la lista.
.delete();
    b. Mostrar un mensaje confirmando que la lista está vacía.
alert.windows("la lista esta vacia");
notas.has("");
F. Inicializar N notas a valor X
    a. Solicitar al usuario el número de notas que desea generar.
    window.prompt();
    .fill()
    b. Solicitar el valor que tendrán todas esas notas.

    c. Sustituir el contenido actual de la lista por las nuevas notas.
    
G. Eliminar la primera nota
    a. Eliminar el primer elemento de la lista.
notas.shift();
    b. Informar si la lista estaba vacía.
    alert.windows("la lista esta vacia");
    notas.has("");
H. Eliminar la segunda nota
    a. Eliminar el segundo elemento de la lista.
    notas.splice(2,1);
    b. Comprobar que existe una segunda nota antes de eliminarla.
    notas.has("");
I. Establecer a 0 todos los suspensos
    a. Recorrer la lista.
    for notas of notas
    b. Sustituir por 0 todas las notas inferiores a 5.

J. Sustituir una nota por otra
    a. Solicitar una nota de origen y otra de destino.
    b. Sustituir todas las apariciones de la nota de origen por la nota
    de destino.
    c. Por ejemplo: sustituir todos los 5 por 6
K. Añadir una nota en una posición determinada
    a. Solicitar una nota.
     window.prompt();
    b. Solicitar la posición en la que se desea insertar.
     window.prompt();
    c. Insertar la nota en esa posición, desplazando los elementos
    .add
    posteriores.
L. Contar el número de suspensos
    a. Recorrer la lista.
    for notas of notas
    contador = 0;
    contador++;
    b. Contar cuántas notas son inferiores a 5.
    if notas < 5 {
    console.log("notas inferiores a 5 son : ")
    }
    c. Mostrar el número total de suspensos.
    suspensos = 0;
    console.log("el total de suspensos es : ")
M. Salir: Finalizar la ejecución del programa
*/
let notas = [];
let opcion = "";

while (opcion !== "M") {
    opcion = window.prompt(
        "MENU DE NOTAS\n" +
        "A. Introducir una nota al principio\n" +
        "B. Introducir una nota al final\n" +
        "C. Subir todas las notas X puntos\n" +
        "D. Calcular estadistica\n" +
        "E. Vaciar notas\n" +
        "F. Inicializar N notas a valor X\n" +
        "G. Eliminar primera nota\n" +
        "H. Eliminar segunda nota\n" +
        "I. Establecer a 0 los suspensos\n" +
        "J. Sustituir una nota por otra\n" +
        "K. Añadir nota en una posicion\n" +
        "L. Contar suspensos\n" +
        "M. Salir"
    );

    switch (opcion) {

        case "A":
            let nota = window.prompt("introduce una nota");
            notas.unshift(nota);

            console.table(notas);
            break;

        case "B":
            let nota2 = window.prompt("introduce una nota");
            notas.push(nota2);

            console.table(notas);
            break;

        case "C":
            let notas3 = window.prompt("caunto te quieres subir ");
            let correcto = true;

            for (let i = 0; i < notas.length; i++) {
                if (notas[i] + notas3 > 10) {
                    correcto = false;
                }
            }
            if (correcto && notas3 >= 0) {
                for (let i = 0; i < notas.length; i++) {
                    notas[i] = notas[i] + notas3;
                }
                console.table(notas);

            } else {
                console.log("errorr la nota supera el 10 debes poner una menor");
            }
            break;

        case "D":

            if (notas.length == 0) {
                console.log("la lista esta vacia");

            } else {
                console.table(notas);

                console.log("nota maxima: " + Math.max(...notas));
                console.log("nota minima: " + Math.min(...notas));

                let suma = 0;
                for (let i = 0; i < notas.length; i++) {
                    suma = suma + notas[i];
                }

                let media = suma / notas.length;
                console.log("la media esa:  " + media);

                let moda = notas[0];
                let cantidad = 0;

                for (let i = 0; i < notas.length; i++) {
                    let contador = 0;

                    for (let j = 0; j < notas.length; j++) {
                        if (notas[i] == notas[j]) {
                            contador++;
                        }
                    }

                    if (contador > cantidad) {
                        cantidad = contador;
                        moda = notas[i];
                    }
                }

                console.log("la moda es: " + moda);
            }

            break;


        case "E":

            notas = [];
            console.log("la lista esta vacia");
            console.table(notas);

            break;


        case "F":
            let cantidad = window.prompt("Cuantas notas quieres poner");
            let valor = window.prompt("Que valor tendran las notas");
            for (let i = 0; i < cantidad; i++) {

                notas.push(valor);
            }

        case "G":
            if (notas.length == 0) {
                console.log("la lista esta vacia");
            } else {
                notas.shift();
                console.table(notas);

            }

            break;

        case "H":
            if (notas.length < 2) {
                console.log("No existe una segunda nota");
            } else {

                notas.splice(1, 1);
                console.table(notas);

            }

            break;

        case "I":

            for (let i = 0; i < notas.length; i++) {
                if (notas[i] < 5) {
                    notas[i] = 0;
                }

            }

            console.table(notas);
            break;

        case "J":
            let nota_origen = window.prompt("que nota quieres sustituir");
            let nota_destino = window.prompt("que nota quier4es");

            for (let i = 0; i < notas.length; i++) {
                if (notas[i] == nota_origen) {
                    notas[i] = nota_destino;
                }
            }

            console.table(notas);

            break;


        case "K":
            let nota4 = window.prompt("introduce una nota");
            let posicion = window.prompt("en que posicion quieres ponerla");

            notas.splice(posicion, 0, nota4);
            console.table(notas);

            break;


        case "L":
            let suspensos = 0;

            for (let i = 0; i < notas.length; i++) {
                if (notas[i] < 5) {
                    suspensos++;
                }

            }

            console.log("el total de suspensos es: " + suspensos);
            break;


        case "M":
            console.log("saliendo del programa");
            exit();
            break;


        default:
            console.log("opcion incorrecta");
            break;

    }
}
