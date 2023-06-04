// Write a program that plays "neither yes, nor no" with the user. 
// Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

while (ask !== 'yes' && ask !== 'no') {
	var ask = prompt('Enter "Yes" or "No"').toLowerCase()
  console.log(`Your answer is ${ask}`)
}