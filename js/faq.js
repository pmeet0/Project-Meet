"use strict";

const toggle = evt => {
    const h2Element = evt.currentTarget;                 
    const divElement = h2Element.nextElementSibling;     

    h2Element.classList.toggle("minus");
    divElement.classList.toggle("pjs");

    evt.preventDefault();  
};

document.addEventListener("DOMContentLoaded", () => {
    const h2Elements = faqs.querySelectorAll("#faqs h2");
       
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }    
});