"strict use";


// Task 2
/* Создайте функцию, которая на вход принимает функцию-колбэк и через
несколько секунд возвращает некоторые данные. Используйте функцию-
колбэк, чтобы вывести эти данные в консоль после завершения асинхронной
операции. Создайте аналогичную функцию с использованием промиса,
обработайте успешное и неуспешное выполнение промиса. Создайте
аналогичную функцию с использованием синтаксиса async/await, обработайте
успешное и неуспешное выполнение функции.
Приведите пример параллельного выполнения нескольких асинхронных
функций. */

console.log("\nTask 2\n");

let milliseconds = 0;

// Using callback function
function callbackFunc(seconds, callback)
{
    setTimeout(() => {
        console.log(`\n${seconds} second(s) passed.`);
        callback(seconds); }, seconds*1000);
}
// Using promise
function promiseFunc(seconds)
{
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log(`\n${seconds} second(s) passed.`);
            resolve(seconds); }, seconds*1000);
    });
    promise.then(
        seconds => {
            printMsecs("Promise working", seconds);
        },
        error => console.log(error)
    );
}
// Using async/await
async function asyncFunc(seconds)
{
    try {
        await new Promise((resolve) => {
            setTimeout(() => { 
                console.log(`\n${seconds} second(s) passed.`);
                resolve(seconds); }, seconds*1000);
        });
        printMsecs("Async/Await working", seconds);
    } catch (error) {
        console.error(error);
    }
}
// Shared text function
function printMsecs(method, seconds)
{
    console.log(method);
    milliseconds = seconds * 1000;
    console.log(`${seconds} second(s) = ${milliseconds} milliseconds`);
}

// An example of parallel execution of multiple async functions
async function everyoneIsAsleep() {
    const results = await Promise.all([
        iAmAsleep("Tanya", 10),
        iAmAsleep("Joe", 12),
        iAmAsleep('Henry', 11)
    ]);
    console.log("Everyone is asleep, mafia wakes up...")
}
async function iAmAsleep(name, seconds) {
        return new Promise((resolve) => {
            setTimeout(() => {
            console.log(`\n${seconds} second(s) passed.`);
            console.log(`${name} is asleep.`);
            resolve();
        }, seconds*1000);
    });
}
// Getting results
everyoneIsAsleep();

callbackFunc(8, seconds => { printMsecs("Callback working", seconds); });

promiseFunc(6);

asyncFunc(4);
