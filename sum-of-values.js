// Sum of values
// Write a program that creates the following array, 
// then calculates and shows the sum of its values (42 in that case).

const values = [];

function sum() {
	values.unshift(3, 11, 7, 2, 9, 10)
	
	return values.reduce((acc, val) => acc + val)
}

console.log(sum())
