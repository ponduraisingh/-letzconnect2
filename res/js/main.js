document.addEventListener("DOMContentLoaded", function(event) {
    var textWrapper = document.querySelector('.ml10 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    var textWrapper2 = document.querySelector('.ml11 .letters');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    var textWrapper3 = document.querySelector('.ml12 .letters');
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    var textWrapper4 = document.querySelector('.ml13 .letters');
    textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
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
    });
});