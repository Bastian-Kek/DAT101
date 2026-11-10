"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate() {
    const today = new Date();
    const formatted = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(formatted);
}
printTodaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodaysDate() {
    const today = new Date();
    const formatted = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(formatted);
    return today;
}

function daysUntilRelease(fromDate) {
    // Release date: November 19, 2026 (month index 10 = November)
    const release = new Date(2026, 10, 19);
    const startOfToday = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.round((release - startOfToday) / msPerDay);
}

const todayDate = getTodaysDate();
const daysLeft = daysUntilRelease(todayDate);
printOut(`🌴 Only ${daysLeft} days until GTA 6 releases on November 19, 2026! Get ready! 🌴`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleInfo(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut(`Radius: ${radius}`);
    printOut(`Diameter: ${diameter.toFixed(2)}`);
    printOut(`Circumference: ${circumference.toFixed(2)}`);
    printOut(`Area: ${area.toFixed(2)}`);
}

circleInfo(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleInfo(rect) {
    const circumference = 2 * (rect.width + rect.height);
    const area = rect.width * rect.height;

    printOut(`Width: ${rect.width}, Height: ${rect.height}`);
    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
}

rectangleInfo({ width: 10, height: 4 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(value, type) {
    const unit = type.toUpperCase();
    let celsius, fahrenheit, kelvin;

    if (unit === "C") {
        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;
    } else if (unit === "F") {
        fahrenheit = value;
        celsius = (value - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (unit === "K") {
        kelvin = value;
        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    } else {
        printOut("Unknown temperature type!");
        return;
    }

    printOut(`Input: ${value} ${unit}`);
    printOut(`Celsius: ${Math.round(celsius)}`);
    printOut(`Fahrenheit: ${Math.round(fahrenheit)}`);
    printOut(`Kelvin: ${Math.round(kelvin)}`);
}

convertTemperature(100, "C");
convertTemperature(212, "F");
convertTemperature(300, "K");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function netPrice(gross, vatGroup) {
    const group = vatGroup.toLowerCase();
    let vatRate;

    if (group === "normal") {
        vatRate = 25;
    } else if (group === "food") {
        vatRate = 15;
    } else if (group === "hotel" || group === "transport" || group === "cinema") {
        vatRate = 10;
    } else {
        return NaN;
    }

    return (100 * gross) / (vatRate + 100);
}

function printNetPrice(gross, vatGroup) {
    const net = netPrice(gross, vatGroup);
    if (isNaN(net)) {
        printOut("Unknown VAT group!");
    } else {
        printOut(`Net price (${vatGroup}, ${gross} kr gross): ${net.toFixed(2)} kr`);
    }
}

printNetPrice(1250, "normal");
printNetPrice(115, "Food");
printNetPrice(220, "CINEMA");
printNetPrice(500, "goblins");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSDT(speed, distance, time) {
    let missingCount = 0;
    if (speed === undefined) missingCount++;
    if (distance === undefined) missingCount++;
    if (time === undefined) missingCount++;

    if (missingCount !== 1) return NaN;
    if (speed === undefined) return distance / time;
    if (distance === undefined) return speed * time;
    return distance / speed;
}

printOut(`Speed (d=100, t=5): ${calculateSDT(undefined, 100, 5)}`);
printOut(`Distance (s=20, t=4): ${calculateSDT(20, undefined, 4)}`);
printOut(`Time (s=50, d=200): ${calculateSDT(50, 200, undefined)}`);
printOut(`Two missing: ${calculateSDT(undefined, 100, undefined)}`);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function padString(text, maxLength, padChar, insertBefore) {
    if (text.length >= maxLength) {
        return text;
    }

    const missing = maxLength - text.length;
    const filler = padChar.repeat(missing);

    return insertBefore ? filler + text : text + filler;
}

printOut(padString("hello", 10, "*", true));
printOut(padString("hello", 10, "*", false));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function checkMathPattern(lines) {
    let current = 1;

    for (let n = 1; n <= lines; n++) {
        let leftSide = "";
        let rightSide = "";
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < n + 1; i++) {
            leftSide += current + " ";
            leftSum += current;
            current++;
        }

        for (let i = 0; i < n; i++) {
            rightSide += current + " ";
            rightSum += current;
            current++;
        }

        if (n <= 5) {
            printOut(leftSide.trim() + " = " + rightSide.trim());
        }

        if (leftSum !== rightSum) {
            printOut(`Mismatch at line ${n}: ${leftSum} ≠ ${rightSum}`);
            return;
        }
    }

    printOut("Maths fun!");
}

checkMathPattern(200);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

printOut(`Factorial of 5 is: ${factorial(5)}`);
printOut(`Factorial of 6 is: ${factorial(6)}`);
printOut(newLine);
