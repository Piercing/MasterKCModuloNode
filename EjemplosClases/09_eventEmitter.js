/**
 * Created by Piercing on 21/9/15.
 */
"use strict";

// eventEmmitter está en la librería 'event' del core de Node

var events = require('events');

// definimos un emisor de eventos
var myEventEmitter = new events.EventEmitter();

// le colgamos un evento
// le pasamos el parámetro quien llama
myEventEmitter.on ('suena telefono', function(quien){
    // si llama nuestra madre, pues que no suene jeje
    if(quien === 'madre'){
        return;
    }
    console.log('ring ring');
});

// le colgamos otro evento

myEventEmitter.on('suena telefono', function(quien){
    console.log('brr brr');
});

// lanzamos eventEmitter, podemos pasarle parámetros
myEventEmitter.emit('suena telefono','pepe');