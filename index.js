// Code your solutions in this file

function printBadges(array) {
  for (let i = 1; i <= array.length; i++) {
    console.log("Welcome " + array[i - 1] + "! You are employee #" + i + ".");
  }
  return array;
}

function tailsNeverFails() {
  let flip = 'Tails';
  let tailsCounter = 0;
  while (flip === 'Tails') {
    let flipper = Math.random();
    if (flipper < 0.5) {
      flip = 'Heads';
    } else {
      tailsCounter++;
    }
  }
  return 'You got ' + tailsCounter + ' tails in a row!';
}
