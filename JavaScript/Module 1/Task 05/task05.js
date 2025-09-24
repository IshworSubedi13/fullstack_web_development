const year = parseInt(prompt("Enter a year:"));

if (isNaN(year)) {
    document.querySelector("#year").textContent = "Not a valid year!";
} else {
    let isLeapYear = false;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeapYear = true;
            } else {
                isLeapYear = false;
            }
        } else {
            isLeapYear = true;
        }
    }

    if (isLeapYear) {
        document.querySelector("#year").textContent = year + " is a leap year.";
    } else {
        document.querySelector("#year").textContent = year + " is not a leap year.";
    }
}