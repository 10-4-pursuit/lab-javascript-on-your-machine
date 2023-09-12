/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let args = process.argv;
    let operator = args[2];
    let numbers = args.slice(3).map(Number);
    let result = 0;

    if (operator === "divide") {
        return `Invalid operation: divide`
    }
    
    if (args.length < 3) {
        return `No operation provided...`;
    }

    if (args.length < 4) {
        return `No numbers provided...`;
    }

    if (operator === 'plus') {
        result = 0;
        for (const num of numbers) {
          result += num;
        }
    }
    
    if (operator === 'minus') {
        result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result -= numbers[i];
        }
    }

    return result
}

// Don't change anything below this line.
module.exports = calculator;
