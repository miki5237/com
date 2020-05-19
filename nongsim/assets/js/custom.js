let wHeight = $(window).height();   
let dHeight = $(document).height(); 
let hHeight = $("#header").outerHeight();

let moveScroll;   
let lastScrollTop = 0; 

$(window).scroll(function(){
  moveScroll = true;
});

setInterval(function(){
  if(moveScroll){
    hasScroll();
    moveScroll = false;
  }
},250)

function hasScroll(){
  let wScroll = $(this).scrollTop();
  if(wScroll > lastScrollTop){ 
    
    $("#header").addClass("on");
  } else {
    if( wScroll + wHeight < dHeight ){ 
       $("#header").removeClass("on");
    }
  }
  
  lastScrollTop = wScroll
  
}

var mySwiper = new Swiper ('#banner .swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true,'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 5000,
  }
})

var mySwiper2 = new Swiper ('.notice .swiper-container', {
  loop: true,
  spaceBetween: 60,
  slidesPerView: 'auto',
  centeredSlides: true
})

var mySwiper3 = new Swiper ('.story .swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true
})



/* N.LIVE */
var mySwiper4 = new Swiper ('#banner-live .banner .swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true ,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true,'
  }
})



let tabBtn = $(".nlive-tabs > ul > li"); 
let tabCont = $(".nlive-posts > div");   

tabCont.hide().eq(0).show(); 

tabBtn.click(function(event){
  event.preventDefault();         
  let target = $(this);           
  let index = target.index();     
  tabBtn.removeClass("active");   
  target.addClass("active");      
  tabCont.css("display","none");
  tabCont.eq(index).css("display","block");
});