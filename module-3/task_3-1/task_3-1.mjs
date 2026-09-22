"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
const wakeUpTime = 8; 

if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
    printOut("I can take the train to school.");
} else {
    printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const checkNumber = 5;

if (checkNumber >0) 
    printOut("Positive");
else if (checkNumber < 0)
    printOut("Negative")
else
    printOut("Zero")


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize + "MP");

if (imageSize = Math.random() * 8) + 1;
if (imageSize >= 4) {
    printOut("Thank you");
} else 
    printOut("The image is too small");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize2 = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize2 + "MP");
if (imageSize2 >= 6) 
    printOut("Image is too large");

    if (imageSize2 >= 6)
         printOut("Image is too large");
    else if (imageSize2 >= 6)
        printOut ("Thank you")
    else
        printOut("The image is too small");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "Mars", "April", "Mai",
    "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList9 = ["January", "February", "Mars", "April", "Mai",
    "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth9 = monthList9.length;
const monthName9 = monthList9[Math.floor(Math.random() * noOfMonth9)];
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList10 = ["January", "February", "Mars", "April", "Mai",
    "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth10 = monthList10.length;
const monthName10 = monthList10[Math.floor(Math.random() * noOfMonth10)];

printOut("Month: " + monthName10);

if (monthName10 === "April")
    printOut("The gallery is closed for refurbishment.");
else
    printOut("The gallery is open as usual.");

printOut(newLine);
