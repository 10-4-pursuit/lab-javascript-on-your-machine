/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {
    // Access the arguments from the command line (starting from index 2)
    let operations = process.argv[2];
    // Declare result as a variable to increment into.
    let result = 0;
    // Starting at position 3 and ...rest assigned to the variable NUMS.
    let numbers = process.argv.slice(3);

    if(!operations){
        return `No operation provided...`;
    } 

    if(!numbers.length){
        return `No numbers provided...`
    }

    if(operations !== 'plus' &&  operations !== 'minus' ) {
        return `Invalid operation: ${operations}` 
    }

    if(operations === 'plus') {
        for(let num of numbers) {
            result += Number(num)
        }
    }

   if(operations === 'minus') {
    result = numbers[0]
    for(i = 1; i < numbers.length; i++) {
        result -= Number(numbers[i])
    }
   }
return result 
}

// Don't change anything below this line.
module.exports = calculator;