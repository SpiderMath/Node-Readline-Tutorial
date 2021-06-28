const readline = require("readline");

const interface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// interface.question("This will be your question!\n", (input) => {
// 	if(input === "") console.log("You didn't provide any input");
// 	else console.log(`Input provided: ${input}`);

// 	interface.close();
// });

let leaving = false;

interface.on("line", (input) => {
	if(leaving) {
		if(input.toLowerCase() === "y") interface.close();
		else if(input.toLowerCase() === "n") console.log("I knew you would not go");
		else console.log("I am just assuming you don't wanna go");
		leaving = true;
		return;
	}
	console.log(`'${input}'`);
});

interface.once("close", () => {
	console.log("Bye mate, nice time spent talking to ya!");
});

interface.on("SIGINT", () => {
	if(leaving) console.log("If you wanna leave then please type Y");
	console.log("Are you sure you want to leave?");
	leaving = true;
});