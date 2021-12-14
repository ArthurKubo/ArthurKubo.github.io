/*--HEADER--*/

/* Push do botão Phone*/ 
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
/*Push do botão Tablets*/
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


