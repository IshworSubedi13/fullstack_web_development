 const studentName=prompt("Enter your name:");
 const randomNumber=Math.floor(Math.random()*4)+1;

 
if (!studentName){
    studentName="stdName";
}
 let class_name;
 switch(randomNumber){
    case 1:
        class_name="Gryffindor";
        break;
    case 2:
        class_name="Slytherin";
        break;
    case 3:
        class_name="Hufflepuff";
        break;
    case 4:
        class_name="Ravenclaw";
        break;
    default:
        class_name="No class assigned";
 }
 document.querySelector("#student").textContent = studentName+", you are " + class_name + ".";
