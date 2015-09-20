/**
 * Created by Piercing on 20/9/15.
 */

function add(a, b) {
    if (arguments.length < 1) {
        return add;
    } else if (arguments.length < 2) {
        return function(c) { return a + c }
    } else {
        return a + b;
    }
}
add(1,2); // 3
var suma6 = add(6); // función que suma 6 a lo que le pasemos
suma6(4); // 10

console.log(add(1, 2));
console.log(suma6(4));