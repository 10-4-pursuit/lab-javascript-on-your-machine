/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  const [arg1, arg2, calc, ...nums] = process.argv;
  const isValid = validate(calc);
  let num;

  if (!isValid.status) {
    return isValid.message;
  }

if(nums.length === 0){
    return 'No numbers provided...'
}

  if (calc === "plus") {
    num = add(nums);
  }

  if (calc === "minus") {
    num = subtract(nums);
  }
console.log(num)
  return num;
}

function add(nums) {
  let output = 0;
  for (let num of nums) {
    output += Number(num);
  }
  return output;
}

function subtract(nums) {
  let output = Number(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    output -= Number(nums[i]);
  }
  return output;
}

function validate(calc) {
  if (!calc) {
    return { status: false, message: `No operation provided...` };
  }

  if (calc !== "plus" && calc !== "minus") {
    return { status: false, message: `Invalid operation: ${process.argv[2]}` };
  }
  return { status: true };
}

console.log(calculator())



// Don't change anything below this line.
module.exports = calculator;
