const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("invalid input, use like this: node calculator.js add 10 5");
} else {

  let result;

  if (operation == "add") {
    result = num1 + num2;
  } else if (operation == "subtract") {
    result = num1 - num2;
  } else if (operation == "multiply") {
    result = num1 * num2;
  } else if (operation == "divide") {
    if (num2 == 0) {
      console.log("cant divide by 0");
      result = undefined;
    } else {
      result = num1 / num2;
    }
  } else {
    console.log("invalid operation, use add/subtract/multiply/divide");
  }

  if (result !== undefined) {
    console.log("Result: " + result);
  }
}
