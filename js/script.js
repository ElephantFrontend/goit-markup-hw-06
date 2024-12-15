let orderModal = $('.order-modal');
let mobileMenu = $('.mobile-menu');

function setOrderModal(display){
    orderModal.css('display', display);
}

function setMobileMenu(display){
    mobileMenu.css('display', display);
}

$('.hero-button').click(function(){
    setOrderModal('block');
});

$('.menu-button').click(function(){
    setMobileMenu('block');
});

$('.modal-close-button').click(function(){
    setOrderModal('none');
    setMobileMenu('none');
});

$(orderModal).click(function(e){
    var target = e.target;
    if(!($('.modal').is(target)) && $('.modal').has(target).length ===0){
        setOrderModal('none');
    }
});

$(mobileMenu).click(function(e){
    var target = e.target;
    if(!($('.modal').is(target)) && $('.modal').has(target).length ===0){
        setMobileMenu('none');
    }
});

$(document).keydown(function(e){
    if(e.which == 27 ){
        setOrderModal('none');
        setMobileMenu('none');
    }
});