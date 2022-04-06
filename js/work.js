let box1 = document.querySelector('.box-1')
let image1 = document.querySelector('.one')
let portflio = document.querySelector('.portflio')
let body = document.querySelector('body')


box1.onclick = function (){
    image1.style.display = "block";
    image1.style.opacity = "1";
    portflio.style.opacity = "0.2";
    document.addEventListener('mouseup', function(e) {
        if (image1.style.display = "block") {
            image1.style.display = 'none';
            portflio.style.opacity = "1";
        }
    });
}


let box2 = document.querySelector('.box-2')
let image2 = document.querySelector('.two')


box2.onclick = function (){
    image2.style.display = "block";
    image2.style.opacity = "1";
    portflio.style.opacity = "0.2";
    document.addEventListener('mouseup', function(e) {
        if (image2.style.display = "block") {
            image2.style.display = 'none';
            portflio.style.opacity = "1";
        }
    });
}

let box3 = document.querySelector('.box-3')
let image3 = document.querySelector('.three')


box3.onclick = function (){
    image3.style.display = "block";
    image3.style.opacity = "1";
    portflio.style.opacity = "0.2";
    document.addEventListener('mouseup', function(e) {
        if (image3.style.display = "block") {
            image3.style.display = 'none';
            portflio.style.opacity = "1";
        }
    });
}


let box4 = document.querySelector('.box-4')
let image4 = document.querySelector('.for')


box4.onclick = function (){
    image4.style.display = "block";
    image4.style.opacity = "1";
    portflio.style.opacity = "0.2";
    document.addEventListener('mouseup', function(e) {
        if (image4.style.display = "block") {
            image4.style.display = 'none';
            portflio.style.opacity = "1";
        }
    });
}

let box5 = document.querySelector('.box-5')
let image5 = document.querySelector('.five')


box5.onclick = function (){
    image5.style.display = "block";
    image5.style.opacity = "1";
    portflio.style.opacity = "0.2";
    document.addEventListener('mouseup', function(e) {
        if (image5.style.display = "block") {
            image5.style.display = 'none';
            portflio.style.opacity = "1";
        }
    });
}

let box6 = document.querySelector('.box-6')
let image6 = document.querySelector('.six')


box6.onclick = function (){
    image6.style.display = "block";
    image6.style.opacity = "1";
    portflio.style.opacity = "0.2";
    document.addEventListener('mouseup', function(e) {
        if (image6.style.display = "block") {
            image6.style.display = 'none';
            portflio.style.opacity = "1";
        }
    });
}
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