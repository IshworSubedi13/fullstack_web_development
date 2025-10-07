'use strict';

const form=document.getElementById('source');
const target=document.getElementById('target');

form.addEventListener('submit',function(event){
    console.log(form);
    event.preventDefault();   
    const firstName=document.querySelector('input[name="firstname"]');
    const lastName=document.querySelector('input[name="lastname"]');

    target.textContent="Your name is "+firstName.value+" "+lastName.value;

});


