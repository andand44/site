$(document).ready(function () {
    $('.slider-main').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000
    });
    $('.slider-event').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        centerPadding: '24px'
    });

    $('.product-img-current').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="product-img-arrows product-img-prev"><svg class="icon icon-arrow"><use xlink:href="symbol-defs.svg#icon-arrow"></use></svg></div>',
        nextArrow: '<div class="product-img-arrows product-img-next"><svg class="icon icon-arrow"><use xlink:href="symbol-defs.svg#icon-arrow"></use></svg></div>',
        fade: true,
        asNavFor: '.product-img-list'
    });
    $('.product-img-list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.product-img-current',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false        
    });

    $('body')
        .on('click', '.article-more', function () {
            $(this).parents('.article').toggleClass('active');
        })
        .on('click', '.catalog-nav-open', function () {
            $('.catalog-nav').addClass('active');
        })
        .on('click', '.catalog-nav-close', function () {
            $('.catalog-nav').removeClass('active');
        })
        .on('click', '.product-shop-head', function () {
            $(this).parents('.product-shop').toggleClass('active');
        })
        .on('click', '.up', function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
        });
    
    $('.catalog-nav-item').hover(function(){
        
    }, function(){
        $('.catalog-nav-item').removeClass('hover');
    })
    
    $(".catalog-nav-item")
        .mouseenter(function() {
            $('.catalog-nav-item').removeClass('hover');
            $(this).addClass('hover'); 
    });
});
