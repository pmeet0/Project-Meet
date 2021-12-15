var i = 0; 
var images = []; 
var timesec = 3000; 


images[0] = "images/t1.jpg";
images[1] = "images/t2.jpg";
images[2] = "images/t3.jpg";
images[3] = "images/t4.jpg";
images[3] = "images/t5.jpg";


function changeImg() {
  document.slide.src = images[i];

  
  if (i < images.length - 1) {
    
    i++;
  } else {
    
    i = 0;
  }

  
  setTimeout("changeImg()", timesec);
}


window.onload = changeImg;
