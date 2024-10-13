// import everything with *
import * as math from "./pr-3.3.js";
// import standardly
import { MathOperations } from "./pr-3.3.js";
// import function with custom name, import multiple variables
import { valueSquareRoot as valueSqrt, valueSquared as valueSqrd, pi } from "./pr-3.3.js";
// import default variable
import zero from "./pr-3.3.js";
// import default variable with custom name
import {default as zero} from "./pr-3.3.js";


let num1 = 25;
let num2 = 5;

let mo = new MathOperations();

console.log(`${num1} + ${num2} = ${mo.valuesSum(num1, num2)}`);
console.log(`${num1} - ${num2} = ${mo.valuesSubstraction(num1, num2)}`);
console.log(`${num1} * ${num2} = ${mo.valuesMultiplication(num1, num2)}`);
console.log(`${num1} / ${num2} = ${mo.valuesDivision(num1, num2)}`);
console.log(`${num1} ** ${num2} = ${mo.valuesExponention(num1, num2)}`);
console.log(`${num1} % ${num2} = ${mo.valuesMod(num1, num2)}`);
console.log(`√${num1} = ${valueSqrt(num1)}`);
console.log(`${num1}² = ${valueSqrd(num1)}`);
console.log(`pi = ${pi}`);