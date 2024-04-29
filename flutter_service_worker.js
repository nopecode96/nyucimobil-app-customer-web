'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "706707fdaa2d751aefff3fab4639f17c",
"favicon.ico": "973f41053bfc821042ab5a97a280bd55",
"index.html": "7a64e59aab8af8c93900419d7fc84fb2",
"/": "7a64e59aab8af8c93900419d7fc84fb2",
"firebase-messaging-sw.js": "0b1c4c825bfc81203740b7618e53c71d",
"loader.css": "fd11639b1019925ce7bebc92a64e6241",
"main.dart.js": "f9ca2fc99051869c2cdd00bc4d98e21d",
"icon-192.png": "0f98c65da61f0d1e76ec6efecd1f7eb2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/favicon-16x16.png": "7671048a48218f8a15af0938131dcd4a",
"icons/icon-192-white.png": "0f98c65da61f0d1e76ec6efecd1f7eb2",
"icons/icon-192.png": "d52f04f3e21460dfc3a3e56d8524e0a5",
"icons/Icon-maskable-192.png": "4dc01d4601ec93fc3edf6e4459b51356",
"icons/Icon-maskable-512.png": "bad641e7103828e51c956a757b46eb92",
"icons/icon-512.png": "c060e793e15d3187bbd81e3d2fd43d82",
"icons/favicon-32x32.png": "bc14fa540ce4528d15b91c8da44a8d3d",
"manifest.json": "38f9d0824478ff2097611dc06ca14f1e",
"assets/AssetManifest.json": "3f1dc18d23059d282465ca8d2c457463",
"assets/NOTICES": "d6f070a656aebdd59225d8d5809af8de",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "7f077a3d5249abf336851a788e2a2010",
"assets/packages/gender_picker/assets/images/male.png": "b544146a8e95908f097fe86343f9140b",
"assets/packages/gender_picker/assets/images/female.png": "93c67e67ee8656ee2f13b917a815ec0a",
"assets/packages/gender_picker/assets/images/other.png": "4b5edfe11e630dbd98a09e04b2e35269",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "da0927090951cda93b9aa84bbbac2e8c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "adac17b5b2a0c6ebbb29b9bfbb03c91e",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "033dd2a738607b1d864ce8c1d3302a33",
"assets/fonts/MaterialIcons-Regular.otf": "0c01298c0d2df16c15135068dc519d20",
"assets/assets/login_bg.jpg": "3137c5e187ac7bcb8d527162747511ef",
"assets/assets/qrcode.jpg": "fcd30886010af37052858c0121e79b47",
"assets/assets/qris.png": "3189b2e3426730fac7298f77a9ed6375",
"assets/assets/banner_main.jpg": "df8aab4d32f19a1afcefcee67eee93ad",
"assets/assets/otp.png": "5919281bfe5f9202fa6c293da71a62ab",
"assets/assets/help.png": "bd4c69e8cffc5bc54396d062b094eb36",
"assets/assets/logo_white.png": "4e3503610efec36d1c78315d58798eca",
"assets/assets/icons/icon-192-white.png": "0f98c65da61f0d1e76ec6efecd1f7eb2",
"assets/assets/icons/icon-192.png": "d52f04f3e21460dfc3a3e56d8524e0a5",
"assets/assets/icons/call_center.png": "f0549a9b1329db6e2a7db7f658fd19c5",
"assets/assets/icons/Icon-maskable-192.png": "4dc01d4601ec93fc3edf6e4459b51356",
"assets/assets/icons/home.png": "ea74a3569d1019e46da87562e411eb94",
"assets/assets/icons/history.png": "e839123661b05622cf733c303f965e94",
"assets/assets/icons/car_wash.png": "d911bff9205b80872490e762f5bb52e2",
"assets/assets/icons/Icon-maskable-512.png": "bad641e7103828e51c956a757b46eb92",
"assets/assets/icons/garage.png": "e904df5eb9dc990096b97ede5ef6b72b",
"assets/assets/icons/icon-512.png": "c060e793e15d3187bbd81e3d2fd43d82",
"assets/assets/icons/orders.png": "0a36c3a713f6483fe27344c977be6170",
"assets/assets/profile.jpg": "8cf3fa622603ce43e193194320bace01",
"assets/assets/no_address.png": "e28b3f4fe47da66feaa7fb2329b771ba",
"assets/assets/product2.jpg": "9c699f2801d8e96d5fb41a83c9df624a",
"assets/assets/placeholder.jpeg": "6170a48e37b376b49665ca00433b219b",
"assets/assets/product3.jpg": "32b060e50074d979dd1dbc1caec0de6c",
"assets/assets/car_wash.svg": "fa5c011c82989e0476a29f2699cf949b",
"assets/assets/product1.jpg": "6a191816123552ac51753c9e2c327753",
"assets/assets/no_order.png": "0b05d8ed0063bf9db0e828786331dfe9",
"assets/assets/logo_color.png": "0cbe6ef33452ba65bd991fbec9f1b307",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
