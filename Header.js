// Estudo - Usando push para enviar valores ao dataLayer
var phone = document.querySelector(".mdl-navigation__link mdl-typography--text-uppercase");
window.dataLayer= window.dataLayer || [];
dataLayer.addEventListener('click', function(){
    dataLayer.push({
        'event':'generic:event',
        'eventCategory':'android:header',
        'eventAction': 'click:header',
        'eventLabel':'phone'
    })
console.log("Phone colocado no dataLayer")
})