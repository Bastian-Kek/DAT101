"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < numbers.length; i++) {
  printOut(numbers[i]);
}
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(numbers.join(" - ")); // Custom character separator
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const textString = "Hei på deg, hvordan har du det?";
const wordsArray = textString.split(" ");
for (let i = 0; i < wordsArray.length; i++) {
  printOut(`Word number: ${i}, Index: ${i}, Word: ${wordsArray[i]}`);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeElementFromArray(array, textToRemove) {
  const index = array.indexOf(textToRemove);
  if (index > -1) {
    array.splice(index, 1);
    printOut(`"${textToRemove}" was found and removed.`);
  } else {
    printOut(`"${textToRemove}" was not found in the array.`);
  }
}

removeElementFromArray(girlNames, "Kari");
removeElementFromArray(girlNames, "UnknownName");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = [];
allNames.push(...girlNames, ...boyNames);
printOut(allNames.join(", "));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  
  toString() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}

const books = [
  new TBook("The Hobbit", "J.R.R. Tolkien", "978-0261102217"),
  new TBook("1984", "George Orwell", "978-0451524935"),
  new TBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565")
];

for (let i = 0; i < books.length; i++) {
  printOut(books[i].toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag" },
  WeekDay7: { value: 0x40, name: "Søndag" },
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" }
};

const weekDayKeys = Object.keys(EWeekDays);
for (let i = 0; i < weekDayKeys.length; i++) {
  const key = weekDayKeys[i];
  printOut(`${key}: ${EWeekDays[key].name}`);
}
printOut(newLine);
printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = [];
for (let i = 0; i < 35; i++) {
  randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}

const ascending = [...randomNumbers].sort((a, b) => a - b);
const descending = [...randomNumbers].sort((a, b) => b - a);

printOut(`Ascending: ${ascending.join(", ")}`);
printOut(`Descending: ${descending.join(", ")}`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequencyMap = {};
for (let i = 0; i < randomNumbers.length; i++) {
  const num = randomNumbers[i];
  frequencyMap[num] = (frequencyMap[num] || 0) + 1;
}

// Convert to array for sorting
const frequencyArray = [];
for (const key in frequencyMap) {
  frequencyArray.push({ number: parseInt(key), frequency: frequencyMap[key] });
}

// Sort by frequency descending, then by number ascending
frequencyArray.sort((a, b) => {
  if (b.frequency === a.frequency) {
    return a.number - b.number;
  }
  return b.frequency - a.frequency;
});

for (let i = 0; i < frequencyArray.length; i++) {
  printOut(`Number: ${frequencyArray[i].number}, Frequency: ${frequencyArray[i].frequency}`);
}
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const twoDArray = [];

// Create rows and columns (5x9)
for (let row = 0; row < 5; row++) {
  twoDArray[row] = [];
  for (let col = 0; col < 9; col++) {
    twoDArray[row][col] = `Row ${row + 1}, Col ${col + 1}`;
  }
}

// Print the array
for (let row = 0; row < twoDArray.length; row++) {
  let rowString = "";
  for (let col = 0; col < twoDArray[row].length; col++) {
    rowString += `[${twoDArray[row][col]}] `;
  }
  printOut(rowString);
}
printOut(newLine);