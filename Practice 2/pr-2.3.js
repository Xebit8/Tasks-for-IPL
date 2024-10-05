"use strict";


// Task 3
/* Создайте массив, содержащий пять произвольных элементов, выведите в
консоль его первый и последний элементы. Обновите значение второго
элемента массива, создайте второй массив, который является копией первого,
выведите оба массива в консоль. Создайте функцию, которая объединяет два
массива в один. Создайте массив пользователей (у каждого пользователя
должно быть имя) и напишите функцию, которая принимает данный массив и
возвращает массив имен. Создайте функцию нахождения среднего
арифметического для массива чисел. */

console.log("\nTask 3\n");

let arr1 = [1, 2, 3, 4, 5];
console.log("First element:", arr1[0],
            "\nLast element:", arr1.at[-1]);
arr1[1] = 20;

let arr2 = arr1.slice();
console.log("arr1:", arr1);
console.log("arr2:", arr2);

let unifyArrays = (array1, array2) => array1.concat(array2);
console.log("Unified array:", unifyArrays(arr1, arr2));


let user1 = { name: "Evgeniy" };

let user2 = { name: "Alexandr" };

let users = [user1, user2];
let returnUsersNames = array => {
    let names = [];
    for (let element of array) names.push(element.name);
    return names; 
}
console.log("Names:", returnUsersNames(users));

let avg = array => {
    let sum = 0;
    for (let element of array) sum += element;
    return sum / array.length;
}
console.log("AVG:", avg(arr1));