let numbers = [];

while (true) {
    let userinput = parseFloat(prompt("Enter a number:"));
    if (numbers.includes(userinput)) {
        console.log(`The number ${userinput} has already been given.`);
        break;
    }
    numbers.push(userinput);
}
numbers.sort((a, b) => a - b);
console.log("Numbers in ascending order:");
numbers.forEach(number => console.log(number));
