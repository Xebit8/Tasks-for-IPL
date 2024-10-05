"use strict";


// Task 3
/* Напишите программу, которая находит среди трех чисел наибольшее,
используя логические условия. */

console.log("\nTask 3\n");

let num1 = 10;
let num2 = 5;
let num3 = -14;

if (num1 >= num2 && num1 >= num3)
{
    console.log(`${num1} is the greatest`);
}
else if (num2 >= num1 && num2 >= num3)
{
    console.log(`${num2} is the greatest`);
}
else if (num3 >= num1 && num3 >= num2)
{
    console.log(`${num3} is the greatest`);
}