"use strict";


// Task 1
/* Создайте переменные для хранения информации о трех пользователях (имя
пользователя, его возраст и город проживания). Используйте различные
ключевые слова для определения переменных. Выведите их значения в
консоль. Обновите возраст первого пользователя. */

console.log("\nTask 1\n");

const user1_name = "Evgeniy";
var user1_age = 22;
let user1_city = "Moscow";

const user2_name = "Alexandr";
var user2_age = 21;
let user2_city = "Sankt-Peterburg";

const user3_name = "Dmitriy";
var user3_age = 17;
let user3_city = "Rostov-na-Donu";

console.log("\nUser №1:");
console.log("Name:", user1_name);
console.log("Age:", user1_age);
console.log("City:", user1_city);

console.log("\nUser №2:");
console.log("Name:", user2_name);
console.log("Age:", user2_age);
console.log("City:", user2_city);

console.log("\nUser №3:");
console.log("Name:", user3_name);
console.log("Age:", user3_age);
console.log("City:", user3_city);

user1_age = 24;

console.log("\nUser №1:");
console.log("Name:", user1_name);
console.log("Age:", user1_age);
console.log("City:", user1_city);
