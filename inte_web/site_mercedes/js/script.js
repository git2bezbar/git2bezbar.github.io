var i = 0;
var txt = 'apprenez en plus sur mercedes.'; 
var speed = 50; 

function typeWriter() {

  if (i < txt.length) {
    document.querySelector(".titre").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
}
function Ecrire() {
    setTimeout(typeWriter, 500);
}
