const target=document.getElementById("target");
const firstname=document.createElement("li");
firstname.textContent="First item";
target.appendChild(firstname);  

const secondname=document.createElement("li");
secondname.textContent="Second item";
secondname.classList.add("my-item");
target.appendChild(secondname);

const thirdname=document.createElement("li");
thirdname.textContent="Third item";
target.appendChild(thirdname);
target.className="my-list";