let slideIndex2 = 1;
showSlidess(slideIndex2);

function plusSlidess(n2) {
  showSlidess(slideIndex2 += n2);
}

function currentSlides(n2) {
  showSlidess(slideIndex2 = n2);
}

function showSlidess(n2) {
  let i2;
  let slides2 = document.getElementsByClassName("carousel");
  let dots2 = document.getElementsByClassName("dott");
  if (n2 > slides2.length) {slideIndex2 = 1}    
  if (n2 < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = "none";  
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
    dots2[i2].className = dots2[i2].className.replace(" activee", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " activee";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}