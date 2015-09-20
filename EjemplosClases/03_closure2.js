/**
 * Created by Piercing on 20/9/15.
 */

"use strict";

// hacer una función que devuelve otra
// la segunda tendrá acceso al scope de la función que la creo, su madre
function creaUsuario(name, edad) {
    var surName = 'Anderson';
    //var edad = 0;
    return {
        login: function () {
            console.log(name + ' ha hecho login');
            console.log(name + ' tiene ' + edad + ' años');
        },
        setName: function (newName) {
            name = newName;
        },
        getName: function (){
            return name;
        },
        logout: function () {
            console.log(name + ' he hecho logout');
        },
        getSurname: function () {
            return surName;
        },
        setEdad: function (newEdad) {
            edad = newEdad;
        },
        getEdad: function (){
            return edad;
        }
    };
}

// creamos el closure
var closureUser = creaUsuario('tesla', 25);

// usamos el closure
closureUser.setEdad(45);
console.log('cambio la edad de ' + closureUser.getName() + ' a ' + closureUser.getEdad() + ' años');
closureUser.login();
closureUser.setName('Neo');

//closureUser.logout();

// arrastramos el scope de lo que contiene creaUsuario,
// evitando así el uso de "this" al trabajar con closures.
setTimeout(closureUser.logout, 1000);


