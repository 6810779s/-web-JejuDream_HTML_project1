let slides = document.querySelectorAll("#slides > img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let current = 0;
showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n){
  for(let i=0; i<n; i++){
    slides[i].style.display = "none"; /*모든 이미지를 화면에서 감춤*/
  }
  slides[n].style.display="block";
 
}

function prevSlide(){
  if(current > 0) current -= 1;
  else current = slides.length -1;
    showSlides(current);
}

function nextSlide(){
  if(current < 2) current += 1 ;
  else current = 0;
    showSlides(current);
}
