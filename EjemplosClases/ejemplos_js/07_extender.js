/**
 * Created by Piercing on 20/9/15.
 */
"use strict";

var one = {
    id: 123,
    count: 41,
    desc: 'esto es la descripción'
};

var two = {
    name: 'El nombre',
    tag: 'js',
    values: [1, 2, 3]
};

var three = {
    count: 42,
    title: 'título',
    desc: null,
    values: [4, 5, 6]
};

// cargamos la librería util, hacemos el extend en dos pasos
var util = require('util');

var extend = util._extend;

// extendemos las propiedades de one a two
var _extendido = extend(one, two);

// extendemos las propiedades que ahora tiene _extendido a three
// se sobreescriben los valores machacando las propiedades
console.log(extend(_extendido, three));