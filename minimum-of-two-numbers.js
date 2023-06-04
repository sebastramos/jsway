// Let's pretend the JavaScript Math.min() function doesn’t exist.
// Complete the following program so that the min() function returns the minimum of its two received numbers.

function min(n1, n2) {
	if (n1 < n2) {
  	return n1
  } else {
  	return n2
  }
}


console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
