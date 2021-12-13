var play = document.querySelector(".mdl-navigation__link mdl-typography--text-uppercase");
play.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  dataLayer.push({
    'event':'general:event',
    'eventCategory':'click:header',
    'eventLabel':'play'
  })
})