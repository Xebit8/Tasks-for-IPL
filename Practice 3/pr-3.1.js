"strict use";


// Task 1
/* Создайте функцию, которая принимает несколько аргументов, выполняет над
ними математическую операцию и возвращает ее результат. Реализуйте в ней
обработку возможных ошибок с помощью конструкции try…catch, при
получении ошибки выведите в консоль информацию о ней, приведите пример
использования. Создайте собственный класс ошибки, приведите пример
использования. */

console.log("\nTask 1\n");

class CustomTypeError extends Error
{
    constructor(message)
    {
        super(message);
        this.name = "CustomTypeError";
    }
}

function mathOperations(val1, val2)
{
    try {
        let result = val1 / val2;
        if (isNaN(result))
        {
            throw new CustomTypeError("This is unacceptable! You need to use numbers, your 2nd value have to be non-zero...");
        }
        something; // to trigger ReferenceError
        return result;
    } catch (error) {
        console.error(error);
    }
}
mathOperations([1, 2, 3], "a"); // trigger CustomTypeError
mathOperations(1, 2) // trigger ReferenceError