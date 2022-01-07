var phone = document.querySelectorAll(".android-navigation.mdl-navigation")[0];
phone.addEventListener('click', function(){
    window.dataLayer= window.dataLayer || [];
    window.dataLayer.push({
        'event': 'generic:event',
        'eventCategory':'header',
        'eventAction':'click:header',
        'eventLabel':'phone'
    });
    console.log("phone push to dataLayer");
});