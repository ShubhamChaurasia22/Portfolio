if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').then(registeration => {
        console.log("SW Resgisterd");
    }).catch(error => {
        console.log("SW registration Failed");
    });
}