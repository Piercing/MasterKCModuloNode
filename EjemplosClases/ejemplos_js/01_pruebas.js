"use strict";
/*

var Coche = function (name) {// función como expresión
    this.name = name;
    this.saluda = function () {// método saluda
        console.log('Hola soy ' + this.name);
    }
};

var tesla = new Coche('tesla');// instanciamos objeto tesla

var Planta = function (name) {// función como expresión
    this.name = name;
    this.crece = tesla.saluda;// reutilizo el método saluda de tesla
    this.crece1 = function () {// creo otro método que reutiliza también el método saluda
        tesla.saluda();
    }
}

// Creamos un objeto


// LLamamos al método

//tesla.saluda();
//console.log(tesla.name);

// Otro llama al método
// se la paso primero como parámetro, no como función, sin () y sin bind,
// después se la paso con bind que va a usar tesla como this a la hora de llamarle
//setTimeout(tesla.saluda.bind(tesla), 1000);

var planta = new Planta('flor');// instancio el objeto planta

console.log(planta.name);// pinto el nombre que recibe planta

planta.crece();// llamo al método de planta crece(), que reutiliza el método saluda del objeto tesla de Coche
// y el método saluda de Coche llama a una función que pinta el nombre que recibe planta al instanciarse ('flor') en this.name
planta.crece1();// llamo al método de planta crece1(), este a su vez llama al método saluda() de el objeto tesla de Coche,
// el cual de nuevo pinta el nombre que recibe planta al instanciarse ('flor') en this.name.
*/

function Coche() {
    this.ruedas = 4;
    this.logRuedas = function() {
        console.log('tiene ' + this.ruedas);
    }
}
var coche = new Coche();
console.log(coche.ruedas); // 4
coche.logRuedas(); // tiene 4
setTimeout(coche.logRuedas.apply(coche), 1000); // tiene undefined