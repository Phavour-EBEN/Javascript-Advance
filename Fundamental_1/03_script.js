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

*/
// lesson 4 arrow functions
/*
const calcAge4 = birthYear => 2025- birthYear;

console.log(calcAge4(1995));
*/

// retirement year
/*
const calcAge = birthYear => 2025- birthYear;
const age = calcAge(1990)
console.log("current age: "+ age)

 const retirementTimeLeft = 60-age;
 console.log(`Retirement is in ${retirementTimeLeft} years to come`)

//  proper use of the arrow funtion
const yearUntilRetirement = birthYear =>{
    const age = 2025 - birthYear;
    console.log(age)
    const retirementTime = 65- age;
    return retirementTime;
}

console.log(yearUntilRetirement(1995));


// functions inside another function lesson
const calAge = function (birthYear){
    return age = 2025 - birthYear;

}

const yearUntilRetirement = function (fname){
    const age = calAge(1800)
    console.log(age);
    const retirementTime = 65- age;

    if(retirementTime>0){
        return retirementTime;
    }else{
        return -1;
    }

    // return `${fname} retirementTime is in ${retirementTime}`;
}

console.log(yearUntilRetirement("Jonas"));
*/
// coding challenge 1
/*
Back to the two gymnastics the Koalas! There is a new
Which works differently.Each team competes 3 times,
the 3 scores is calculated team). A team ONLY wins if jt has
average score of the other teams, the Dolphins and
gymnastics discipline, and then the average of (so one average score per at least DOUBLE the team. Otherwåse, no team wins! 

1. Create an arrow function 'ca!cAverage' to
calculate the average of 3 scores
2. use the function to calculate the average for both
teams
3. Create a function 'checkWinner' that takes the
average score of each team as parameters
('avgDotbjns' and 'avgKoalas'), and then logs the
winner to the console, together with the victory
points, according to the rule above. Example: "Koalas
f 30 vs. 13)".
4. Use the 'checkWinner' function to determine the
winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

Dolphins score 44,23,and 71
Koalas score 65, 54, 49

// solution

const AvgScores = (a,b,c) => {
    return (a + b + c)/3;  
}
const Dolphins = AvgScores(85,54, 41);
const Koalas = AvgScores(23,534,27);

console.log(`Dolphins avg score is ${Dolphins}`);
console.log(`Koalass avg score is ${Koalas}`);

const checkWinners = (Dolphins, Koalas) => {
    if(Dolphins >=(Koalas*2)){
        console.log(`Dolphins wins (${Dolphins} vs ${Koalas})`);
    }else if(Koalas >=(Dolphins*2)){
        console.log(`Koalas wins (${Koalas} vs ${Dolphins})`);
    }else{
        console.log("No Team Wins");
    }
}

console.log(checkWinners(Dolphins, Koalas))

*/