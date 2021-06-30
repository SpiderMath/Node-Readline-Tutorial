// Importing the module
const readline = require("readline");

const calcInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: "otc> ",
});

calcInterface.question("Enter your first number: \n", (firstInput) => {
	const firstNumber = Number(firstInput);
	if(isNaN(firstNumber)) {
		console.log("The first number is not a number");
		return calcInterface.close();
	}

	calcInterface.question("Enter your operator: \n", (operatorInput) => {
		if(!["*", "+", "-", "/"].includes(operatorInput)) {
			console.log("Invalid operator provided");
			return calcInterface.close();
		}

		calcInterface.question("Enter your second number: \n", (secondInput) => {
			const secondNumber = Number(secondInput);
			if(isNaN(secondNumber)) {
				console.log("The second number is not a number");
				return calcInterface.close();
			}

			const result = logic(firstNumber, operatorInput, secondNumber);

			console.log(`Your result is: ${result}`);
			calcInterface.close();
		});
	});
});

function logic(firstNumber, operator, secondNumber) {
	if(operator === "+") return firstNumber + secondNumber;
	else if(operator === "-") return firstNumber - secondNumber;
	else if(operator === "*") return firstNumber * secondNumber;
	else return firstNumber / secondNumber;
}