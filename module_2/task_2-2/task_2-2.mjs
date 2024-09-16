"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* 2 + 3 * 2 - 4 * 6
*/
const numbers = 2 + 3 * (2 - 4) * 6

printOut(numbers.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const meter = 25 
const cm = 34 
const totalCm = (meter * 100) + cm 
const totalMm = totalCm* 10 
const mmToInches = 25.4 
const TotalInches = (totalMm / mmToInches).toFixed(2); 

printOut(TotalInches.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const day = 3
const hour = 12 
const min = 14 
const sec = 45 

const DayMin = (day * 24 * 60);
const HourMin = (hour * 60);
const SecMin = (sec / 60);

const TotalTime = (DayMin + HourMin + min + SecMin);


printOut(TotalTime.toString());


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 
const number = 6.322.52 

const NumbertoDay = (number / 24)
const NumberToHour = (NumbertoDay / 60)
const NumberToMin = () 

const NumbertoHour = (number * 60)
const NumbertoMin = (number / 60)
const NumberToSec = (number/ 60)




printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);