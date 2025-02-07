// NAVBAR
$(document).ready(function()
{
    $("button").click(function()
    {
        $("ul").toggle(2000);
    })
})

// SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
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

//   COUNTER

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


$('#number1').jQuerySimpleCounter({end:+345678,duration: 3000});
$('#number2').jQuerySimpleCounter({end: +723898,duration: 3000});
$('#number3').jQuerySimpleCounter({end: +56547,duration: 3000});

// WOW
new WOW().init();