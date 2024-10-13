"use strict";


// Task 3
/* Создайте модуль, предоставляющий функциональность работы с
математическими операциями, реализуйте в нем 6 функций, подключите в него
модуль, предоставляющий константы, необходимые для ваших функций. При
экспортировании функций и переменных приведите примеры всех видов
использования директивы экспорта.
Подключите реализованную функциональность в основной модуль и
приведите примеры использования. При импортировании функций и
переменных приведите примеры всех видов использования директивы
импорта. */

console.log("\nTask 3\n");

// export class
export class MathOperations {
    constructor() {}
    valuesSum(value1, value2) {
        return value1 + value2;
    }
    valuesSubstraction(value1, value2) {
        return value1 - value2;
    }
    valuesMultiplication(value1, value2) {
        return value1 * value2;
    }
    valuesDivision(value1, value2) {
        if (value2 == 0) console.error(Error("Division by zero?! Nope thanks!"));
        else return value1 / value2;
    }
    valuesExponention(value1, value2) {
        return value1 ** value2;
    }
    valuesMod(value1, value2) {
        return value1 % value2;
    }
}

// export function
export function valueSquareRoot(value) {
    return value ** (0.5);
}

function valueSquared(value) {
    return value ** 2;
}

// export variable
export {valueSquared};

// export constant
export const pi = 3.1415926;

let absolutezeroandnothingelsejustnullholeinthedonut = 0;

// export variable as default
export {absolutezeroandnothingelsejustnullholeinthedonut as default};