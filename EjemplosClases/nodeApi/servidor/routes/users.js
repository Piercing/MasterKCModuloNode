"use strict";


/**
 * ********************* ESTO SERÍA UN CONTROLADOR EN UNA APP MVC *********************
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
router.get('/:id', function (req, res, next) {

    console.log('params', req.params);
    console.log('quey', req.query);

    // gurado el parámetro que me devuelve id en router.get (el request)
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


