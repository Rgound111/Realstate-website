const burger= document.querySelector('.burger')
const navbar= document.querySelector('.navbar')
const navitems= document.querySelector('.nav-items')

burger.addEventListener( "click" , _run => {
 navbar.classList.toggle('h-resp')
 navitems.classList.toggle('v-resp')
})

//////////////// carousel /////////////////

var slideimg = document.getElementById("slideimg")

var images = new Array (
    "./images/bg.jpg",
    "./images/bg2.jpg",
    "./images/bg3.jpg"
)

var len = images.length ;
 var i=0;

function slider(){
   if(i>len-1){
    i=0;
   }
   slideimg.src=images[i]
   i++;
   setTimeout('slider()' , 2500);
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });