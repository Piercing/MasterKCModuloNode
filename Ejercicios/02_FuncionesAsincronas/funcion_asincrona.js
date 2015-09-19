/**
 * Created by Piercing on 19/9/15.
 */

/**
 * ***********************FUNCIÓN ASÍNCRONA ***********************
 */

"use strict";

// tomo la hora local hh/mm/ss parseados a Integer
var Digital = new Date();
var hours = parseInt(Digital.getHours());
var minutes = parseInt(Digital.getMinutes());
var seconds = parseInt(Digital.getSeconds());

// muestro inicio bucle por consola
console.log('Comenzando bucle, ' + hora() + ' , espere cinco segundos... \n');

// función que devuelve la hora local
function hora() {
    return ('a las ' + hours + ' horas ' + minutes + ' minutos y ' + seconds + ' segundos');
};


// función escriboTras2Segundos devolviendo un callback
var escriboTras2Segundos = function (txt, cb) {
    setTimeout(function () {
        console.log('Esribiendo el texto pasados:');
        cb(txt);
    }, 5000);
};

// llamo a la función escritboTras2Segundos
escriboTras2Segundos('los segundos pasados son: ', function () {
    // hora actual transcurridos los tres segundos inciales
    var actualDate = new Date();
    var actualHour = parseInt(actualDate.getHours());
    var actualMinute = parseInt(actualDate.getMinutes);
    var actualSeconds = parseInt(actualDate.getSeconds());

    // comprobando si ha pasado alguna hora
    var booleanHour = function (beforeHour, afterHour) {
        if (beforeHour === afterHour) {
            return beforeHour;
        } else {
            return afterHour;
        }
    };

    // diferencia de tiempos en horas
    var diffHours = booleanHour(actualHour, hours);

    // comprobando si ha pasado algún minuto
    var booleanMinute = function (beforeMinutes, afterMinutes) {
        if (beforeMinutes === afterMinutes) {
            return beforeMinutes;
        } else {
            return afterMinutes;
        }
    };

    // diferencia de tiempos en minutos
    var diffMinutes = booleanMinute(actualMinute, minutes);

    //comprobando segundos pasados
    var booleanSeconds = function (beforeSeconds, afterSeconds) {
        if (beforeSeconds === afterSeconds) {
            return beforeSeconds;
        } else {
            var seconds2 = parseInt(actualDate.getSeconds());
            return seconds2;
        }
    };

    // diferencia de tiempos en segundos llamando a la función
    var diffSeconds = booleanSeconds(actualSeconds, seconds);

    // diferencia segundos sin llamar a la función
    var diffSeconds2 = (actualSeconds - seconds);

    // tiempo de espera
    var miliSeconds = 3000;
    // variable hh/mm/ss
    var actualDates = diffHours + ' horas ' + diffMinutes + ' minutos y ' + (diffSeconds + miliSeconds / 1000) + ' segundos.';
    // mostrando segundos transcurridos
    console.log(diffSeconds2 + ' segundos \n');
    // aviso cerrando bucle
    console.log('Cerrando el bucle, espere....');
    // mostrando tiempo transcurrido desde el inicio
    setTimeout(function () {
        console.log('Bucle cerrado a las ' + actualDates);
    }, miliSeconds);
});

