self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('couple-app-cache').then(cache => {
            return cache.addAll([
                '/',
                '/couple-app.html',
                '/weeks.json'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});