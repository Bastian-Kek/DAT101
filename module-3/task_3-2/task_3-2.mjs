"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let upLine = "";
let downLine = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
  upLine += i + " ";
  downLine += j + " ";
}
printOut(upLine);
printOut(downLine);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const target = 45;
let guess = 0;

while (guess !== target) {
  guess = Math.floor(Math.random() * 60) + 1;
}

printOut(`The computer guessed the number: ${guess}`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const targetLarge = 420697;
let guessLarge = 0;
let guessCount = 0;

const startTime = Date.now();

while (guessLarge !== targetLarge) {
  guessLarge = Math.floor(Math.random() * 1000000) + 1;
  guessCount++;
}

const endTime = Date.now();
const elapsedMilliseconds = endTime - startTime;

printOut(`The computer guessed the number: ${guessLarge}`);
printOut(`Number of guesses: ${guessCount}`);
printOut(`Time taken: ${elapsedMilliseconds} milliseconds`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */
let primeLine = "";

for (let number = 2; number < 200; number++) {
  let isPrime = true;
  let divisor = 2;

  while (divisor < number) {
    if (number % divisor === 0) {
      isPrime = false;
    }
    divisor++;
  }

  if (isPrime) {
    primeLine += number + " ";
  }
}

printOut(primeLine);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
  let line = "";
  for (let col = 1; col <= 9; col++) {
    line += `K${col}R${row} `;
  }
  printOut(line);
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const maxScore = 236;

for (let student = 1; student <= 5; student++) {
  const points = Math.floor(Math.random() * maxScore) + 1;
  const percentage = (points / maxScore) * 100;
  let letterGrade;

  if (percentage >= 89) {
    letterGrade = "A";
  } else if (percentage >= 77) {
    letterGrade = "B";
  } else if (percentage >= 65) {
    letterGrade = "C";
  } else if (percentage >= 53) {
    letterGrade = "D";
  } else if (percentage >= 41) {
    letterGrade = "E";
  } else {
    letterGrade = "F";
  }

  printOut(`Student ${student}: ${points} points (${percentage.toFixed(1)}%) → Grade ${letterGrade}`);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function matchString(aString, aNumber) {
  let count = 0;
  for (let i = 0; i < aString.length; i++) {
    if (aString.charAt(i) === String(aNumber)) {
      count++;
    }
  }
  return count;
}

let throwCount = 0;
let foundStraight = false;
let foundThreePairs = false;
let foundTower = false;
let foundYahtzee = false;

do {
  throwCount++;

  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const d3 = Math.floor(Math.random() * 6) + 1;
  const d4 = Math.floor(Math.random() * 6) + 1;
  const d5 = Math.floor(Math.random() * 6) + 1;
  const d6 = Math.floor(Math.random() * 6) + 1;
  const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

  const c1 = matchString(diceString, 1);
  const c2 = matchString(diceString, 2);
  const c3 = matchString(diceString, 3);
  const c4 = matchString(diceString, 4);
  const c5 = matchString(diceString, 5);
  const c6 = matchString(diceString, 6);
  const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

  if (!foundStraight && matchString(countString, 1) === 6) {
    foundStraight = true;
    printOut(`Full straight (1 2 3 4 5 6): ${throwCount} throws`);
  }
  if (!foundThreePairs && matchString(countString, 2) === 3) {
    foundThreePairs = true;
    printOut(`3 pairs: ${throwCount} throws`);
  }
  if (!foundTower && matchString(countString, 4) === 1 && matchString(countString, 2) === 1) {
    foundTower = true;
    printOut(`Tower (2 of a kind + 4 of a kind): ${throwCount} throws`);
  }
  if (!foundYahtzee && matchString(countString, 6) === 1) {
    foundYahtzee = true;
    printOut(`Yahtzee (all the same): ${throwCount} throws`);
  }
} while (!foundStraight || !foundThreePairs || !foundTower || !foundYahtzee);

printOut(newLine);
