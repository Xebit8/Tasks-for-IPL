"use strict";


// Task 1
/* Создайте объект, содержащий информацию о пользователе (имя, возраст,
город), выведите его в консоль. Измените значение возраста, добавьте в объект
новое свойство, а одно из существующих удалите, выведите обновленные
данные. Создайте объект второго пользователя и посчитайте сумму возрастов
двух пользователей. */

console.log("\nTask 1\n");

let user1 = {
    name: "Evgeniy",
    age: 22,
    city: "Moscow"
};
console.log(user1);

user1.job = null;

user1.age = 24;
delete user1.city;

console.log(user1);

let user2 = {
    name: "Alexandr",
    age: 21
};
console.log("user1.age + user2.age =", user1.age + user2.age);