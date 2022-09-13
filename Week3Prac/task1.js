/* JavaScript String Methods - Pass Task 1 */

/* This is the string length method
it gives us the length of a string as a number */
let vowels = "AEIOU";
let length = vowels.length;

console.log(length);

/* This is the string slice method
it slices out a part of the string at the
given positions */
let string = "Australia, Bosnia, Germany, Spain";
let sliced = string.slice(11, 17);

console.log(sliced);

/* This is the string replace method
it replaces the specified value in a string
with another specified value */
let sentence = "Welcome to Monash University. :)";
let newSentence = sentence.replace("Monash", "Deakin");

console.log(newSentence);

/* This is the toUpperCase method 
it converts the string value to all
upper case letters */
let text = "I promise I am not yelling.";
let upperText = text.toUpperCase();

console.log(upperText);

/* This is the string concat method
it is used to join multiple strings together */
let sent1 = "Welcome to McDonald's, ";
let sent2 = "How may I serve you today?";
let sent3 = sent1.concat(sent2);

console.log(sent3);