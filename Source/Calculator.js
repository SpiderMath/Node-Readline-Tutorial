// We will import our package
const readline = require("readline");

// Creating our interface
const calcInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	// prompt: "DefectiveDetective> ",
});

const validOperators = [
	"*",
	"-",
	"+",
	"/",
];

calcInterface.question("Enter the first number: ", (firstInput) => {
	const firstNumber = Number(firstInput);
	if(isNaN(firstNumber)) {
		// Invalid number provided
		console.log("Invalid number provided");
		return calcInterface.close();
	}

	calcInterface.question("Enter the operator: ", (operatorInput) => {
		if(!validOperators.includes(operatorInput)) {
			// Invalid operator provided
			console.log("Invalid operator provided");
			return calcInterface.close();
		}

		calcInterface.question("Enter the second number: ", (secondInput) => {
			const secondNumber = Number(secondInput);
			if(isNaN(secondNumber)) {
				// Invalid number provided
				console.log("Invalid number provided");
				return calcInterface.close();
			}

			const result = calculatorLogic(firstNumber, operatorInput, secondNumber);

			console.log(`Your Result: ${result}`);
			calcInterface.close();
		});
	});
});

function calculatorLogic(firstNumber, operator, secondNumber) {
	if(operator === "+") return firstNumber + secondNumber;
	else if(operator === "-") return firstNumber - secondNumber;
	else if(operator === "*") return firstNumber * secondNumber;
	else if(operator === "/") return firstNumber / secondNumber;
}