var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  const email = $('#email_address');
  const name1 = $('#name1');
  const comment = $('#comment');

  let isValid = true;

  if (name1.value == '') {
    name1.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    name1.nextElementSibling.textContent = '';
  }

  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }

  if ($("textarea").value == "") {
    comment.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    comment.nextElementSibling.textContent = '';
  }

  if (isValid == true) {
    alert("Congratulation You comments will be posted shortly");

  }
};


document.addEventListener('DOMContentLoaded', () => {
  $('#register').addEventListener('click', processEntries);
});