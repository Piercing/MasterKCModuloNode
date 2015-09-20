/**
 * Created by Piercing on 20/9/15.
 */
"use strict";

var Persona = function (nombre, apell) {
    this.nombre = nombre;
    this.apellido = apell;
};

var trinity = new Persona('Trinity', 'Buscando a Neo');

// hacemos que Trinity herede se un objeto
// y después que herede del otro


// hacemos primero que coja propiedades con un mixin a continuación
var matrixMixin = {
    vuela: function () {
        console.log(this.nombre + ' ' + this.apellido + ' volando');
    },
    esquivaBalas: function () {
        console.log(this.nombre + ' esquiva balas');
    }
};

// importamos librería util
var util = require('util');

// extendemos al prototype Persona el mixin que acabamos de crear
Persona.prototype = util._extend(Persona.prototype, matrixMixin);

// instanciamos otro objeto Persona
var neo = new Persona('Neo ', 'El elegido');

// llamamos a los distintos métodos heredados mediante el mixin
neo.vuela();
trinity.vuela();

neo.esquivaBalas();
neo.vuela();

// NOTA: todos los objetos, tanto creados anteriormente como después,
// al extender a mixin heredarán todas las propiedades y métodos
// que definamos en miximin al extender éste al prototype Persona.
