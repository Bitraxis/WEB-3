console.log("Hello, World!");

let num1 = prompt("Enter a number:");

if (num1 == 0) {
	var even = "zero";
} else if (num1 % 2 === 0){
	var even = "true";
} else {
	var even = "false";
}

console.log(`Is ${num1} even or zero? ${even}`);


