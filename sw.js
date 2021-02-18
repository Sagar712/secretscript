self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./app.js", "./style.css", "./1489223.jpg", "./mask228.png", "./mask294.png", "./Contact.html", "./Storage.html", "./storage.js"]);
        })
    );
});

self.addEventListener("fetch", e => {
    console.log(`Intesepting fet req for: ${e.request.url}`);

    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );

});