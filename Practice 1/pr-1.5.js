"use strict";


// Task 5
/* Создайте функцию, которая принимает два аргумента, выполняет над ними
математическую операцию и возвращает ее результат. Используйте три
различных синтаксиса описания функции. */

console.log("\nTask 5\n");

let var1 = 13;
let var2 = 2;

function sumfunc(arg1, arg2)
{
    return arg1 + arg2; 
}
let multfunc = function(arg1, arg2)
{
    return arg1 * arg2;
};
let expfunc = (arg1, arg2) => arg1 ** arg2;

console.log("Values Sum:", sumfunc(var1, var2));
console.log("Values Multiplication:", multfunc(var1, var2));
console.log("Values Exponention:", expfunc(var1, var2));