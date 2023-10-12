/*The difference between explicit and implicit coercion is that explicit coercion lets you decide what you want to do, whereas implicit coercion lets the engine choose.*/

let result = '1' + '2';

console.log(result);
// what does this print to console due to implicit type corecion


let value1 = 42;
let value2 = '42'

console.log((value1 == value2) === (value1 === value2));
             // true                 false
// what does this print to the console

// going to print false