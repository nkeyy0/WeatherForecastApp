const CACHE_NAME = "cache v 9.0";
const cacheList = ["/"];
const CACHING_DURATION =  2 * 3600;

self.addEventListener("install", (event) => {
  console.log("Установлен");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(cacheList))
  );
});

self.addEventListener("activate", (event) => {
  console.log("Активирован");
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  event.respondWith(
    caches.open(`${CACHE_NAME}-tiles`).then((cache) =>
      cache.match(request).then((response) => {
        if (response) {
          const expirationDate = Date.parse(
            response.headers.get("sw-cache-expires")
          );
          const now = new Date();
          if (expirationDate > now) {
            return response;
          }
        }

        return fetch(request.url).then((liveResponse) => {
          const expires = new Date();
          expires.setSeconds(expires.getSeconds() + CACHING_DURATION);

          const cachedResponseFields = {
            status: liveResponse.status,
            statusText: liveResponse.statusText,
            headers: { "SW-Cache-Expires": expires.toUTCString() },
          };
          liveResponse.headers.forEach((v, k) => {
            cachedResponseFields.headers[k] = v;
          });

          const returnedResponse = liveResponse.clone();
          return liveResponse.blob().then((body) => {
            cache.put(request, new Response(body, cachedResponseFields));
            return returnedResponse;
          });
        });
      })
    )
  );
});
