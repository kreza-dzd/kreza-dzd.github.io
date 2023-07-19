var canvas=document.getElementById('animation');
var ctx=canvas.getContext('2d');
var canvass=document.getElementById('babes');
var ctxx=canvass.getContext('2d');

let babes;

let animation;




window.onload = function () {
  console.log('loading.');
  resizeCanvas ()
  animation = document.getElementById("animation");
  babes = document.getElementById("babes");
  ctxx = babes.getContext('2d');

  // Adjust the context based on device pixel ratio
  let dpr = window.devicePixelRatio || 1;
  ctxx.scale(dpr, dpr);

}

window.onresize = function () {
  console.log('resizing.');
  resizeCanvas();

}


function resizeCanvas() {
  let dpr = window.devicePixelRatio || 1;

  // Update the size for 'animation' canvas
  animation.width = window.innerWidth * dpr;
  animation.height = window.innerHeight * dpr;
  animation.style.width = window.innerWidth + 'px';
  animation.style.height = window.innerHeight + 'px';

  // Update the size for 'babes' canvas
  babes.width = window.innerWidth * dpr;
  babes.height = window.innerHeight * dpr;
  babes.style.width = window.innerWidth + 'px';
  babes.style.height = window.innerHeight + 'px';
  
  ctx = animation.getContext('2d');
  ctxx = babes.getContext('2d');
  ctx.scale(dpr, dpr);
  ctxx.scale(dpr, dpr);
}



function prepareDocument () {
  document.body.style.padding = "0px";
  document.body.style.margin = "0px";
}



x=50;
y=70;
vx=1;
vy=1;
r=50;

x1=350;
y1=150;
vx1=1;
vy1=1;
r1=50

x2=800;
y2=100;
vx2=1;
vy2=1;
r2=50

x3=350;
y3=340;
vx3=1;
vy3=1;
r3=50;

x4=300;
y4=380;
vx4=1;
vy4=1;
r4=50;

x5=40;
y5=80;
vx5=1;
vy5=1;
r5=50;

x6=800;
y6=200;
vx6=1;
vy6=1;
r6=50;

x7=550;
y7=300;
vx7=1;
vy7=1;
r7=50;

x8=600;
y8=300;
vx8=1;
vy8=1;
r8=50;

x9=100;
y9=200;
vx9=1;
vy9=1;
r9=50;

x10=280;
y10=300;
vx10=1;
vy10=1;
r10=50;




function drawCircles() {
  // Clear both canvases
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctxx.clearRect(0, 0, canvass.width, canvass.height);

  if(x > canvas.width -r || x<r)
  { vx=-vx;
  }
  if(y > canvas.height -r || y<r)
  { vy=-vy;
  }
  x+=vx;
  y+=vy;
  
  
  if(x10 > canvas.width- r || x10<r) { vx10=-vx10; } 
  if(y10 > canvas.height -r || y10<r)  { vy10=-vy10; }
  x10+=vx10;
  y10+=vy10;
  
  ctx.beginPath();
  ctx.arc(x10,y10,r,0,2*Math.PI);
  ctx.fillStyle= "rgb(222, 8120, 224, 0.5)";
  ctx.lineWidth = 0.1;
  ctx.fill();
  ctx.closePath();
  
  
  if(x6 > canvas.width- r || x6<r) { vx6=-vx6; }
  if(y6 > canvas.height -r || y6<r)  { vy6=-vy6; }
  x6+=vx6;
  y6+=vy6;
  
  ctx.beginPath();
  ctx.arc(x6,y6,r,0,2*Math.PI);
  ctx.fillStyle= "rgb(155, 81, 224, 0.5)";
  ctx.lineWidth = 0.1;
  ctx.fill();
  ctx.closePath();
  
  
  if(x7 > canvas.width- r || x7<r) { vx7=-vx7; }
  if(y7 > canvas.height -r || y7<r)  { vy7=-vy7; }
  x7+=vx7;
  y7+=vy7;
  
  ctx.beginPath();
  ctx.arc(x7,y7,r,0,2*Math.PI);
  ctx.fillStyle="rgb(208, 61, 51, 0.5)";
  ctx.fill();
  ctx.closePath();
  
  
  
  
  
  if(x8 > canvas.width- r || x8<r) { vx8=-vx8; }
  if(y8 > canvas.height -r || y8<r)  { vy8=-vy8; }
  x8+=vx8;
  y8+=vy8;
  
  ctx.beginPath();
  ctx.arc(x8,y8,r8,0,2*Math.PI);
  ctx.fillStyle="rgb(0, 208, 132, 0.5)";
  ctx.fill();
  ctx.closePath();
  
  
  if(x9 > canvas.width- r || x9<r) { vx9=-vx9; }
  if(y9 > canvas.height -r || y9<r)  { vy9=-vy9; }
  x9+=vx9;
  y9+=vy9;
  
  ctx.beginPath();
  ctx.arc(x9,y9,r,0,2*Math.PI);
  ctx.fillStyle="rgb(255, 253, 116, 0.5)";
  ctx.fill();
  ctx.closePath();

  if(x > canvass.width- r || x<r)
{ vx=-vx;
}
if(y > canvass.height -r || y<r)
{ vy=-vy;
}
x+=vx;
y+=vy;



//first circle


ctxx.beginPath();
ctxx.arc(x1,y1,r,0,2*Math.PI);
ctxx.fillStyle= "rgb(161, 243, 222)";
ctxx.lineWidth = 0.1;
ctxx.fill();
ctxx.closePath();


ctxx.beginPath();
ctxx.arc(x2,y2,r,0,2*Math.PI);
ctxx.fillStyle="rgb(255, 252, 153)";
ctxx.fill();
ctxx.closePath();


ctxx.fillStyle= "rgb(255, 209, 220, 0.5)";
ctxx.beginPath();
ctxx.arc(x3,y3,r,0,2*Math.PI);
ctxx.fill();
ctxx.closePath();


ctxx.fillStyle= "rgb(208, 61, 51)";
ctxx.beginPath();
ctxx.arc(x4,y4,r,0,2*Math.PI);
ctxx.fill();
ctxx.closePath();


ctxx.beginPath();
ctxx.arc(x5,y5,r,0,2*Math.PI);
ctxx.fillStyle="rgb(255, 252, 153, 0.5)";
ctxx.fill();
ctxx.closePath();

  // Request the next animation frame
  window.requestAnimationFrame(drawCircles);
}

drawCircles();







function carousel() {
  const carouselSlider = document.querySelector(".carousel__slider");
  const list = document.querySelector(".carousel__list");
  const items = document.querySelectorAll(".carousel__item");
  const totalWidth = Array.from(items).reduce((total, item) => total + item.offsetWidth, 0);

  let currentIndex = 0;
  const speed = totalWidth / 2000; // Change the value to adjust the speed

  function move() {
      currentIndex -= speed;

      if (currentIndex <= -items[0].offsetWidth) {
          const firstItem = document.querySelector(".carousel__item");

          // Move the first item to the end
          list.appendChild(firstItem);

          // Reset the current index
          currentIndex = 0;
      }

      carouselSlider.style.transform = `translateX(${currentIndex}px)`;
  }

  setInterval(move, 5);
}

carousel();


// Get the modal
var modal1 = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];


// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}




