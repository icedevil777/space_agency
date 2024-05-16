// $(document).ready(function(){
//     $('.slick-slider').slick({
//       "setting-name": "setting-value",
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     });
// });


$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
              }
            }
        ]
    });

});
