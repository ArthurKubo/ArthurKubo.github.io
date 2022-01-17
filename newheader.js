/*--HEADER--*/

//PHONE
var phone = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[0];
var event = ['generic:event', 'android:header', 'click:img', 'phones']
phone.addEventListener("click", pushinfo)
// TABLETS
var tablets = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[1];
tablets.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'tablets'));

//WEAR
var wear = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[2];
wear.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'wear'));

//TV
var tv = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[3];
tv.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'TV'));
//AUTO
var auto = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[4];
auto.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'auto'));
//ONE
var one = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[5];
one.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'one'));
//PLAY
var play = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[6];
play.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'play'));
//SEARCH ICON
var search = document.querySelector(".mdl-button.mdl-js-button.mdl-button--icon");
search.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'search'));
//MORE BUTTON
var more = document.querySelector("#more-button");
more.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'more'));

//FUNÇÃO PUSH
function pushinfo (event){
    window.dataLayer= window.dataLayer || [];
    return window.dataLayer.push({
      'event':event[0],
      'eventCategory': event[1],
      'eventAction': event[2],
      'eventLabel':event[3]
    });
  };
