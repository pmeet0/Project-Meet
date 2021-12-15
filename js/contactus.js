const $ = selector => document.querySelector(selector); 

const processEntries = (evt) => {
    evt.preventDefault();
    // get form controls to check for validity
    const name = $("#name");
    const phone = $("#phone");
    const email = $("#email_address");
    const query = $("#query");

    let Name;
    let Phonenumber;
    let EmailAddress;
    let Question;

    // check user entries for validity
    let isValid = true;
    let namepattern = /^[a-zA-Z]{2,30}$/;
    let phonepattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let mailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.value == '') {
        name.nextElementSibling.style.color = 'Red';
        name.nextElementSibling.innerHTML = 'This field is required.';
        isValid = false; 
    } else if (!namepattern.test(name.value)) {
        name.nextElementSibling.style.color = 'Red';
        name.nextElementSibling.innerHTML =
        'please enter name with letter only';
        isValid = false; 
    } else {
        name.nextElementSibling.innerHTML = '';
    }
    if (email.value == "") {
        email.nextElementSibling.style.color = 'Red';
        email.nextElementSibling.innerHTML = "This field is required.";
        isValid = false; 
    } else if (!mailpattern.test(email.value)) {
        email.nextElementSibling.style.color = 'Red';
        email.nextElementSibling.innerHTML =
        'please enter valid email address';
        isValid = false; 
    }else {
        email.nextElementSibling.innerHTML = ""; 
    }

    if (phone.value == ""){
        phone.nextElementSibling.innerHTML = "";
    } 
    else if (!phonepattern.test(phone.value)) {
        phone.nextElementSibling.style.color = 'Red';
        phone.nextElementSibling.innerHTML = "Enter a valid phone number.";
        isValid = false;
    }
    else { 
        phone.nextElementSibling.innerHTML = "";
    }
    if (query.value == "") {
        query.nextElementSibling.style.color = 'Red';
        query.nextElementSibling.innerHTML = "<br>This field is required.";
        isValid = false; 
    } else { 
        query.nextElementSibling.innerHTML = "";
    }
   
    // submit the form if all fields are valid
    if (isValid == true) {
        
        Name = document.getElementById("name");
        Phonenumber = document.getElementById("phone");
        EmailAddress = document.getElementById("email_address");
        Question = document.getElementById("query");
        
        localStorage.setItem("name", Name.value);
        localStorage.setItem("phone", Phonenumber.value);
        localStorage.setItem("email_address", EmailAddress.value);
        localStorage.setItem("query", Question.value);
        $("form").submit();
    }
    
};

const resetForm = () => {
    $("form").reset();
    $("#name").nextElementSibling.textContent = "*";
    $("#email_address").nextElementSibling.textContent = "*";
    $("#phone").nextElementSibling.textContent = " ";
    $("#query").nextElementSibling.textContent = "*";
    $("#name").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#name").focus();
    $("#submit_button").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
});