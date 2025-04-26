// lession 1

"strict";
/*
let hasDriversLicense = false;
const hasGoodVision = true;
if (hasGoodVision) hasDriversLicense = true;

if (hasDriversLicense) console.log("Sarah is able to drive");



// lession 2 functions


function fruitDrinks(apples, oranges) {
    //  apples and oranges are parameters
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// calling the function
// note that 5 and 2 are arguments
const appleJuice = fruitDrinks(5, 2);
console.log(appleJuice);
*/

// lesson 3 functions decleration and expressions
// function decleration
function calcAge(birthYear) {
    return 2025 - birthYear;
}

// function call can be made before function definition
console.log(calcAge(2002));

// function expression
calcAge2 =  function (birthYear){
    return 2026 - birthYear;
}

console.log(calcAge2(2002), calcAge(2002));