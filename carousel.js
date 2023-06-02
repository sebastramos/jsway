// Write a program that launches a carousel for 10 turns, showing the turn number each time.

for(let i = 1; i <= 10; i++) {
  console.log(`${i}th turn of carousel`)
}

// When it's done, improve it so that the number of turns is given by the user.

let userNumber = prompt('How many turns do you want ?')

for(let i = 1; i <= userNumber; i++) {	
  console.log(`${i}th turn of carousel`)
}