const start = parseInt(prompt("Enter the start year:"));
const end = parseInt(prompt("Enter the end year:"));

const result = document.querySelector(".leapyear");
let items = "";

if (isNaN(start) || isNaN(end) || start > end) {
    result.innerHTML = "<p>Invalid input try again.</p>";
} else {
    for (let year = start; year <= end; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
             items += `<li>${year}</li>`;
        }
    }
    result.innerHTML = items;
}