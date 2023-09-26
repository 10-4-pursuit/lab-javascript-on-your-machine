/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
        if (process.argv.length < 3) {
          return "No operation provided...";
        }
     
        const operation = process.argv[2];
      
        if (operation !== "plus" && operation !== "minus") {
          return `Invalid operation: modulo`;
        }
      
        const numbers = process.argv.slice(3).map(Number);
      
        if (numbers.length === 0) {
          return "No numbers provided...";
        }
      
        let result;
        if (operation === "plus") {
          result = numbers.reduce((acc, num) => acc + num, 0);
        } else if (operation === "minus") {
          result = numbers.reduce((acc, num, index) => {
            if (index === 0) {
              return num;
            } else {
              return acc - num;
            }
          });
        }
      
        return result;
      }
      
      module.exports = calculator;
      



// Don't change anything below this line.
module.exports = calculator;
