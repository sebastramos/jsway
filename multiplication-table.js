// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.
// Write a program that asks the user for a number, 
// then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

function askNumber() {
	let question = Number(prompt('Input a number between 2 and 9'))
  return question
}

function table() {  
	let number = askNumber()
  
  if (number >= 2 && number <= 9) {
  	for(let i = 1; i <= 9; ++i) {
    	let result = i * number
    	console.log(`${i} * ${number} = ${result}`)
    }
  } else {
  	table()
  }
}

table()
