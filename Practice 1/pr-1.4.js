"use strict";


// Task 4
/* Напишите программу, которая выводит числа от 1 до 10 с помощью различных
циклов: while, do…while, for. */

console.log("\nTask 4\n");

let counter = 1;
console.log("while");
while (counter <= 10)
{
    console.log(counter);
    counter++;
}
counter = 1;
console.log("do while");
do
{
    console.log(counter);
    counter++;
} while (counter <= 10);
console.log("for");
for (let i = 1; i <= 10; i++)
{
    console.log(i);
}