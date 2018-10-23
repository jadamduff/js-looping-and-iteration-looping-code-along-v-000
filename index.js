// Code your solutions in this file

function printBadges(array) {
  for (let i = 1; i <= array.length; i++) {
    console.log("Welcome " + array[i - 1] + "! You are employee #" + i + ".")
  }
  return array
}
