// document.body.style.backgroundImage = "url('images/background/bg1.jpg')";
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
let hide = "hidden";
let show = "visible";

header.className = hide;

main.className = hide;

footer.className = hide;

window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () { header.className = show; }, 1500);
    setTimeout(function () { main.className = show; }, 2500);
    setTimeout(function () { footer.className = show; }, 3500);
});