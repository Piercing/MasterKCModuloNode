/**
 * Created by Piercing on 20/9/15.
 */

"use strict";

// hacer una función que devuelve otra
// la segunda tendrá acceso al scope de la función que la creo, su madre
function creaClosure (name){
    return function(){
        console.log(name);
    }
};

// creamos el closure
var closure = creaClosure('tesla');
var closure2 = creaClosure('tesla2');

// usamos el closure
closure();
closure2();