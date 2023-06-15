// List of words
// Write a program that asks the user for a word until the user types "stop". 
// The program then shows each of these words, except "stop".

function ask() {
	
	let bunchOfWords = ''
	let askWord

	do {
		askWord = prompt('Can you enter a word senior ?')
		bunchOfWords += ' ' + askWord
	} while (askWord !== 'stop')
		console.log(bunchOfWords)
}
  
ask()