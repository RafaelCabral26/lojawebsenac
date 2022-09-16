
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

  var x = document.documentElement.clientWidth
 let swip =  document.getElementsByClassName('.swiper').swiper;
  function myFunction(x) {
    if (x < 800) { // If media query matches*/
      let swiper = new Swiper('.swiper', {
        // Optional parameters
        
            direction: 'horizontal',
            loop: false,
            spaceBetween:10,
            width:200,
            slidesOffsetBefore:200,
            slideOffsetAfter:-200,
            
          });
      
    } else {
      swip.swiper.destroy();
      document.body.style.backgroundColor = "pink";
    }
  }
 // Call listener function at run time
window.addEventListener('onresize', myFunction(x));
