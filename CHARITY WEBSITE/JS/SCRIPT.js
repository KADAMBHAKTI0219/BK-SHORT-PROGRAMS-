// SWIPER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup:3,
  loop:true,
  loopFillGroupWithBlank:true,
  autoplay:true,
  breakpoints:
  {
    0:
    {
      slidesPerView: 1,
    },
    768:
    {
      slidesPerView: 2,
    },
    992:
    {
      slidesPerView: 3,
    },
  },
});

// COUNTER

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );
 
    var thisElement = $(this);
 
    $({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
         var mathCount = Math.ceil(this.count);
         thisElement.text(mathCount);
      },
      complete: settings.complete
   });
 };
 
 
 $('#number1').jQuerySimpleCounter({end: 60,duration: 3000});
 $('#number2').jQuerySimpleCounter({end: 9200,duration: 2000});
 $('#number3').jQuerySimpleCounter({end: 5800,duration: 2000});
 $('#number4').jQuerySimpleCounter({end: 2750,duration: 2500});

// WOW JS
new WOW().init();

// LOADER
window.addEventListener('load',function(){
document.querySelector('body').classList.add("loaded")  
});

// NAVBAR
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".navigation-bar").addClass("active");
      } else {
         $(".navigation-bar").removeClass("active");
      }
  });
});