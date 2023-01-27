let swLocation ="../JS/sw.js";

if(navigator.serviceWorker){
    if(window.location.href.includes("localhost"))
        swLocation = "../JS/sw.js";
        navigator.serviceWorker.register(swLocation);
}