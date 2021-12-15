var slidePosition = 1;
SlideShow(slidePosition);


function plusSlides(n) {
  SlideShow((slidePosition += n));
}


function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var s = document.getElementsByClassName("Containers");
  var c = document.getElementsByClassName("dots");
  if (n > s.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = s.length;
  }
  for (i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }
  for (i = 0; i < c.length; i++) {
    c[i].className = c[i].className.replace(" enable", "");
  }
  s[slidePosition - 1].style.display = "block";
  c[slidePosition - 1].className += " enable";
}