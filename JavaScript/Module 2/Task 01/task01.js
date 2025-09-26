let inputnumber=[];

for(let i=0;i<5;i++){
    let number=parseInt(prompt("Enter a number:"));
    inputnumber.push(number);
}
console.log("The numbers you entered are: "+inputnumber);
for(let i=inputnumber.length;i>0;i--){
    console.log(inputnumber[i-1]);
}