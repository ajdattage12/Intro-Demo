const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

reader.question("Hello, what is your name?", function (answer) {
    console.log("Hi " + answer);
});

const firstName = "Ariell"
const lastName = "Dattage"
const age = 33

console.log (firstName, lastName, age)

let x = 4;
let y = 100;
let z = 23;
let sum = x = y = z;

console.log(sum);
console.log(sum);


