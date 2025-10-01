function concat(arrayofStrings) {
    let result = "";
    for (let i = 0; i < arrayofStrings.length; i++) {
        result += arrayofStrings[i];
    }
    return result;
}
const names = ["Johnny", "DeeDee", "Joey", "Marky"];
const concatenatedString = concat(names);
document.querySelector(".result").textContent = concatenatedString;