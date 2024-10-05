"use strict";


// Task 4
/* Создайте набор имен с помощью Set, добавьте в него четыре значения. Удалите
первый добавленный элемент, проверьте его отсутствие в наборе, выведите в
консоль его размер. */

console.log("\nTask 4\n");

let names_set = new Set();
names_set.add("Dmitriy");
names_set.add("Valeriy");
names_set.add("Stepan");
names_set.add("Nikolai");

names_set.delete("Dmitriy");
console.log("\"Dmitriy\" is in the set:", names_set.has("Dmitriy"));
console.log(names_set, "\nSize:", names_set.size);