const STATIC_CACHE = "static";
// se declara un vector con la ubicacion y el nombre de los archivos 
const APP_SHELL =[
    "/",
    "HTML/index.html",
    "CSS/style.css",
    "JS/functions.js",
    "JS/main.js",
    "JS/script1.js",
    "JS/script2.js",
    "img/dona.png",
];
// en el evento install se agregan los archivos a la 
self.addEventListener("install", (e) => {
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

// en el evento 
self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWhith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
});