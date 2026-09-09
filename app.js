const isEven = require("./modules/isEven");

const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log("please give a number, like: node app.js 7");
} else {
  if (isEven(num)) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}
console.log("checking 1 to 10:");
for (let i = 1; i <= 10; i++) {
  if (isEven(i)) {
    console.log(i + " -> even");
  } else {
    console.log(i + " -> odd");
  }
}
