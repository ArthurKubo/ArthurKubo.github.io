/*--HEADER--*/

//PHONE
var phone = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[0];
var event = ['generic:event', 'android:header', 'click:img', 'phones']
phone.addEventListener("click", function(){pushinfo});
// TABLETS
var tablets = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[1];
var event = ['generic:event', 'android:header', 'click:img', 'tablets']
tablets.addEventListener("click", pushinfo);

//WEAR
var wear = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[2];
var event = ['generic:event', 'android:header', 'click:img', 'wear']
wear.addEventListener("click", pushinfo('generic:event', 'android:header', 'click:img', 'wear'));

//TV
var tv = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[3];
var event = ['generic:event', 'android:header', 'click:img', 'tv']
tv.addEventListener("click", pushinfo);
//AUTO
var auto = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[4];
var event = ['generic:event', 'android:header', 'click:img', 'auto']
auto.addEventListener("click", pushinfo);
//ONE
var one = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[5];
var event = ['generic:event', 'android:header', 'click:img', 'one']
one.addEventListener("click", pushinfo);
//PLAY
var play = document.querySelectorAll(".mdl-navigation__link.mdl-typography--text-uppercase")[6];
var event = ['generic:event', 'android:header', 'click:img', 'play']
play.addEventListener("click", pushinfo);
//SEARCH ICON
var search = document.querySelector(".mdl-button.mdl-js-button.mdl-button--icon");
var event = ['generic:event', 'android:header', 'click:img', 'search']
search.addEventListener("click", pushinfo);
//MORE BUTTON
var more = document.querySelector("#more-button");
var event = ['generic:event', 'android:header', 'click:img', 'more']
more.addEventListener("click", pushinfo);

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

  /*preciso que a função consiga puxar de algo externo, os dados a serem colocados no
