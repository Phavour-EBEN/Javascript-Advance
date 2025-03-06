/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Eben');
console.log(23);

// Variable name conventions
let firstName = 'Jane doe';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// constansts variables
const PI = 3.1415;
console.log(PI);

// examples
let country = 'Ghana';
let continent = 'Africa';
let population = 30.5;
console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(isIsland)
console.log(typeof isIsland);
console.log(typeof population);
console.log(language);

// dynamic typing
country = 'Britain';
continent = 'Europe';

console.log(country);
console.log(continent);

console.log(typeof null) 


let age = 22;
age = 23; // reassigning of variable(mutation of variable)

const birthYear = 1998;
//  birthYear = 1997; // this will throw an error because you can't reassign a constant variable

// conrst job; // this will throw an error because you can't declare a constant variable without assigning a value to it

var job = 'programmer'; // this is the old way of declaring a variable
console.log(job);

job = 'teacher';
console.log(job);
*/

// Basic Operators
const now = 2025;
const ageEben = now - 2002;
const ageSarah = now - 2010;
console.log(ageEben, ageSarah);

let x = 10 + 5;
x += 10; // x = x + 10
console.log(x);

// concatenation
const firstName = 'Eben';
const lastName = 'Ainoo';

console.log(firstName + ' ' + lastName);

// comparison operators
console.log(ageEben > ageSarah);
console.log(ageSarah >= 10)

// operation precedence
let X, y;
x = y = 25 - 10 - 5;
console.log(x, y);

console.log(ageEben, ageSarah);
const avgAge = (ageEben + ageSarah) /2
console.log(avgAge);
console.log(typeof avgAge);
