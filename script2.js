//A. Añadir un libro
//    a. Solicitar ISBN, título, autor y número de ejemplares.
//    b. Añadir el libro al mapa.
//    c. Comprobar que el ISBN no exista previamente
//B. Eliminar un libro
//    a. Solicitar un ISBN.
//    b. Eliminar el libro si existe
//    c. Informar si no se encuentra.
//C. Consultar un libro
//    a. Solicitar un ISBN
//    b. Mostrar toda la información del libro.
//    c. Informar si no existe.
//D. Mostrar catálogo
//    a. Recorrer el mapa y mostrar todos los libros con sus datos.
//    b. Mostrar el número total de libros registrados.
//E. Modificar ejemplares
//    a. Solicitar un ISBN.
//    b. Solicitar una cantidad
//    c. Actualizar el número de ejemplares disponibles.
//F. Buscar libros de un autor
//    a. Solicitar el nombre de un autor.
//    b. Mostrar todos los libros escritos por ese autor.
//G. Prestar un libro
//    a. Solicitar el ISBN. 
//    b. Si existen ejemplares disponibles, restar uno
//    c. Si no quedan ejemplares, mostrar un mensaje indicándolo
//H. Devolver un libro
//    a. Solicitar el ISBN
//    b. Incrementar en uno el número de ejemplares disponibles.
//I. Mostrar estadísticas
//    a. Mostrar el número total de libros registrados.
//    b. Calcular el total de ejemplares disponibles.
//    c. Mostrar el libro con más ejemplares disponibles.
//J. Vaciar catálogo: Eliminar todos los libros del mapa.
//K. Salir: Finalizar el programa.

let biblioteca = new Map();
let opcion = "";

while (opcion !== "K") {
    opcion = window.prompt(
        "MENU BIBLIOTECA\n" +
        "A. Añadir un libro\n" +
        "B. Eliminar un libro\n" +
        "C. Consultar un libro\n" +
        "D. Mostrar catálogo\n" +
        "E. Modificar ejemplares\n" +
        "F. Buscar libros de un autor\n" +
        "G. Prestar un libro\n" +
        "H. Devolver un libro\n" +
        "I. Mostrar estadísticas\n" +
        "J. Vaciar catálogo\n" +
        "K. Salir"
    );

    switch (opcion) {
        case "A":
            let isbn = window.prompt("introduce el isbn");

            if (biblioteca.has(isbn)) {
                console.log("el libro existe");
            } else {
                let titulo = window.prompt("introduce el titulo");
                let autor = window.prompt("introduce el autor");
                let ejemplares = window.prompt("introduce el numero de ejemplares");

                biblioteca.set(isbn, {
                    titulo: titulo,
                    autor: autor,
                    ejemplares: ejemplares
                });

                console.log("libro añadido");
            }

            console.table(biblioteca);
            break;

        case "B":
            let isbn1 = window.prompt("introduce el isbn");

            if (biblioteca.delete(isbn1)) {
                console.log("libro eliminado");
            } else {
                console.log("el libro no existe");
            }

            console.table(biblioteca);
            break;

        case "C":
            let isbn2 = window.prompt("introduce el isbn");

            if (biblioteca.has(isbn2)) {
                console.log("informacion del libro:");
                console.log(biblioteca.get(isbn2));
            } else {
                console.log("el libro no existe");
            }

            console.table(biblioteca);
            break;

        case "D":
            biblioteca.forEach(function (libro, isbn) {
                console.log("isbn: " + isbn);
                console.log("titulo: " + libro.titulo);
                console.log("autior: " + libro.autor);
                console.log("ejemplares: " + libro.ejemplares);
            });

            console.log("total de libros es; " + biblioteca.size);
            console.table(biblioteca);
            break;

        case "E":
           let isbn3 = window.prompt("introduce el isbn");

            if (biblioteca.has(isbn3)) {
                let cantidad = window.prompt("introduce la cantidad");
                let libro = biblioteca.get(isbn3);
                libro.ejemplares = cantidad;

                console.log("ejemlares actualizados");

            } else {
                console.log("el libro no existe.");
            }

            console.table(biblioteca);
            break;

        case "F":
            let autor1 = window.prompt("introduce el autor");
            console.log("libro de ;" + autor1);

            biblioteca.forEach(function (libro, isbn) {
                if (libro.autor === autor1) {
                    console.log("isbn: " + isbn);
                    console.log("titulo: " + libro.titulo);
                    console.log("ejemplares: " + libro.ejemplares);
                }
            });

            break;

        case "G":
            let isbn4 = window.prompt("introduce el isbn");
            if (biblioteca.has(isbn4)) {
                let libro = biblioteca.get(isbn4);

                if (libro.ejemplares > 0) {
                    libro.ejemplares = libro.ejemplares - 1;
                    console.log("libro prestado correctamente");
                } else {
                    console.log("no quedan ejemplares");
                }
            } else {
                console.log("el libro no existe");
            }

            console.table(biblioteca);
            break;

        case "H":
            let isbn5 = window.prompt("introduce el isbn");
            if (biblioteca.has(isbn5)) {
                let libro = biblioteca.get(isbn5);
                libro.ejemplares = libro.ejemplares + 1;
                console.log("libro devuelto");
            } else {
                console.log("el libro no existe");
            }

            console.table(biblioteca);
            break;

        case "I":
            let total = 0;
            let duplicado = 0;
            let destacado = "";

            biblioteca.forEach(function (libro, isbn) {
                total = total + libro.ejemplares;

                if (libro.ejemplares > duplicado) {
                    duplicado = libro.ejemplares;
                    destacado = libro.titulo;
                }
            });

            console.log("total de libros; " + biblioteca.size);
            console.log("total de ejemplares: " + total);
            console.log("libro con mas ejemplares: " + destacado);
            console.log("numero de ejemplares; " + duplicado);

            break;

        case "J":
            biblioteca.clear();
            console.log("el catalogo esta vacio");

            console.table(biblioteca);
            break;

        case "K":
            console.log("saliendo del programa");

            console.table(biblioteca);
            break;

        default:
            console.log("opcion incorrecta");

            console.table(biblioteca);
            break;
    }
}
