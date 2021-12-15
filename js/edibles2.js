console.log("home.js loaded");
document.images[1].src = "images/The paleo diet.jpg";
document.images[2].src = "images/Low fat diet.jpg";
document.images[3].src = "images/Atkins diet.jpg";
document.images[4].src = "images/DASH-diet-.jpg";
const span = document.getElementsByTagName("span");
console.log(span);
span[0].onclick = function () {
    span[0].style.display = 'none';
    document.getElementById("p1").style.height = '100%';
    span[1].style.display = 'block';
}
span[1].onclick = function () {
    span[1].style.display = 'none';
    document.getElementById("p1").style.height = '425px';
    span[0].style.display = 'block';
}
span[2].onclick = function () {
    span[2].style.display = 'none';
    document.getElementById("p2").style.height = '100%';
    span[3].style.display = 'block';
}
span[3].onclick = function () {
    span[3].style.display = 'none';
    document.getElementById("p2").style.height = '425px';
    span[2].style.display = 'block';
}
span[4].onclick = function () {
    span[4].style.display = 'none';
    document.getElementById("p3").style.height = '100%';
    span[5].style.display = 'block';
}
span[5].onclick = function () {
    span[5].style.display = 'none';
    document.getElementById("p3").style.height = '425px';
    span[4].style.display = 'block';
}
span[6].onclick = function () {
    span[6].style.display = 'none';
    document.getElementById("p4").style.height = '100%';
    span[7].style.display = 'block';
}
span[7].onclick = function () {
    span[7].style.display = 'none';
    document.getElementById("p4").style.height = '425px';
    span[6].style.display = 'block';
}
