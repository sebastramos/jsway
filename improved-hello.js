// Say hello to the user
// TODO: ask user for first and last name
// TODO: call sayHello() and show its result

let firstName = () => {
	let firstName = prompt('What\'s your first name')
	return firstName
}

let lastName = () => {
	let lastName = prompt('What\'s your last name')
  return lastName
}

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

console.log(sayHello(firstName(), lastName()))


