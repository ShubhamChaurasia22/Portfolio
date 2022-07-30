// self.addEventListener('install', (e) => {
//     e.waitUntil(
//         caches.open("static").then(cache => {
//             return cache.addAll(["./", "./assets/css/styles.css","./assets/img/about.jpeg","./assets/js/main.js","./assets/pdf/Shubham_Chaurasia.pdf"]);
//         })
//     )
// });

// self.addEventListener('fetch', (e)=>{
//     e.respondWith(
//         caches.match(e.request).then(response => {
//             return response || fetch(e.request);
//         })
//     );
// });


self.addEventListener('install', function(event){

    event.waitUntil(
        caches.open('sw-cache').then(function(cache){
            return cache.add('index.html');
        })
    );
});

self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});