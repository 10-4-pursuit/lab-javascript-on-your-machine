/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator(){
    let theOperator =  process.argv[2] //
    let sum = 0
 if (!theOperator) {  //Deteremine if this variable does not contains "theOperator"? by signify with the "!" operator. 
       return "No operation provided...";  //Determined that there was not "theOperator" thus returning the "No operation provided.."statement!
   } else if (theOperator !== "plus" && theOperator != "minus"){ // If no mathmatical expression is provided either "plus" or "minus".
       return `Invalid operation: ${theOperator}`; // Return the response of "Invalid operator :" + my variable of "theOperator" I used `string interpelation` in order to combine my return values. 
   }

    let numbers = process.argv.slice(3); //Created "numbers" variable equal to my [3] index of my array by creating new copy of to iterate by using the .slice() method becuase we know the "numbers" start at that index of the array!
    if (numbers.length === 0){  // if != No number is provided through length of the array!
         return "No numbers provided..." // Then return the response of "No numbers provided..."
    }

    for(let num of numbers){ // While looping through the array of numbers

         console.log (num)
         if (theOperator === "plus"){ // Checking if "theOperator" is equal to "plus"
              return sum = numbers.reduce((preiousVal, currentVal) => Number(preiousVal) + Number (currentVal)); // With the .reduce method I used to take two values from the prevVal and currentVal and manipulate my array to  add the values!
         }
         }

     if ( theOperator === "minus"){ 
   // With the .reduce method I used to take two values from the prevVal and currentVal and manipulate my array to the last value!

     return sum = numbers.reduce((preiousVal, currentVal) => Number(preiousVal) - Number (currentVal)) 
}}


// Don't change anything below this line.
module.exports = calculator;
