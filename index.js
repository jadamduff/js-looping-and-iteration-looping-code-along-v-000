// Code your solutions in this file

function printBadges(array) {
  for (let i = 1; i <= array.length; i++) {
    console.log("Welcome " + array[i - 1] + "! You are employee #" + i + ".");
  }
  return array;
}

function tailsNeverFails() {
  let flip = 'tails';
  let tailsCounter = 0;
  while (flip === 'tails') {
    let flipper = Math.random();
    if (flipper >= 0.5) {
      flip = 'heads';
    } else {
      tailsCounter++;
    }
  }
  return 'You got ' + tailsCounter + ' tails in a row!';
}
