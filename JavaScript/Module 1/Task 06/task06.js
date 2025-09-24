const shouldCalculate = confirm("Should I calculate the square root?");
const output = document.querySelector(".output");

    if (shouldCalculate) {
      const input = prompt("Enter a number:");
      const number = parseFloat(input);

      if (isNaN(number)) {
        output.textContent = "That is not a valid number.";
      } else if (number < 0) {
        output.textContent = "The square root of a negative number is not defined.";
      } else {
        const squareRoot = Math.sqrt(number);
        output.textContent = `The square root of ${number} is ${squareRoot}.`;
      }
    } else {
      output.textContent = "The square root is not calculated.";
    }