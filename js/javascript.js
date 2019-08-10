//----------------
//    Menu
//----------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links');
const classLies = document.querySelectorAll('.class-li');
const menuItems = document.querySelectorAll('.menu-items');


hamburger.addEventListener('click', () => {
    
   navLinks.classList.toggle('open');
    
   classLies.forEach(classLi => {
       classLi.classList.add('fade');
       
//       classLi.classList.toggle('fade');
        
    });
});

for (i = 0; i < menuItems.length; ++i) {
    menuItems[i].addEventListener('click', () => {
        navLinks.classList.remove('open');
    })
};

//-----------------------------
//  Menu-intersectionObserver
//------------------------------
const navWraper = document.querySelector('.nav-wraper');
const jumbotron = document.querySelector('.jumbotron');

//ponizsza linijka kodu jest do ustawinia kiedy intersectionObserver ma zaczac działac
const jumbotronOptions = {
    rootMargin: "-500px 0px 0px 0px"
};

const jumbotronObserver = new IntersectionObserver(function(
      entries, 
      jumbotronObserver
      ) {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
              navWraper.classList.add('nav-scrolled');
          } else {
              navWraper.classList.remove('nav-scrolled');
          }
      });
}, 
jumbotronOptions);

jumbotronObserver.observe(jumbotron);
//-----------------------------
//  Menu-intersectionObserver
//------------------------------

//navLinks.addEventListener('click', function (ev) {
//      if (ev.target.nodeName === 'li')
//          alert('alert');
//}, false);

//----------------
//    Menu
//----------------
//-----------------------------
//  SECTION - intersectionObserver
//------------------------------

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px" 
};

const appearOnScroll = new IntersectionObserver 
(function(
 entries, 
 appearOnScroll
 ) {
   entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
        
   });
}, 
appearOptions);

//Wywołanieobservera

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



//-----------------------------
//  SECTION - intersectionObserver
//------------------------------

//-----------------
//    DELEGACJA
//-----------------
//window.onload = function () { 
//    var list  = document.getElementById("parent-menu-items"); 
//    var menuItems = list.getElementsByClassName("menu-items"); 
//    for (var i = 0; i < links.length; i++) { 
//        links[i].onclick = function () { 
//          menuItems.classList.remove('fade');
////        alert("Heey-ya!"); 
//        return false; 
//        } 
//    } 
//}; 

//---------------------------
//    OVL

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    
})



//    OVL
//---------------------------
