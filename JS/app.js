$(document).ready(function(){
  //Smooth scroll
  const anchors = document.querySelectorAll('a[href*="#"]')
  for(let anchor of anchors) {
    anchor.addEventListener("click",function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }
  //Slider options
  const windowInnerWidth = window.innerWidth
  $('.slider').slick({
    arrows: false,
    adaptiveHeight: false,
    slidesToScroll: 1,
    speed: 7000,
    easing: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  //Burger menu
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});
