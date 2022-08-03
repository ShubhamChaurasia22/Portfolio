if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').then(registeration => {
        console.log("SW Resgisterd");
        console.log(registeration);
    }).catch(error => {
        console.log("SW registration Failed" +error);
        console.log(registeration);
    });
}