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



// Arrays
const friends = ["mick", "John", "Frank", "James"];
console.log(friends[2])
console.log(friends.length)
console.log(friends[friends.length-1])

friends[2] = "Grace";
console.log(friends);

// methods
friends.push("Mary");
console.log(friends);

friends.unshift("Peter");
console.log(friends)

const removedEle = friends.pop();
console.log(removedEle);
console.log(friends);

friends.shift()
console.log(friends)

// coding challeng 2
Steven is still bui Iding his tip cazculator, using
the same rules as before: Tip ot the bill it the
bill vaiue '5 between 50 and 300, and if the value is
d} f ferent,
the tip is 20*.
1. Write a function 'calcTip' that takes any bill
value as an input and returns the corresponding tip,
calculated based on the rules above (you can check
out thc code from first tip calculator chal Lenge if
you need to}. use the function type you L ike the
most. Test the functlon using a bit t value Of
2. And now let's use arrays! So create on array
'bills' containing the test data below.
3. Create an array 'tips' containing the tip value
for each bit! , calculated from the function you
created before.
4. BONUS: Create an array 'total' containing the
total values, so the bill + tip.
TEST DATA: 125, 555 and 44

// solution
const calcTip = billValue =>{
    if((billValue>=50) && (billValue<=300)){
        return billValue*0.15
    }else{
        return billValue*0.2
    }
}
console.log(calcTip(10))

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)
*/