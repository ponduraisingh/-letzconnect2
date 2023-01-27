document.addEventListener("DOMContentLoaded", function(event) {
    // var textShift1 = document.querySelector('.ml10');
    // var textShift2 = document.querySelector('.ml11');
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
    })
    // var a2 = anime.timeline({
    //     loop: true,
    //     autoplay: false,
    //     update: function(anim) {
    //         aa2(anim)
    //     }
    // }).add({
    //     targets: '.ml11 .letter',
    //     rotateY: [-90, 0],
    //     duration: 3000,
    //     delay: (el, i) => 45 * i
    // }).add({
    //     targets: '.ml11',
    //     opacity: 0,
    //     duration: 0,
    //     easing: "easeOutExpo",
    //     delay: 1000
    // });
    // function aa1(anim) {
    //     if(anim.progress == 100)
    //         if(a2){
    //             console.log(anim)
    //             a1.pause;
    //         }
    //         if(a1){
    //             console.log(anim)
    //             a1.pause;
    //         }
    // }
    // function aa2(anim) {
    //     if(anim.progress == 100)
    //         if( a1 && a2) {
    //             console.log(anim)
    //             // a1.play
    //             a2.pause;
    //         }
    // }
    // if(textShift1.classList.contains("hide")) {
    //     console.log(textShift1.classList.contains("hide"))
    //     a2.play;
    // } else {
    //     a1.play;
    //     console.log(textShift2.classList.contains("hide"))
    // }
    // setInterval(function(){
    //     console.log("setInterval")
    //     var textShift1 = document.querySelector('.ml10');
    //     var textShift2 = document.querySelector('.ml11');
    //     if(textShift1.classList.contains("hide")) {
    //         textShift1.classList.remove("hide")
    //         textShift2.classList.add("hide")
    //     } else {
    //         textShift1.classList.add("hide")
    //         textShift2.classList.remove("hide")
    //     }
    // },6000)
});

        // if(shift) {
        //     textShift1.classList.remove("hide")
        //     textShift2.classList.add("hide")
        //     shift =false;
        // } else {
        //     textShift1.classList.remove("hide")
        //     textShift2.classList.add("hide")
        //     shift = true;
        // }