/**
 * Created by macbookpro on 20/9/15.
 */
"use strict";

"use strict";

// creamos un constructor de objetos
// todos los objetos que creemos tendrán nombre
var Persona = function (name){
    this.name = name;
};

// con el constructor creamos objetos

var persona = new Persona('Thomas');


// le asignamos un método al objeto
// el this hace referencia a Persona
// que tiene la propiedad name
persona.saluda = function(){
    console.log ('Hola soy ' + this.name);
};

persona.saluda();

//creamos otro objeto

var carlos = new Persona('Carlos');

// veremos que éste no tiene el método
// en carlos.saluda() no existe la función saluda()
//carlos.saluda();

// ponerle un método al prototipo que es Persona
// lo que hacemos es añadirle al prototype Persona
// el método come(). ya que en el constructor no lo tiene
// los añade a todos los objetos creados y que creemos
Persona.prototype.come = function(){
console.log('ñam ñam');
};

Persona.prototype.duerme = function(){
    console.log('ZZzzzzz ~~~');
};

//y veremos que lo tienen todos

persona.come();
carlos.come();
carlos.duerme();