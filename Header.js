var play = document.querySelector(".mdl-navigation__link mdl-typography--text-uppercase")[6];
play.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'general:event',
    'eventCategory':'android:header',
    'eventAction':'click:img'
    'eventLabel':'play'
  });
  console.log("push do play para o dataLayer")
});
