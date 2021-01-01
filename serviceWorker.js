const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/".
  "/index.html",
  "/js/app.js",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee1.jpg",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee2.jpg",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee3.jpg",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee4.jpg",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee5.jpg",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee6.jpg",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee7.jpg",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee8.jpg",
  "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEveent.respondWith{
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  }
})
