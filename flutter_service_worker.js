'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0500e1ca28a210632d8bf3a862fcee0a",
"index.html": "6bf6e1b3e751603042dbdaec0176ad4b",
"/": "6bf6e1b3e751603042dbdaec0176ad4b",
"main.dart.js": "d2007b4a22431e8f38d5072637a9f817",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "10524efe054a7bf3ab6c29ad51efbc7b",
"assets/AssetManifest.json": "fe3510723d152c659981a5c86a5da13c",
"assets/NOTICES": "3264f2662b3655f4a11824f30ae63e17",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/jsons/task_failed.json": "3c1d8c607e04e0a61ea0c59634772566",
"assets/assets/images/default_product_klik.png": "8c3274ff36af03831ddb5b3f9940e242",
"assets/assets/images/bisnis_omi.png": "8b9dbd0ce5d2c8636a0872dab064bb43",
"assets/assets/images/bisnis_tmi.png": "7a517092dcb285490ca95ce9dd75119d",
"assets/assets/images/bisnis_spi.png": "0d82853b997858c3bd955ae0480ff1ce",
"assets/assets/images/splash.png": "896435e6768a183c3cdb72da9e05c17d",
"assets/assets/images/logo_poin.png": "47bc9a84e5d5b05449f22b696c5c7148",
"assets/assets/images/default_banner_klik.png": "fee91076444b2467fbbd076e17c28d17",
"assets/assets/images/isaku.jpg": "501ff9baa4cb1b447327a93ba859f6b5",
"assets/assets/images/bg_login.png": "b0680a2b9237371a6d96247b89a2a6cf",
"assets/assets/images/logo_mitra.png": "af8a8c533f88b486e42981b844b52ae0",
"assets/assets/images/logo_isaku.png": "22229a97ac09508cbc0a624273b01cbf",
"assets/assets/images/default_banner_igr.png": "4fdbc9834e09a5b80f45ad6d82cb6efb",
"assets/assets/images/scanner.svg": "c6ba5243d032b1351736d1909a0a0f9c",
"assets/assets/images/bg_squircle.png": "ca32146fcb762f6831ee04828cccf6a1",
"assets/assets/illustrations/empty_search.svg": "c11a41ccd18d86875ce36959313ddfd8",
"assets/assets/illustrations/empty_cart.svg": "e6d8def70d4ec4850a3f6e80d2797086",
"assets/assets/illustrations/maintenance_1.svg": "0637c52d2859e9847357fb4bbec30128",
"assets/assets/illustrations/loading.svg": "93cb49b1aa0ea36deb0308469ea53109",
"assets/assets/illustrations/empty_order.svg": "6722443a9d0fcbb66cf765165c779c2d",
"assets/assets/illustrations/no_internet.svg": "af1108679d585f656768a29da56fd3d7",
"assets/assets/illustrations/maintenance_2.svg": "37f5a97f282d2325911b9e386d5e49a1",
"assets/assets/illustrations/order_confirmed.svg": "128aaf4af351d52f3c7d31d8c97e711d",
"assets/assets/illustrations/empty_inbox.svg": "26e9364956b76cabe02e8ca8ae904966",
"assets/assets/icons/member/ikupon.svg": "19dc623009f46a447bd491d4ca831719",
"assets/assets/icons/member/history_trx.svg": "227aff57b55795ab683820dc7cb2f2e9",
"assets/assets/icons/member/loyalti.svg": "7c18b2a695c4b5150df0acdd63dcad47",
"assets/assets/icons/member/stamp.svg": "6b5e82dfd444f4312e2bcf2f99b0455a",
"assets/assets/icons/profile/pin.svg": "8bf4d1b05b8e6c3c3cd00de2e30c62cc",
"assets/assets/icons/profile/biometric.svg": "87404f164dc7ea1b7027502c33ae80c2",
"assets/assets/icons/profile/npwp.svg": "afa509428226ef42a5b0218d19936e3c",
"assets/assets/icons/profile/bank.svg": "3a4566004a80a142a1be70e7a28061f5",
"assets/assets/icons/profile/addr.svg": "7ed9c186ecd8901489f9a892f1a3b466",
"assets/assets/dummies/bannerMitra.json": "9ddc4a4aa243a757997a01a8c5b0bab7",
"assets/assets/dummies/sectionKlik.json": "e817be81e9cf4c086566fe7c2d7c2c06",
"assets/assets/dummies/wishlist.json": "fad4d18b9d5b3207643bdb929d51dbab",
"assets/assets/dummies/orderKlik.json": "70622aff0ca140b9b8e0562b41200a01",
"assets/assets/dummies/inboxCount.json": "7d2b4eb08250c9e397c6128830a9bfaf",
"assets/assets/dummies/cartCount.json": "05aade99b107408f33384ea77ad41726",
"assets/assets/dummies/bannerIGR.json": "4d0a44d9c67aa3384a98e899caeba87f",
"assets/assets/dummies/saldo.json": "cb8d32f30b3c5ea9149f495c2e5766c2",
"assets/assets/dummies/homeBanner.json": "2ca06de5b1435bccd086c7ccbefcb62d",
"assets/assets/dummies/announce.json": "3a117a78db996e63ac776a402e5cbab7",
"assets/assets/dummies/orderMitra.json": "7ffd20fc76eebfaa66b1e333fdc6f579",
"assets/assets/dummies/recomendation.json": "dcbadd11bb076cb18ad99199a7ff545f",
"assets/assets/dummies/lastOrderKlik.json": "2a043dba2b0622ad40d866622a6bffe0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
