// FUNCTIONS
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(first_number, second_number, operator) {
	switch (operator) {
		case "+":
			return add(first_number, second_number);
		case "-":
			return subtract(first_number, second_number);
		case "*":
			return multiply(first_number, second_number);
		case "/":
			return divide(first_number, second_number);
		default:
			console.log("Invalid operator!");
	}
}

// VARIABLES
let first_number;
let second_number;
let operator;

console.log(operate(1, 1, "+"));
console.log(operate(3, 1, "-"));
console.log(operate(2, 2, "*"));
console.log(operate(4, 2, "/"));

/*buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		let num = event.target.innerHTML;
		result.appendChild(num);
		container.appendChild(result);
	});
});*/
