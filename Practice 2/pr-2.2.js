"use strict";


// Task 2
/* Создайте произвольную строку, выведите в консоль ее длину, первый и
последний символы. Проверьте, начинается ли строка с foo, заканчивается ли
на bar, содержит ли она некоторую подстроку. */

console.log("\nTask 2\n");

let str = "Sometimes I think about you...";
console.log(str);
console.log("Length:", str.length,
            "\nFirst symbol:", str[0],
            "\nLast symbol:", str.at[-1]);
console.log("Starts with \"foo\":", str.startsWith("foo"), 
            "\nEnds with \"bar\":", str.endsWith("bar"), 
            "\nIncludes \"about\":", str.includes("about"));
