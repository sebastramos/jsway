// Improve the example RPG to add character inventory management according to the following rules:

// A character's inventory contains a number of gold and a number of keys.

// Each character begins with 10 gold and 1 key.

// The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.

class Character {
	constructor(name, health, strength, xp, gold, key) {
  	this.name = name
  	this.health = health
    this.strength = strength
    this.xp = xp
    this.gold = gold
    this.key = key
  }
	status() {
  	console.log(`${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`)
  }
  attack(target) {
  	if(target.health > 0) {
    	console.log(`${this.name} attacks ${target.name} and causes ${this.strength} damage points`)
      target.health -= this.strength
     	if(target.health > 0) {
    		console.log(`${target.name} has ${target.health} health points left`)
    	} else {
      	this.xp += 10
    		console.log(`${this.name} eliminated ${target.name} and wins ${this.xp} experience points, ${this.gold} gold and ${this.key} key(s)`)
        this.gold += 10
        this.key += 1
    	}
    } else {
    	console.log(`${target.name} is already dead, no need to continue. You Win!`)
    }
  }
}

console.log('Welcome to the adventure! Here are our heroes:')

const aurora = new Character('Aurora', 150, 25, 0, 10, 1)
aurora.status()

const glacius = new Character('Glacius', 130, 30, 0, 10, 1)
glacius.status()

const spike = new Character('Spike', 50, 20)
console.log(`A wild monster has appeared: it's named ${spike.name}`)

spike.attack(aurora)
spike.attack(glacius)

aurora.attack(spike)
glacius.attack(spike)

aurora.status()
glacius.status()

aurora.attack(spike)