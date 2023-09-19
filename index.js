/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
/**
 * Calculates the result based on the provided operation and numbers.
 * @returns {number|string} The result of the calculation or an error message.
 */
function calculator() {
    const operation = process.argv[2];
    const numbers = process.argv.slice(3).map(Number);
  
    if (!operation) {
      return "No operation provided...";
    }
  
    if (numbers.length === 0) {
      return "No numbers provided...";
    }
  
    let result;
  
    switch (operation) {
      case "plus":
        result = numbers.reduce((acc, num) => acc + num, 0);
        break;
      case "minus":
        result = numbers.reduce((acc, num) => acc - num, numbers[0] * 2);
        break;
      default:
        return `Invalid operation: ${operation}`;
    }
  
    return result;
  }
  
  module.exports = calculator;
  

// Don't change anything below this line.
module.exports = calculator;
