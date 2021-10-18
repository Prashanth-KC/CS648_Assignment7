//Step 1
function halfNumber(number) {
    "use strict";
    return number / 2;
}
var number = parseFloat(prompt("STEP 1. Half of a number. \nEnter a number below:"));
document.write("Half of " + number + " is " + halfNumber(number) + ".");

//Step 2
var square;
 function squareNumber(number) {
    "use strict";
    return number * number;
 }
 var num = parseFloat(prompt("STEP 2. Squaring a number. \nEnter a number to be squared:"));
 document.write("The result of squaring the number " + num + " is " + squareNumber(num) + ".");

 //Step 3
 function percentOf(number1, number2) {
    "use strict";
    return (number1 / number2) * 100;
}
var number1 = parseFloat(prompt("STEP 3. Percent the first number represents of the second number. \nEnter First Number"));
var number2 = parseFloat(prompt("Enter Second Number:"));
document.write(number1 + " is " + percentOf(number1, number2) + "% of " + number2 + ".");

//Step 4
function findModulus(number1, number2) {
    "use strict";
    return number2 % number1;
}
var number1 = parseFloat(prompt("STEP 4. The modulus of the two numbers. \nEnter First Number:"));
var number2 = parseFloat(prompt("Enter Second Number:"));
document.write(findModulus(number1, number2) + " is the modulus of " + number1 + " and " + number2 + ".");

//Step 5
var input = prompt("Enter numbers seperated by commas for addition :");
var numberArray = input.split(",");
var i;
for(i = 0; i < numberArray.length; i += 1) {
    numberArray[i] = parseFloat(numberArray[i]);
}
function sumOfAllNumbers(numberArray){
    "use strict";
    var sum = 0;
    var j;
    for (j = 0; j < numberArray.length; j += 1){
        sum = sum + numberArray[j];
    }
    return sum;
}
var ans = sumOfAllNumbers(numberArray);
document.writeln("Sum of " + input + " is " + ans + ".");