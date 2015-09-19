/**
 * Created by Piercing on 19/9/15.
 */

"use strict";

// le decimos a node que vamos a usar una librería HTTP

var http = require ('http');

// Creamos el servidor
var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end('<style>html {background-image: url("http://bit.do/wakeupneo")</style>');
});

// le decimos al sever por que puerto escucha y la IP
server.listen(2000, '127.0.0.1');// podemos poner "localhost" (127.0.0.1)

// dibujamos por consola a que dirección ha conectado
console.log('Servidor arrancado en http://127.0.0.1:2000');

// vamos a la consola y ejecutamos node index.js
// lo comprobamos también en el navegador escribiendo: "http://127.0.0.1:2000"