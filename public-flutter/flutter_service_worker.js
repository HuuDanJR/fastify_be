'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e5448c7e0b19cbdc3fd0c7e8d19eebdd",
"version.json": "99e2301f963a7308c7d264c795651971",
"favicon.ico": "ed97eaffc1a51fed1f8dd2d899033577",
"index.html": "67c8c45e96eff628f67ca91c1f7b8e71",
"/": "67c8c45e96eff628f67ca91c1f7b8e71",
"main.dart.js": "ccf768ae8f7811ab9e1605e1fcca2de8",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6a69f4be28ca6dba731e2f4ab3272f9e",
"success.png": "66951f011e1e9b7c2368d99a7d572b4a",
"assets/AssetManifest.json": "5d1e184bf21dbadf429490bc4969ff30",
"assets/NOTICES": "b6df28ce65e0d019140dc9546297c754",
"assets/FontManifest.json": "17e6eb404b2d791081b4f481ab9c7e55",
"assets/AssetManifest.bin.json": "3814526078fd18af4c7131097b56fa8c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6aaddbf42369571ec5d8e2db5e5d1d59",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/background_point_portal_edit1_cut.png": "035b1e852772145e35a8e08a305d3b8e",
"assets/assets/icons/happy.png": "41c5e0d0896d3877f5f7178b3ce86ee1",
"assets/assets/icons/Vegas_membership_One+-1.png": "0cf36dcdb5180b8e03e0498030c8f03f",
"assets/assets/icons/happiness_1.png": "cc1770f1bedeac5ad7df36f859cd8ac6",
"assets/assets/icons/Vegas_membership_One+-2.png": "d66155c393630cf5d8ce557a848bca78",
"assets/assets/icons/token.png": "993730021b948a183fafd021af704107",
"assets/assets/icons/sad.png": "b8cff3f925eb351b01df8bdc7848137f",
"assets/assets/icons/happiness.png": "7e80681064f22c58f3bdbee4d0ac6d40",
"assets/assets/icons/user.png": "28ced01f3fd481a12cc69001f48648b7",
"assets/assets/icons/logo_beige.jpg": "e1237b4241425807b5f7198fd59ff2e0",
"assets/assets/icons/point.png": "a1933432f77c0e8ac41a9e7fde782630",
"assets/assets/icons/Vegas_membership_One-2.png": "c0590836e863df531a843f2858e8ec6d",
"assets/assets/icons/user2.png": "db60aad1dee6d0807aa10e2756355ca3",
"assets/assets/icons/Vegas_membership_One-1.png": "9d4e9d675e32e895c58d753f1be935bf",
"assets/assets/icons/error.png": "4c38a07138627de1596a3c3250fe12b0",
"assets/assets/icons/success.png": "66951f011e1e9b7c2368d99a7d572b4a",
"assets/assets/icons/diamond.png": "0ea87f3f13d3b2b1cf0c259e965f8fe5",
"assets/assets/icons/voucher.png": "d104e70206d45a3b802a36be17d74040",
"assets/assets/icons/Vegas_membership_P-1.png": "33ab1ba0792746f2e3cbad0adc4c6d7f",
"assets/assets/icons/Vegas_membership_I-2.png": "ed28a1e8a494b07e99b587ab7c33e142",
"assets/assets/icons/Vegas_membership_P-2.png": "5990798e0df9c48d7a0e9c232136bb6f",
"assets/assets/icons/logo_app_yellow.png": "17663e288b54d766ac46037b91f02793",
"assets/assets/icons/Vegas_membership_I-1.png": "9dd174f14b1770d0d31ed753e447e9f4",
"assets/assets/icons/Vegas_membership_V-1.png": "0b4c066b639e6353c660f8c4b0b7ac20",
"assets/assets/icons/Vegas_membership_V-2.png": "87666b11388e551668b4bbf8132f3633",
"assets/assets/fonts/BebasNeue-Regular.otf": "efe36cb1e690638fc59af446ffc5e774",
"assets/assets/fonts/Quicksand-Medium.ttf": "890d9ed927bb7f0c6b9eed04f9c329e5",
"assets/assets/fonts/Quantum_Lemon_Bold.ttf": "0620ece73f774b5cee9462497f2f0514",
"assets/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf": "168ee09f171436bd22bfc276dc181ada",
"assets/assets/fonts/Cinzel-VariableFont_wght.ttf": "19d9462715f8122b5f57ef71b81843d0",
"assets/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf": "f54fcb31947f45744af46e4bb6166b0e",
"assets/assets/fonts/GoldencoastpersonaluseItalic-7BR0w.otf": "b89a558c76ab7f0c7b1ec50cbb664c56",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "c4ccfde2b701d591395ceb7a62c86304",
"canvaskit/canvaskit.js.symbols": "003797afc47f3c6539a71f06f06e6349",
"canvaskit/skwasm.wasm": "f188a1bd2adcc3934ec096de7939f484",
"canvaskit/chromium/canvaskit.js.symbols": "295a1fdaf7a86a9f9bd6186781f44ece",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "ae464726be5743e1dbee1f86ccd7e96b",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "b3ab261ffaef884b7c1c58bf9790d054",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
