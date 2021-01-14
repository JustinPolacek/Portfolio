// MODAL ///











// WAVE DRIP ANIMATION SCROLL

function scrollAppear(){
  var curvedText = document.querySelector('.curved-text');
  var icons = document.querySelector('.icons');
  var introPosition = curvedText.getBoundingClientRect().top;
  var introPosition = icons.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.6;
  if(introPosition < screenPosition){
      curvedText.classList.add('intro-appear');
      icons.classList.add('intro-appear');
      
  }
}

window.addEventListener('scroll', scrollAppear);




// MOBILE NAVIGATION //


const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});


//SLIDER ANIMATIONS - INTRO //

const tl = gsap.timeline({defaults: {ease: "power1.out"}});
tl.to('.text', {y:"0%", duration: 1.5, stagger: 0.75});
tl.to('.text-2', {y:"0%", duration: 1.5, duration: 0.75});
tl.to('.text-3', {y:"0%", duration: 1.5, duration: 0.75});
tl.to('.slider', {x: "-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {x: "-100%", duration: 1},"-=1");
tl.To('.hero-introduction', {opacity: 0}, {opacity: 1, duration: 1}, '-=2');
tl.to('.media',  { opacity: 0}, { opacity: 1, duration: 1}, '-=1');






