"use strict";


// Task 2
/* Объявите переменные, имеющие различные типы данных. Выведите в консоль
их значения и типы данных, используя оператор typeof. */

console.log("\nTask 2\n");

let number = 10;
let bigI = 2n;
let text = "text";
let bool = true;
let nu = null;
let und;
let obj = Math;
let sym = Symbol("text");
let func = function() { ; }

console.log(typeof(number));
console.log(typeof(bigI));
console.log(typeof(text));
console.log(typeof(bool));
console.log(typeof(nu));
console.log(typeof(und));
console.log(typeof(obj));
console.log(typeof(sym));
console.log(typeof(func));
