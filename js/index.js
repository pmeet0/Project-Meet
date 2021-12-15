
let array = [
    'images/WHO_tip1.jpg',
    'images/WHO_tip2.jpg',
    'images/WHO_tip3.png',
    'images/WHO_tip4.png']
    index = 0;
    duration = 4000;
    check=5;

function slideShow() {
    if (index == array.length) 
    { 
        index = 0;
    }
    document.getElementById('imagesSlideshow').src = array[index];
    if (screen.width<=500){
        document.getElementById('imagesSlideshow').style.width='285px';
        document.getElementById('imagesSlideshow').style.marginLeft='0px';  
    }
    else{
            document.getElementById('imagesSlideshow').style.width='700px';
            document.getElementById('imagesSlideshow').style.marginLeft='160px';
        }

    index++;
    console.log(check);
    check--;
    setTimeout("slideShow()", duration);
}
slideShow();