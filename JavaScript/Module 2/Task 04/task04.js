let numbers = [];
let input;
do {
    userinput = parseFloat(prompt("Enter a number ( 0 to stop):"));
    if (userinput !== 0) {
        numbers.push(userinput);
    }
} while (userinput != 0);
numbers.sort((a, b) => b - a);
console.log("From largest to smallest numbers:");
numbers.forEach(number => console.log(number));
