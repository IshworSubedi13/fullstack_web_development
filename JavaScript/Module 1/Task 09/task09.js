const num = parseInt(prompt("Enter an integer:"));
const result = document.querySelector(".result");

if (isNaN(num)) {
    result.textContent = "Its not a valid number.";
} else if (num <= 1) {
    result.textContent = num + " is not a prime number.";
} else {
    let isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.textContent = num + " is a prime number.";
    } else {
        result.textContent = num + " is not a prime number.";
    }
}