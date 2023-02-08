
var slideIndex = 1;
function handleMenu(n) {
  var body = document.body.classList;
  if (body.contains('openmenu')) {
    body.remove('openmenu');
  } else {
    body.add('openmenu');
  }
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__item");
  let dots = document.getElementsByClassName("dot");
  if(slides.length > 0){
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
}
function goBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function(event) {
    var textWrapper = document.querySelector('.ml10 .letters');
    textWrapper ? textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>") : textWrapper = null; 
    var textWrapper2 = document.querySelector('.ml11 .letters');
    textWrapper2 ? textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>") : textWrapper2 = null; 
    var textWrapper3 = document.querySelector('.ml12 .letters');
    textWrapper3 ? textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>") : textWrapper3 = null; 
    var textWrapper4 = document.querySelector('.ml13 .letters');
    textWrapper4 ? textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>") : textWrapper4 = null; 
    var textWrapper3 = document.querySelector('.ml14 .letters');
    textWrapper3 ? textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>") : textWrapper3 = null; 
    var textWrapper4 = document.querySelector('.ml15 .letters');
    textWrapper4 ? textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>") : textWrapper4 = null; 
    anime.timeline({
        loop: true,
        autoplay: true,
    }).add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 900,
        delay: (el, i) => 45 * i,
    }).add({
        targets: '.ml11 .letter',
        rotateY: [-90, 0],
        duration: 3000,
        delay: (el, i) => 45 * i,
    }).add({
        targets: '.ml10',
        opacity: 0,
        duration: 10,
        easing: "easeOutExpo",
        delay: 10
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 10,
        easing: "easeOutExpo",
        delay: 10
    }).add({
        targets: '.ml12 .letter',
        rotateY: [-90, 0],
        duration: 900,
        delay: (el, i) => 45 * i,
    }).add({
        targets: '.ml13 .letter',
        rotateY: [-90, 0],
        duration: 3000,
        delay: (el, i) => 45 * i,
    }).add({
        targets: '.ml12',
        opacity: 0,
        duration: 10,
        easing: "easeOutExpo",
        delay: 10
    }).add({
        targets: '.ml13',
        opacity: 0,
        duration: 10,
        easing: "easeOutExpo",
        delay: 10
    }).add({
        targets: '.ml14 .letter',
        rotateY: [-90, 0],
        duration: 900,
        delay: (el, i) => 45 * i,
    }).add({
        targets: '.ml15 .letter',
        rotateY: [-90, 0],
        duration: 3000,
        delay: (el, i) => 45 * i,
    }).add({
        targets: '.ml14',
        opacity: 0,
        duration: 10,
        easing: "easeOutExpo",
        delay: 10
    }).add({
        targets: '.ml15',
        opacity: 0,
        duration: 10,
        easing: "easeOutExpo",
        delay: 10
    });
    showSlides(slideIndex);
	var splide = new Splide( '.splide', {
		  type   : 'loop',
		});
    splide.mount();
});