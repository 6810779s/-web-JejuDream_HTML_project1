let current = 0;
showSlides();

function showSlides(){
  let slides = document.querySelectorAll("#slides > img");
  for(let i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[current].style.display = "block";
  current = (current + 1) % slides.length;
  timeout = setTimeout(showSlides,3000);

}
/*사용자가 마우스를 가져다 댈때 슬라이드 일시 정지*/ 
slides.addEventListener('mouseover',function(){
  clearTimeout(timeout);
});

/*마우스가 영역 밖으로 가면 1초 후에 슬라이드 다시 재생*/
slides.addEventListener('mouseout',function(){
  showSlides();
});




// interval = setInterval(function(){
//   current = current % slides.length;
//   showSlides(current);
//   current++;
// },2000);

// function showSlides(n){
  
//   for(let i=0; i<slides.length; i++){
//     slides[i].style.display = "none";
//   }
//   slides[n].style.display = "block";
// }

// function nextSlide(){
//   showSlides((current+1)%slides.length);
// }
