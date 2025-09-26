let dogs = [];
for(let i = 0; i < 6; i++) {
    let name = prompt(`Enter name of dog ${i + 1}:`);
    dogs.push(name);
}
dogs.sort().reverse();
let listnames = "";
for (let i = 0; i < dogs.length; i++) {
    listnames += `<li>${dogs[i]}</li>`;
}
document.querySelector(".dog-names").innerHTML = listnames;