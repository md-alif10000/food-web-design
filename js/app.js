$(document).ready(function(){
    var width=window.screen.width;
    var slide=width > 1100 ? 4:3
    console.log(width)
    $('.food-slider').slick({
        slidesToShow:slide,
        slidesToScroll:1,
        prevArrow:'.prev-btn',
        nextArrow:'.next-btn',
        autoplay:true,
        responsive:[{
            breakpoint:992,
            settings:{
                slidesToShow:2
            },
        },
        {
            breakpoint:450,
            settings:{
                slidesToShow:1
            },
        }
    ]

    })
})

$('.nav-trigger').click(()=>{
    $('.site-content-wrapper').toggleClass('scaled')
})