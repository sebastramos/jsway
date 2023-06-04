// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. 
// Test it using user input.

// Here are some tips for solving this exercise:

// Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// The value of number π (Pi) is obtained with Math.PI in JavaScript.
// You might want to use the exponentiation operator ** to perform computations.


function circumferenceOfCirle(radius) {
	return 2 * Math.PI * radius
}

function areaOfCirle(radius) {
	return Math.PI * (radius)** 2
}


let cicleCircumferenceAndArea = radius => {
	console.log(`The circumference of circle with a radius of ${radius} is ${circumferenceOfCirle(radius)}`)
  console.log(`The area of circle with a radius of ${radius} is ${areaOfCirle(radius)}`)
}

cicleCircumferenceAndArea(26)