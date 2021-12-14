<<<<<<< HEAD
var play = document.querySelectorAll(".mdl-navigation__link mdl-typography--text-uppercase")[0];
console.log(play);
=======
var play = document.querySelectorAll(".mdl-navigation__link mdl-typography--text-uppercase")[6];
console.log(play)
console.log("o console leu até essa parte");
>>>>>>> 79bc19e936163db3a74166cc9fad20334ec14e92
play.addEventListener('click', function() {
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'general:event',
    'eventCategory':'android:header',
    'eventAction':'click:img',
    'eventLabel':'play'
  });
  console.log("push do play para o dataLayer");
});
