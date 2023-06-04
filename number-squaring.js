// Square the given number x
function square1(x) {
  return  x * x
}

// Square the given number x
const square2 = x => x * x


console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25


// When it's done, update the program so that it shows the square of every number between 0 and 10.

function square() {
  for(let i = 0; i <= 10; i++) {
  		console.log(`This is the square of ${i} is ${i * i}`)
	}
}

square()