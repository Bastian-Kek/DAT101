"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let upLine = "";
for (let i = 1; i <10; i++)
{upLine += i + " ";}
printOut(upLine)

let downLine = "";
for (let i =10; i >=1; i--) 
{downLine += i + " ";}
printOut(downLine)

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const target = 45;
let guess = 0;
let attempts = 0;

while (guess !== target) {
    guess = Math.floor(Math.random() * 60) + 1;
    attempts++;
}

printOut(`Part 2: Guessed ${guess} in ${attempts} attempts.`);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Part 3: Guessing Game - Level Up
const target2 = 420697;
let guess2 = 0;
let attempts2 = 0;

const startTime = Date.now();

while (guess2 !== target2) {
    guess2 = Math.floor(Math.random() * 1000000) + 1;
    attempts2++;
}

const endTime = Date.now();
const elapsed = endTime - startTime;

printOut(`Guessed ${guess2} in ${attempts2} attempts.`);
printOut(`Time taken: ${elapsed} milliseconds.`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

/* Put your code below here! */
const primes = [];

for (let n = 2; n < 400; n++) {
    let isPrime = true;
    let divisor = 2;

    while (divisor <= Math.sqrt(n)) {
        if (n % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;}
        if (isPrime) {primes.push(n);}}

printOut(`Primes less than 400: ${primes.join(", ")}`);
printOut(`Total primes found: ${primes.length}`);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let line = "";
    for (let col = 1; col <= 9; col++) {
        line += `K${col}R${row} `;
    }
    printOut(line.trim());
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const grades = [];
for (let i = 0; i < 5; i++) {
    grades.push(Math.floor(Math.random() * 236) + 1);

}

function getLetterGrade(points) {
    const percentage = (points / 236) * 100;
    if (percentage >= 89) return "A";
    if (percentage >= 77) return "B";
    if (percentage >= 65) return "C";
    if (percentage >= 53) return "D";
    if (percentage >= 41) return "E";
    return "F";
}

for (let i = 0; i < grades.length; i++) { 
    const points = grades[i];
    const percentage = (points / 236) * 100;
    const letter = getLetterGrade(points);
     printOut(`Student ${i + 1}: ${points} points (${percentage.toFixed(1)}%) → Grade ${letter}`);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rollSixDice() {
    const dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    return dice;
}

function countValues(dice) {
    const counts = {};
    for (const d of dice) {
        counts[d] = (counts[d] || 0) + 1;
    }
    return counts;
}

function isFullStraight(dice) {
    const sorted = [...dice].sort((a, b) => a - b);
    return sorted.join("") === "123456";
}

function isThreePairs(dice) {
    const counts = Object.values(countValues(dice));
    return counts.length === 3 && counts.every(c => c === 2);
}

function isTower(dice) {
    const counts = Object.values(countValues(dice)).sort((a, b) => a - b);
    return counts.length === 2 && counts[0] === 2 && counts[1] === 4;
}

function isYahtzee(dice) {
    return new Set(dice).size === 1;
}

let throws;
let dice;

throws = 0;
do {
    dice = rollSixDice();
    throws++;
} while (!isFullStraight(dice));
printOut(`Full straight (1 2 3 4 5 6): ${throws} throws`);

throws = 0;
do {
    dice = rollSixDice();
    throws++;
} while (!isThreePairs(dice));
printOut(`3 pairs: ${throws} throws`);

throws = 0;
do {
    dice = rollSixDice();
    throws++;
} while (!isTower(dice));
printOut(`Tower (2 of a kind + 4 of a kind): ${throws} throws`);

throws = 0;
do {
    dice = rollSixDice();
    throws++;
} while (!isYahtzee(dice));
printOut(`Yahtzee (all same): ${throws} throws`);

printOut(newLine);