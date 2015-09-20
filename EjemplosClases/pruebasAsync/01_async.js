/**
 * Created by Piercing on 20/9/15.
 */

"use strict";

// cargamos async
var async = require('async');

// definir un array
var arr = ['uno', 'dos', 'tres'];


// definir un iterador para ver que es lo que queremos
// hacer con cada uno de los elementos del array
var iterador = function (element, cb) {

    // Rodeamos nuestro código de algo asíncrono, por ejemplo
    // con setTimeout, o con algún process, ya que el código que utilizamos aquí
    // no es un código asíncrono, no hace procesos de I/O,
    // sólo está leyendo un array de datos aún devolviéndonos un callback.
    // Con esto también evitamos que si nuestro array es muy grande
    // el call stack de JS no se desborde almacenando en cola los procesos.
    // el event loop de JS irá leyendo en cada vuelta nuesro código sin
    // se produzca un desbordamiento en su cole stack.
    // para pocos elementos no haría falta rodearlo de una función asíncrona.

    // Si sólo quiero que me devuelva el primero y el tercero:
    setTimeout(function () {
        // si encuentra el elemento dos devuelve el callback vacío y continua con el resto.
        if (element === 'dos') {
            return cb(null); // si no queremos devolver nada como error ponemos null
        }
        element = element + '-procesado';
        cb(null, element);
        // nos asegura que termina y el código no va as seguir hacia abajo
        return;
    }, 0);

    // llamamos al cb, primero devolvemos el error
    // si no queremos devolver nada como error ponemos null
    //cb(null, element);
};

// procesar el array con la función async.concat
// itera el array concatenando los elemetos que tiene
// y el callback nos devuelve un array con dichos elementos
async.concat(arr, iterador, function (err, resultados) {
    // después de procesarlo, mostrar resultados
    console.log(resultados);
});




