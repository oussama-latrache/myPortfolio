// function to orginise nav var for mobile
//// mobile nav bar

let lftPoin = document.querySelector('.menu')
let nav = document.querySelector('nav')
let close = document.querySelector('.close')

lftPoin.onclick = function (){
    nav.classList.add("open")
}
close.onclick = function (){
    nav.classList.remove("open")
}
document.onkeyup = function (e) {
    if (e.Key === "Escape"){
        nav.classList.remove("open")
    }
}




// MAINTITLE effect
var options = {
  strings: ["Front-end-dev", "Ui/UX Designer"],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true
};

var typed = new Typed(".title-m", options); 




//// tilt .js
$('.btn-2').tilt({
  speed: 1000,
  scale: 1.3,
  glare: true,
  maxGlare: 1,
}); 
$('.about .container .image').tilt({
  speed: 1000,
  // scale: 1.3,
  glare: true,
  maxGlare: 1.5 
}); 

// // anime.js
// const title = document.querySelector('.fotter .container h1')
// const letters = [...document.querySelectorAll('.fotter .container h1 span')]


// title.addEventListener("mouseenter", handleLetters);
// title.addEventListener("mouseleave", handleLetters);

// let isAnimatingIn = false;
// let calledOut = false;
// let animOpened = false;

// function handleLetters(){
  
//   if(animOpened){
//     animOut();
//     animOpened = false;
//     return;
//   }

//   if(isAnimatingIn){
//     calledOut = true;
//     return;
//   }

//   isAnimatingIn = true;

//   const animPromise = new Promise((resolve) => {
//     animIn()
//     setTimeout(() => {
//       resolve()
//     }, 750)
//   })
//   animPromise.then(() => {
//     isAnimatingIn = false;

//     if(calledOut) {
//       animOut()
//       calledOut = false;
//     } else if (!calledOut){
//       animOpened = true;
//     }
//   })

// }

// function animIn(){
//   anime({
//     targets: ".fotter .container h1 span",
//     translateX: function(){
//       return anime.random(-250,250)
//     },
//     translateY: function(){
//       return anime.random(-250,250)
//     },
//     translateZ: function(){
//       return anime.random(-2000,750)
//     },
//     rotate: function(){
//       return anime.random(-250,250)
//     },
//     easing: "easeOutCirc",
//     duration: 750
//   })
// }

// function animOut(){
//   anime({
//     targets: ".fotter .container h1 span",
//     translateX: 0,
//     translateY: 0,
//     translateZ: 0,
//     rotate: 0,
//     easing: "easeInQuad",
//     duration: 750
//   })
// }

// About sction animation
let photo = document.querySelector('.about .container .image')
let aboutTxt = document.querySelector('.about .container .text')
let aboutSec = document.querySelector('.about')
//// top arrow
let up = document.querySelector('.top-btn')
//// progress skills
let section = document.querySelector(".skills-f");
let spans = document.querySelectorAll(".the-progress span");
//// work section animation
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')


//arrow to top and also about section animtion and also the skills section animation one function
window.onscroll = function () {
  if(window.scrollY >= 600){
    photo.style.transform = "translateX(" + (0) + "%)";
    aboutTxt.style.opacity = '1';
  }
  if(window.scrollY >= 700){
    up.style.cssText = 'display:block;'
  }else{
    up.style.cssText = 'display:none;'
  }
  if (window.scrollY >= section.offsetTop) {
        console.log("Reached Section Three");
        spans.forEach((span) => {
          span.style.width = span.dataset.width;
        });
        up.style.cssText = 'display:block;'
    }else{
          up.style.cssText = 'display:none;'
  }
  if (window.scrollY >= 3000){
    p1.style.opacity = "1";
    // p2.style.transform = "translateX(" + (0) + "%)";
  }
}


up.onclick = function (){
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}


let bod  = document.querySelector('body')
// let light  = document.querySelector('.light')
let lightSun = document.querySelector('.light-sun')
let darkMoon = document.querySelector('.dark-moon')

lightSun.onclick = function (){
    bod.classList.add("light-theme")  
}
darkMoon.onclick = function (){
    bod.classList.remove("light-theme")  
}

// let load  = document.querySelector('.loader-wrapper')
// window.onload = function (){
//   load.style.display = "none"
// }

// the light switcher

// cursor


var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});


// a.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     cursor.classList.add('hover');
//   });
//   item.addEventListener('mouseleave', () => {
//     cursor.classList.remove('hover');
//   });
// })
// cursor