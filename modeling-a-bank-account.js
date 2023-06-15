// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

let bankAccount = {
	name: 'Alex',
  balance: 0,
  credit(a, b) { 
  	if (a !== 0 || b !== 0) {
    	return this.balance += a + b	
    } else {
    	return this.balance
    }
  },
  describe(a, b) { 
  	return `owner: ${this.name}, balance ${this.credit(a, b)}`
  }
}

console.log(bankAccount.describe(0, 0))
console.log(bankAccount.describe(250, -80))