// dice generator using crypto module
// node dice.js  -> rolls once
// node dice.js 5 -> rolls 5 times

const crypto = require("crypto");

function rollDice() {
  return crypto.randomInt(1, 7); // 1 to 6
}

let times = parseInt(process.argv[2]);
if (!times) {
  times = 1;
}

for (let i = 0; i < times; i++) {
  console.log("Dice Rolled: " + rollDice());
}
