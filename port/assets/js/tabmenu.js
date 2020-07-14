//section1 2-1
let tabBtn1 = $(".sec2-2 > .sec-tab > ul > li");
let tabCont1 = $(".sec2-2 > .sec-tac > .tabCont");

tabCont1.hide().eq(0).show();

tabBtn1.click(function(event){
    event.preventDefault();
    let target1 = $(this);
    let index1 = target1.index();
    //alert(index);
    tabBtn1.removeClass("active");
    target1.addClass("active");
    tabCont1.css("display","none");
    tabCont1.eq(index1).css("display","block");
});

//section1 2-2
let tabBtn2 = $(".sec2-3 > .sec-tab > ul > li");
let tabCont2 = $(".sec2-3 > .sec-tac > .tabCont");

tabCont2.hide().eq(0).show();

tabBtn2.click(function(event){
    event.preventDefault();
    let target2 = $(this);
    let index2 = target2.index();
    //alert(index);
    tabBtn2.removeClass("active");
    target2.addClass("active");
    tabCont2.css("display","none");
    tabCont2.eq(index2).css("display","block");
});

//section1 2-3
let tabBtn3 = $(".sec2-4 > .sec-tab > ul > li");
let tabCont3 = $(".sec2-4 > .sec-tac > .tabCont");

tabCont3.hide().eq(0).show();

tabBtn3.click(function(event){
    event.preventDefault();
    let target3 = $(this);
    let index3 = target3.index();
    //alert(index);
    tabBtn3.removeClass("active");
    target3.addClass("active");
    tabCont3.css("display","none");
    tabCont3.eq(index3).css("display","block");
});

//section1 2-4
let tabBtn4 = $(".sec2-5 > .sec-tab > ul > li");
let tabCont4 = $(".sec2-5 > .sec-tac > .tabCont");

tabCont4.hide().eq(0).show();

tabBtn4.click(function(event){
    event.preventDefault();
    let target4 = $(this);
    let index4 = target4.index();
    //alert(index);
    tabBtn4.removeClass("active");
    target4.addClass("active");
    tabCont4.css("display","none");
    tabCont4.eq(index4).css("display","block");
});

//section 4-1
let tabBtna = $(".sec4 > .tabBtna > nav > ul > li");
let tabConta = $(".sec4 > .tabBtna > .Cot");

tabConta.hide().eq(0).show();

tabBtna.click(function(event){
    event.preventDefault();
    let targeta = $(this);
    let indexa = targeta.index();
    //alert(index);
    tabBtna.removeClass("active");
    targeta.addClass("active");
    tabConta.css("display","none");
    tabConta.eq(indexa).css("display","block");
});

//section 4-2
let tabBtnb = $(".sec4 > .tabBtnb > nav > ul > li");
let tabContb = $(".sec4 > .tabBtnb > .Cot");

tabContb.hide().eq(0).show();

tabBtnb.click(function(event){
    event.preventDefault();
    let targetb = $(this);
    let indexb = targetb.index();
    //alert(index);
    tabBtnb.removeClass("active");
    targetb.addClass("active");
    tabContb.css("display","none");
    tabContb.eq(indexb).css("display","block");
});

//section 4-3
let tabBtnc = $(".sec4 > .tabBtnc > nav > ul > li");
let tabContc = $(".sec4 > .tabBtnc > .Cot");

tabContc.hide().eq(0).show();

tabBtnc.click(function(event){
    event.preventDefault();
    let targetc = $(this);
    let indexc = targetc.index();
    //alert(index);
    tabBtnc.removeClass("active");
    targetc.addClass("active");
    tabContc.css("display","none");
    tabContc.eq(indexc).css("display","block");
});