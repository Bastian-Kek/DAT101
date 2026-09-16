"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const originalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6;

printOut("Original expression: " + originalExpression);
printOut("Modified expression: " + modifiedExpression);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const millimeters = 25 * 1000 + 34 * 10;
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;

printOut("25 m + 34 cm = " + sumPart2.toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;

const part3Answer =
  part3Days * 24 * 60 +
  part3Hours * 60 +
  part3Minutes +
  part3Seconds / 60;

printOut(
  "3 days, 12 hours, 14 minutes and 45 seconds = " +
    part3Answer +
    " minutes"
);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const totalMinutes = 6322.52;

const part4Days = Math.floor(totalMinutes / 1440);

let remainder = totalMinutes % 1440;

const part4Hours = Math.floor(remainder / 60);
remainder = remainder % 60;

const part4Minutes = Math.floor(remainder);
const part4Seconds = Math.round((remainder - part4Minutes) * 60);

printOut(
  part4Days +
    " days, " +
    part4Hours +
    " hours, " +
    part4Minutes +
    " minutes, " +
    part4Seconds +
    " seconds"
);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const usdToNok = Math.round(54 * (nok / usd));
const nokToUsd = Math.round(nok / (nok / usd));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const text = "There is much between heaven and earth that we do not understand.";

printOut("Character count: " + text.length);
printOut("Character at position 19: " + text.charAt(19));
printOut("8 characters starting at position 35: " + text.substring(35, 43));
printOut("Index of 'earth': " + text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut("5 > 3: " + (5 > 3));
printOut("7 >= 7: " + (7 >= 7));
printOut('"a" > "b": ' + ("a" > "b"));
printOut('"1" < "a": ' + ("1" < "a"));
printOut('"2500" < "abcd": ' + ("2500" < "abcd"));
printOut('"arne" !== "thomas": ' + ("arne" !== "thomas"));
printOut("2 === 5: " + (2 === 5));
printOut('"abcd" > "bcd": ' + ("abcd" > "bcd"));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const value1 = "254";
const value2 = "57.23";
const value3 = "25 kroner";

printOut("Number('254'): " + Number(value1));
printOut("parseInt('254'): " + parseInt(value1));
printOut("parseFloat('254'): " + parseFloat(value1));

printOut("Number('57.23'): " + Number(value2));
printOut("parseInt('57.23'): " + parseInt(value2));
printOut("parseFloat('57.23'): " + parseFloat(value2));

printOut("Number('25 kroner'): " + Number(value3));
printOut("parseInt('25 kroner'): " + parseInt(value3));
printOut("parseFloat('25 kroner'): " + parseFloat(value3));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const randomNumber = Math.floor(Math.random() * 360) + 1;

printOut("Random number between 1 and 360: " + randomNumber); 

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const part10TotalDays = 131;

const part10Weeks = Math.floor(part10TotalDays / 7);
const part10Days = part10TotalDays % 7;

printOut(
  part10TotalDays +
    " days = " +
    part10Weeks +
    " weeks and " +
    part10Days +
    " days"
);
printOut(newLine);