// Modeling a dog
// Complete the following program to add the dog object definition.

// TODO: create the dog object here
let dog = {
	name: 'Fang',
  species: 'boarhound',
  size: 75,
  bark: function bark() {
  	return 'Grrr! Grrr!'
  }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);