const slides = document.querySelectorAll(".slide");

slides.forEach((slide,indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

let slideAtual = 0;

let proximoSlide = document.querySelector('.btn-direito');

proximoSlide.addEventListener("click", function () {
    slideAtual++;

 slides.forEach((slide, indx) => {
   slide.style.transform = `translateX(${100 * (indx - slideAtual)}%)`;
 });
});


proximoSlide.addEventListener("click", function () {
    if (slideAtual === maxSlide) {
      slideAtual = 0;
    } else {
      slideAtual++;
    }
  
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - slideAtual)}%)`;
    });
  });

  const anteriorSlide = document.querySelector('.btn-esquerdo');

  anteriorSlide.addEventListener("click", function() {
    if(slideAtual === 0) {
        slideAtual = maxSlide;
    } else {
        slideAtual--;
    }
    
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - slideAtual)}%)`;
      });
  });