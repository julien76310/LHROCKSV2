var tgt, tgtPos;
$('.overlay').on('click', function() {
  //$(this).removeClass('current');
  TweenMax.to($('.swiper-scrollbar'), 0, {autoAlpha:0});
  TweenMax.to($('.swiper-scrollbar'), 1, {autoAlpha:1, delay:0.6});
  $('.home').addClass('current');
  TweenMax.to($('.overlay'),0.2, {x:tgtPos.left-20, y:tgtPos.top, width:tgt.outerWidth()+40, height:tgt.outerHeight(), autoAlpha:0});
});
$('.list-item').on('click', function() {
  TweenMax.to($('.swiper-scrollbar'), 0, {autoAlpha:0});
  TweenMax.to($('.swiper-scrollbar'), 1, {autoAlpha:1, delay:0.6});
  $('.list-item').removeClass('current');
  $(this).addClass('current');
  $('.overlay').addClass('current');
  tgt = $(this),
  tgtPos = tgt.offset();
  TweenMax.to($('.overlay'),0, {x:tgtPos.left-20, y:tgtPos.top, width:tgt.outerWidth()+40, height:tgt.outerHeight(), autoAlpha:1});
  //swiperOverlay.update(true);
  swiperOverlay.slideTo(0, 0, false);
  $('.overlay .top').html(tgt.clone());
  TweenMax.to($('.overlay'),0.2, {x:0, y:$(document).scrollTop(), width:'100%', height:'100%'});
});

var swiperOverlay = new Swiper(".swiper-container.overlay", {
  scrollbar: ".overlay > .swiper-scrollbar",
  scrollbarHide: false,
  scrollbarDraggable: true,
  direction: "vertical",
  slidesPerView: "auto",
  mousewheelControl: true,
  freeMode: true
});

var swiperHome = new Swiper(".swiper-container.home", {
  scrollbar: ".home .swiper-scrollbar",
  scrollbarHide: false,
  scrollbarDraggable: true,
  direction: "vertical",
  slidesPerView: "auto",
  mousewheelControl: true,
  freeMode: true,
  onSliderMove: function(swiper, event) {
    //console.log('moved');
    moved = true;
  },
  onTouchEnd: function(swiper, event) {
    //console.log('touchEnd');
    TweenMax.delayedCall(0.1,resetmoved);
    //moved = false;
  }
});
function resetmoved() {
  moved = false;
}