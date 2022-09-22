
//Carousel

let slides = document.querySelectorAll(".slide");
slides.forEach((slide,indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let slideAtual = 0;

let proximoSlide = document.querySelector('.btn-direito');

proximoSlide.addEventListener("click", function () {
    if (slideAtual === 3) {
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
        slideAtual = 3;
    } else {
        slideAtual--;
    }
    
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - slideAtual)}%)`;
      });
  });
   
 
  //Slider Produtos - Swiper Lib

  

const swip = document.querySelector('.swiper').swiper;
let swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  width:350,
  breakpoints: {
    0: {
      width:250,
      slidesOffsetAfter:-700,
    },
    1000: {
      width:420,
      spaceBetween:10,
    }
  }
  

});

 window.addEventListener("resize", function() {
  if (window.innerWidth > 1001) { 
    swiper.setProgress(0, 500)
    swiper.disable();
    
 }else {
  
  swiper.enable()
 }
});
window.addEventListener("load", function() {
  if (window.innerWidth > 1001) { 
    swiper.disable();

    
 }else {
  swiper.enable();
  
 }
});

