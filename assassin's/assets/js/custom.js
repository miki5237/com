/* nav */
let wHeight = $(window).height();   // 브라우저 높이
let dHeight = $(document).height(); // 컨텐츠의 높이
let hHeight = $("#nav").outerHeight(); //80 헤더의 높이

let moveScroll;   //스크롤 값을 감지하기 위한 변수
let lastScrollTop = 0; //스크롤의 마지막 위치 값

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
  if(wScroll > lastScrollTop){ //스크롤을 내렸을 때
    
    $("#nav").addClass("on");
  } else {
    if( wScroll + wHeight < dHeight ){ //스크롤을 올렸을 때
       $("#nav").removeClass("on");
    }
  }
  
  lastScrollTop = wScroll
  
}

/* story */
var mySwiper1 = new Swiper ('#swiper1', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true,'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

/* PORTFOLIO */
var mySwiper2 = new Swiper ('#swiper2', {
    loop: true,
    pagination: {
      el: '.pagination',
      clickable: 'true,'
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
})
