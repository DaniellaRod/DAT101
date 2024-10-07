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
const number = 632252; 

const NumbertoDay = (number / 24)
const NumberToHour = (NumbertoDay / 60)


const NumbertoHour = (number * 60)
const NumbertoMin = (number / 60)
const NumberToSec = (number/ 60)



printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const usdToNokRate = 76 / 8.6;  
const nokToUsdRate = 8.6 / 76;  

let usdAmount = 54;
let nokConverted = Math.round(usdAmount * usdToNokRate);  


let nokAmount = nokConverted;  
let usdConverted = Math.round(nokAmount * nokToUsdRate);  

printOut(usdAmount + " USD is approximately " + nokConverted + " NOK.");
printOut(nokAmount + " NOK is approximately " + usdConverted + " USD.");


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*"There is much between heaven and earth that we do not understand."*/
const Tekst = ("There is much between heaven and earth that we do not understand."); 

printOut(Tekst.length + ""); 
printOut(Tekst[19]); 
printOut(Tekst[35]+Tekst[36]+Tekst[37]+Tekst[38]+Tekst[39]+Tekst[40]+Tekst[41]+Tekst[42]+Tekst[43]+Tekst[44]+Tekst[45]+Tekst[46]);   
printOut(Tekst.indexOf("earth") + "is the index of earth starts in the text" ); 
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(Boolean(5 > 3) + " "); 
printOut(Boolean(7 >= 7) + " "); 
printOut(Boolean("a" > "b") + " "); 
printOut(Boolean("1" < "a") + " ");
printOut(Boolean("2500" < "abcd") + " "); 
printOut(Boolean("arne" !== "thomas") + " "); 
printOut(Boolean(2 == 5) + " "); 
printOut(Boolean("abcd" > "bcd") + " "); 



printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const number1 = Number("254");
printOut(number1 + " "); 

const number2 = Number("57.23");
printOut(number2 + " "); 


const number3 = parseInt("25 kroner", 10);
printOut(number3 + " "); 



printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const r = Math.floor(Math.random() * 360) + 1;
printOut(r + " "); 


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 131;

const weeks = Math.floor(totalDays / 7);

const days = totalDays % 7;

printOut(`Weeks: ${weeks}, Days: ${days}` + " ");

printOut(newLine);