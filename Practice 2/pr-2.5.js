"use strict";


// Task 5
/* Создайте коллекцию ключ-значение с помощью Map, добавьте в нее три
элемента, выведите в консоль значение последнего добавленного элемента.
Удалите любой элемент, проверьте его отсутствие в коллекции. */

console.log("\nTask 5\n");

let collection = new Map();
collection.set("fireforce", 101);
collection.set("police", 102);
collection.set("ambulance", 103);
console.log(collection.get("ambulance"));

collection.delete("fireforce");
console.log("\nfireforce\" is in the map:", collection.has("fireforce"));
console.log(collection);