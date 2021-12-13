var logo = document.querySelector(".android-logo-image");

//Adicionando um escutador de evento na imagem do logo. Ao ser clicado, colocará as variaveis e respectivos valores no datalayer;
logo.addEventListener('click', function(){

     window.dataLayer = window.dataLayer || [];
       window.dataLayer.push({
          'event': 'generic:event',
          'eventCategory': 'android:header',
          'eventAction': 'click:img',
          'eventLabel': 'logo'
  });
  // teste de funcionalidade
  console.log("adicionando um escutador de evento ao clicarem no logo,");
});