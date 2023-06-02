// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
let number = 200

while (number > 100) {
 number = prompt('Write a number who less than or equal to 100')
}

console.log(number)

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

number = ''

while (number > 100 || number < 50 ) {
 number = prompt('Write a number is between 50 and 100')
}

console.log(number)