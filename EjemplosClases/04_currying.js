/**
 * Created by Piercing on 20/9/15.
 */
"use strict";

function add(a, b) {
    if (arguments.length === 2) {
        return a + b;
        // funciones closures
    } else if (arguments.length === 1) {

        return function (incremento) {
            return a + incremento
        }
    } else {
        if (arguments.length === 0) {
            return function (min, max) {
                min = Math.round(Math.random() * 100);
                max = Math.round(Math.random() * 1000);
                a = min;
                b = max;
                return a + b;
            }
        }
    }
};


var suma6 = add(6); // función que suma 6 a lo que le pasemos
var random6 = add();


console.log(add(1, 2));
console.log(suma6(4));
console.log(random6(4, 100));