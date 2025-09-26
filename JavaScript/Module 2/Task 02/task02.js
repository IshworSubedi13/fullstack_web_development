const numberofparticipants = parseInt(prompt("Enter number of participants:"));
let names = [];

for (let i = 0; i < numberofparticipants; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    names.push(name);
}
names.sort();
for (let i = 0; i < names.length; i++) {
    names[i] = `<li>${names[i]}</li>`;
}
document.querySelector(".name").innerHTML = names.join("");