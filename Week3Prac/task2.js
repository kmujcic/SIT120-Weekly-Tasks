/* JavaScript Number, Number Methods and Array
Methods - Pass Task 2 */

/* This is a string array */
const countries = ["Bosnia", "Australia", "Turkey", "Ireland"];

console.log(countries);

/* This is a number array */
const numbers = [4, 6, 97, 99, 7, 23]

console.log(numbers);

/* This is the array length method, it gives us
the length of an array (1st method on string array) */
let length = countries.length;

console.log(length);

/* This is the array sort method, it sorts the array
for us in alphabetical order (2nd method on string array) */
let order = countries.sort();

console.log(order);

/* This is the array reverse method, it reverses the order
of the elements in an array (3rd method on string array) */
let reversed = countries.reverse();

console.log(reversed);

/* This is the array push method, it adds a new element
to the end of the array, and returns new length (1st method on number array) */
let pushed = numbers.push(35);

console.log(pushed);

/* This is the array splice method, it allows us to splice
and return selected elements of an array (2nd method on number array) */
let spliced = numbers.splice(1, 2);

console.log(spliced);