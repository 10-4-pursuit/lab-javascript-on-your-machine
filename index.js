/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
   // Get the operation and numbers to operate on from the command line arguements
    const ops = process.argv[2];
    const numero = process.argv.slice(3);

   // Validates the operation 
   
   if (!ops){
    return "No operation provided...";
   }

   if (ops === "modulo"){
    return `Invalid operation: ${ops}`;
}


   //Validates the numbers

   if (numero.length === 0){
    return "No numbers provided..."
   }

   // convert numbers into numbers instead of strings
   const trueNumero =  numero.map(Number);

   //Calculate the result
   let result = trueNumero[0];

   for (let i = 1; i < trueNumero.length; i++){
    if (ops === "plus"){
        result += trueNumero[i];
    } else {
        result -= trueNumero[i];
    }
   }

   return result;
}



// Don't change anything below this line.
module.exports = calculator;
