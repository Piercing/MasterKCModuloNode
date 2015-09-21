/**
 * ********************* ESTO SERÍA UN CONTROLADOR EN UNA APP MVC *********************
 */

/**
 * TODOS ESTOS SON MIDDLEWARE A NIVEL DE ROUTER
 */
var express = require('express');
// creo un objeto router
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'KeepCoding',
        listaCursos: '<ol>' +
        '<li id="impar"><h2>Curso Git, Github, SourceTree</h2></li>' +
        '<li id = par><h2>Curso Node.js</h2></li>' +
        '</ol>',
        listaPar: ['1.-Curso Git, Github, SourceTree'],
        listaImpar: ['2.-Curso Node.js'],
        par: (new Date()).getSeconds() % 2 === 0 ? 'par' : 'impar'
    })
});

/* GET home page. */
router.get('/list', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


// devuelvo el router en el módulo
// app.js va a cargar este controlador
module.exports = router;
