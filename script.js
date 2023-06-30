/**** Menu burger *****/
var menuToggle = document.querySelector('.menu-toggle');
var mainNavigation = document.querySelector('.main-navigation');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('menu-active');
  mainNavigation.classList.toggle('menu-active');
});

//Slide persinnages
  var mySwiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
   
  });


  // animation au scroll des titres h2 DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.animation_title');
    function fadeInCallback(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }
    const fadeInObserver = new IntersectionObserver(fadeInCallback, { threshold: 0.1 });
    fadeElements.forEach(function(element) {
      element.classList.add('animation_title'); // Ajoutez la classe "" pour la configuration initiale du style
      fadeInObserver.observe(element);
    });
    
    // var timer;
    // var root = document.documentElement;
  
    // if (timer !== null) {
    //   clearTimeout(timer);
    //   root.style.setProperty("$vitesse", "5s");
    // }
  
    // timer = setTimeout(function() {
    //   root.style.setProperty("$vitesse", "30s");
    // }, 150);
  
    
  });
window.addEventListener('scroll', function() {
    if(timer !== null) {
      clearTimeout(timer);
      root.style.setProperty("--vitesse" , "5s");
    }
    timer =setTimeout(function(){
      root.style.setProperty("--vitesse" , "10s");
    },150
    );
  });
  root.style.setProperty("--vitesse" , "10s");

//animation au scroll des nuages

const thresholdRatio = 0.5; // Définissez ici le ratio d'intersection souhaité
const handleIntersection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > thresholdRatio) {
      entry.target.classList.add('translatecloud'); // Ajoute la classe 'animateCloud' à l'élément lorsque le ratio d'intersection est supérieur au seuil
      observer.unobserve(entry.target); // Cesse d'observer l'élément une fois qu'il a été animé
    }
  });
};

const cloudObserver = new IntersectionObserver(handleIntersection, { threshold: thresholdRatio }); // Crée un nouvel observateur d'intersection avec le seuil spécifié

document.querySelectorAll('.clouds').forEach(function (cloud) {
  cloudObserver.observe(cloud); // Observe chaque élément avec la classe 'clouds' pour détecter leur intersection avec la zone visible
});
 







