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
*/
// Coding Challenge #1💪⏳

//solution 1

/*
let countryPolulation = 34854457;
const halfPopulation = countryPolulation / 2;
console.log('Number of people living in each half:', halfPopulation);

countryPolulation++;
console.log(countryPolulation);

const finlandPopulation = 6000000;
console.log(countryPolulation > finlandPopulation);

const averagePopulation = 33000000;
console.log(countryPolulation < (ave)ragePopulation);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);


// code challenge 2
let mass, height;
let BMI = mass / (height ** 2);

markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

console.log("Mark's weight:", markBMI);
console.log("John's weight:", johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);



// String and Template Literals
const firstName = 'Eben';
const job = 'programmer';
const birthYear = 2002;
const year = 2025;

const ebenContext = `I'm ${firstName}, an AI ${job}, and I am ${year - birthYear} years old!!!`;
console.log(ebenContext);

// multiline strings
console.log(`String with \n\
multiple \n\
lines`);



//If - Else Statements
const age = 30;
const isOldEnough = age >=18;

if(isOldEnough){
    console.log("You can start driving!");
}else{
    const yearsLeft = 18-age
    console.log(`You are not old enough to drive yet!, you ahve to wait ${yearsLeft} more`);
}



// code challenge 2
let mass, height;
let BMI = mass / (height ** 2);

markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

console.log("Mark's weight:", markBMI);
console.log("John's weight:", johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);

}else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}



// Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear)
console.log(String(50), 50)

// type coercion
console.log("I am" + 10 + "year")
// addtion sign convert int type to string type and
// the subtraction sign convert the string type to int type

console.log("22 " - "10")


// Truthy and Falsy
// falsy values(0, '', undefined, null, NaN)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));

const money = 10;

if (money){
    console.log("Don't spend it all");
}else{
    console.log("you need a job");
}

// equality operator
const age = '18';
if(age === 18) console.log("you are now an adult, Doesn't")
// note that the === does not support type coercion

if (age == 18) console.log("You are now an Adult, Sopprt type coercions")

const favorite = prompt("what is your favorite nubver? :");
console.log(favorite);
console.log(typeof favorite);

if(favorite ===23){
    console.log("Cool, 23 is a number")
}else if(favorite===7){
    console.log("7 is also a cool number")
}else{
    console.log("Is not a number")
}


//  Booleean Logic
const hasDriverLicense =  true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)
console.log(!hasGoodVision)

// to make a decision
const shouldDrive = (hasDriverLicense || hasGoodVision)

if (shouldDrive){
    console.log("Sarah is able to drive");
}else{
    console.log("someone else should drive")
}


// CODING CHALLENG
const Dolphins = (96+108+89)/3; 
const Koalas = (88+91+110)/3;
// the requirement
const minScore = 100;

console.log(`Dolphins avg is ${Dolphins}`)
console.log(`koalas avg is ${Koalas}`)

if(Dolphins > Koalas){
    console.log(`Dolphins wins, with an avg score of ${Dolphins}`)
}else if (Koalas > Dolphins){
    console.log(`Koalas wins, with an avg score of ${Koalas}`)
}else if(Dolphins === Dolphins){
    console.log("The game is a draw")
}

// with the requirement
if((Dolphins > Koalas) && (Dolphins>=minScore)){
    console.log(`Dolphins wins, with an avg score of ${Dolphins} greater than ${minScore}`)
}else if ((Koalas > Dolphins) && (Koalas>=minScore)){
    console.log(`Koalas wins, with an avg score of ${Koalas} greater than ${minScore}`)
}else{
    console.log("The game is a draw")
}

// Switch Statements
const day = 'wednesday';

switch(day){
    case 'monday':
        console.log("Plan the day");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Go to the shop");
        break;
    case 'wednesday':
        console.log("Go to the gym");
        break;
    case 'thursday':
        console.log("Go to the cinema");
        break;
    case 'friday':
        console.log("Go to Brigade");
        break;
    case 'saturday':
        console.log("Go to Trumpet training"); 
        break;
    case 'sunday':
        console.log("Go to church");
        break;
    default:
        console.log("Not a valid day");
        break;
}

// Ternary Operator "?""
const age = 23;

age >= 30 ? console.log("can't drive") : console.log("can drive");

let drink2 = "wine";

drink2 === "wine" ? console.log("drink wine") : console.log("drink water");
*/
// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator
for whenever he goes eating in a resturant. In his
country, it's usual to tip 158 if the bill value is
between 50 and 300. If the value is different, the
tip is 206.
1. Your task is to caluclate the tip, depending on
the bill value. Create a variable called 'tipl for
this. I t 's not allowed to use an if/etse statement
(If it's easier for you, you can start with an j f/
else statement, and then try to convert it to a
ternary operator!)
2. Print a string to the console containing the bill
value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and
the total
TEST DATA:
value 316.25'
Test for bill values 275,
40 and 43

// Solution 1
const bill = Number(prompt("Enter the bill amount: "));
const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill *0.2;
console.log(`The bill is ${bill}, the tip is ${tip}`);
const total = bill + tip;
console.log(`The total amount is ${total}`);

*/