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
}

window.onresize = function () {
  console.log('resizing.');
  resizeCanvas();

}



function resizeCanvas () {
  animation.width = window.innerWidth;
  animation.height = window.innerHeight;
  babes.width = window.innerWidth;
  babes.height = window.innerHeight;
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

x5=50;
y5=70;
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






function createCircle()
{ 
ctx.clearRect(0,0, canvas.width, canvas.height);


//main
if(x > canvas.width -r || x<r)
{ vx=-vx;
}
if(y > canvas.height -r || y<r)
{ vy=-vy;
}
x+=vx;
y+=vy;



if(x6 > canvas.width- r || x6<r) { vx6=-vx6; }
if(y6 > canvas.height -r || y6<r)  { vy6=-vy6; }
x6+=vx6;
y6+=vy6;

ctx.beginPath();
ctx.arc(x6,y6,r,0,2*Math.PI);
ctx.fillStyle= "rgb(155, 81, 224, 0.5)";
ctx.lineWidth = 0.1;
ctx.fill();
ctx.stroke();
ctx.closePath();


if(x7 > canvas.width- r || x7<r) { vx7=-vx7; }
if(y7 > canvas.height -r || y7<r)  { vy7=-vy7; }
x7+=vx7;
y7+=vy7;

ctx.beginPath();
ctx.arc(x7,y7,r,0,2*Math.PI);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();
ctx.closePath();





if(x8 > canvas.width- r || x8<r) { vx8=-vx8; }
if(y8 > canvas.height -r || y8<r)  { vy8=-vy8; }
x8+=vx8;
y8+=vy8;

ctx.beginPath();
ctx.arc(x8,y8,r8,0,2*Math.PI);
ctx.fillStyle="rgb(0, 208, 132, 0.5)";
ctx.fill();
ctx.stroke();
ctx.closePath();


if(x9 > canvas.width- r || x9<r) { vx9=-vx9; }
if(y9 > canvas.height -r || y9<r)  { vy9=-vy9; }
x9+=vx9;
y9+=vy9;

ctx.beginPath();
ctx.arc(x9,y9,r,0,2*Math.PI);
ctx.fillStyle="black";
ctx.fill();
ctx.stroke();
ctx.closePath();





window.requestAnimationFrame(createCircle);
}
createCircle();



function secondCap()
{ 
ctxx.clearRect(0,0, canvass.width, canvass.height);

//main
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
ctxx.fillStyle= "blue";
ctxx.lineWidth = 0.1;
ctxx.fill();
ctxx.stroke();
ctxx.closePath();


//second circle
if(x2 < canvass.width- r || x2<r) { vx2=-vx2; }
if(y2 < canvass.height -r || y2<r)  { vy2=-vy2; }
x2+=vx2;
y2+=vy2;

ctxx.beginPath();
ctxx.arc(x2,y2,r,0,2*Math.PI);
ctxx.fillStyle= "rgb(155, 81, 224, 0.5)";
ctxx.fill();
ctxx.stroke();
ctxx.closePath();



//third circle
if(x3 < canvass.width- r || x3<r) { vx3=-vx3; }
if(y3 < canvass.height -r || y3<r)  { vy3=-vy3; }
x3+=vx3;
y3+=vy3;

ctxx.beginPath();
ctxx.arc(x3,y3,r,0,2*Math.PI);
ctxx.fillStyle="red";
ctxx.fill();
ctxx.stroke();
ctxx.closePath();


//fourth circle
if(x4 < canvass.width- r || x4<r) { vx4=-vx4; }
if(y4 < canvass.height -r || y4<r)  { vy4=-vy4; }
x4+=vx4;
y4+=vy4;

ctxx.beginPath();
ctxx.arc(x4,y4,r,0,2*Math.PI);
ctxx.fillStyle="rgb(123, 220, 181, 0.5)";
ctxx.fill();
ctxx.stroke();
ctxx.closePath();

if(x5 < canvass.width- r || x5<r) { vx5=-vx5; }
if(y5 < canvass.height -r || y5<r)  { vy5=-vy5; }
x5+=vx5;
y5+=vy5;

ctxx.beginPath();
ctxx.arc(x5,y5,r,0,2*Math.PI);
ctxx.fillStyle="rgb(123, 220, 181, 0.5)";
ctxx.fill();
ctxx.stroke();
ctxx.closePath();

window.requestAnimationFrame(secondCap);
}



secondCap();




    function carousel() {
        let carouselSlider = document.querySelector(".carousel__slider");
        let list = document.querySelector(".carousel__list");
        let item = document.querySelectorAll(".carousel__item");
        let list2;
      
        const speed = 1;
      
        const width = list.offsetWidth;
        let x = 0;
        let x2 = width;
      
        function clone() {
          list2 = list.cloneNode(true);
          carouselSlider.appendChild(list2);
          list2.style.left = `${width}px`;
        }
      
        function moveFirst() {
          x -= speed;
      
          if (width >= Math.abs(x)) {
            list.style.left = `${x}px`;
          } else {
            x = width;
          }
        }

        function moveSecond() {
            x2 -= speed;
        
            if (list2.offsetWidth >= Math.abs(x2)) {
              list2.style.left = `${x2}px`;
            } else {
              x2 = width;
            }
          }
      

        clone();
      
        let a = setInterval(moveFirst, 5);
        let b = setInterval(moveSecond, 5);
      
      }
      
      carousel();