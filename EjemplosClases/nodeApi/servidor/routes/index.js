/**
 * ********************* ESTO SERÍA UN CONTROLADOR EN UNA APP MVC *********************
 *  * ES EL INDEX DE NUESTRA URL
 */

/**
 * TODOS ESTOS SON MIDDLEWARE A NIVEL DE ROUTER
 */
var express = require('express');
// creo un objeto router
var router = express.Router();

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
});

/* GET home page. */
router.get('/list', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


// devuelvo el router en el módulo
// app.js va a cargar este controlador
module.exports = router;
