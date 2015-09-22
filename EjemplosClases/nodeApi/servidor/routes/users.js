"use strict";


/**
 * ********************* ESTO SERÍA UN CONTROLADOR EN UNA APP MVC *********************
 * ES EL INDEX DE NUESTRA URL
 */

// requiero express
var express = require('express');
// creo un objeto router
var router = express.Router();

/* GET users listing. */

//router.get('/', function (req, res, next) {
//    res.send('respond with a resource');
//});


// recibiendo parámetros con GET
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'KeepCoding Startup Engineering Master ',
        listaCursos: '<ol>' +
        '<li id="impar"><h3><a href="http://keepcoding.io/es/">Curso Git, Github, SourceTree</h3></a></li>' +
        '<li id = par><h3><a href="http://keepcoding.io/es/">Curso Node.JS</h3></a></li>' +
        '<li id = par><h3><a href="http://keepcoding.io/es/">Curso Fundamentos de Angular.JS</h3></a></li>' +
        '<li id = par><h3><a href="http://keepcoding.io/es/">Curso IOS Fundamentos</h3></a></li>' +
        '<li id = par><h3><a href="http://keepcoding.io/es/">Curso IOS Avanzdo</h3></a></li>' +
        '<li id = par><h3><a href="http://keepcoding.io/es/">Curso TDD para IOS</h3></a></li>' +
        '<li id = par><h3><a href="http://keepcoding.io/es/">Curso Swift para Programadores</h3></a></li>' +
        '</ol>',
        listaImpar: ['1. Curso Git, Github, SourceTree','3. Curso Fundamentos de Angular.JS',
            '5. Curso IOS Avanzdo', '7. Curso Swift para Programadores'],
        listaPar: ['2. Curso Node.js', '4. Curso IOS Fundamentos', '6. Curso TDD para IOS'],
        par: (new Date()).getSeconds() % 2 === 0 ? 'par' : 'impar',
        impar: (new Date()).getSeconds() % 2 !== 0 ? 'impar' : 'impar'
    })

    console.log('params', req.params);
    console.log('quey', req.query);

    // guardo el parámetro que me devuelve id en router.get (el request)
    var id = req.params.id;

    //guardo la edad del query-string (barra navegación en el navegador)
    var edad = req.query.edad;

    res.send('respond with a resource');
});


//petición POST con body
router.post('/:id', function (req, res) {
    console.log('body:', req.body);
    res.send('cogido el body!');
});

// devuelvo el router en el módulo
// app.js va a cargar este controlador
module.exports = router;


