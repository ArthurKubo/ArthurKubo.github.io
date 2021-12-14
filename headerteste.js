/*--HEADER--*/

//PHONE
var phone = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[0];

phone.addEventListener('click', function() {
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'general:event',
    'eventCategory':'android:header',
    'eventAction':'click:img',
    'eventLabel':'phones'
  });
  console.log("push do 'phone' para o dataLayer");
});
// TABLETS
var tablets = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[1];
tablets.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'general:event',
    'eventCategory': 'android:header',
    'eventActioin':'click:img',
    'eventLabel':'tablets'
  });
  console.log("push do 'tablets' para o dataLayer");
});
//WEAR
var wear = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[2];
wear.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'general:event',
    'eventCategory':'android:header',
    'eventAction': 'click:img',
    'eventLabel':'wear'
  })    
  console.log("push do 'wear' para o dataLayer")
})
//TV
var tv = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[3];
tv.addEventListener('click', function(){
  window.dataLayer= window.dataLayer || [];
  window.dataLayer.push({
    'event':'general:event',
    'eventCategory': 'android:header',
    'eventAction':'click:img',
    'eventLabel':'tv'    
  });
  console.log("push do 'tv' para o dataLayer");
});

