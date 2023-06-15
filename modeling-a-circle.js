// Complete the following program to add the circle object definition. 
// Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"))

// TODO: create the circle object here
let circle = {
	circumference() {
  	return 2 * Math.PI * r
  },
  area() {
  	return (Math.PI) * r**2
  }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
