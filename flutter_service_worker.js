'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dbf1cf843e6dc911e2d749bbcbabd0fc",
".git/config": "82173c062ef5c620813e23fff3618b39",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "10a0533f3aea278e0977388e1134ca42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "094354171a2930c44f9d79debfcb966f",
".git/logs/refs/heads/master": "094354171a2930c44f9d79debfcb966f",
".git/logs/refs/remotes/origin/master": "4bdd0af84054303e4006d9c87088ed85",
".git/objects/01/0e849f618e562f8857ee028e0e0a385006d871": "6f2fe498d0830f70263667bda0bb7651",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/23/111c1c6e88bf716363b058a76d1540bbb40933": "442558b279b829c6f3b37a162a05df89",
".git/objects/2d/c359f6af8b5e8a72acc1ac0adbc3a38af6415f": "202b05e552b3222597052f7a886d7bc6",
".git/objects/30/7637787aef927babcec13491afde46b98edfe2": "715777bafef8d3eb0d4b66366cdeac35",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/4be530c55a8fc3eaf78bdccc247cd3d16b3af0": "8212edef2978faf0bbc1b0d053395e2b",
".git/objects/38/c0396522ca3d3068fc7e530eea8ad6b56a559d": "072c5e5d8d95d1a112dfd87470430432",
".git/objects/3c/bdaed98feae89a4a6b5f5e1d8b54e4c7b1de09": "4445d7f4bfb166cec143e9eb28d8d3d7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/f380ad5effe22099e6daa8196e2ce0b885e52c": "e1a8af5cce62bd35c49e54f87ac8e88d",
".git/objects/6f/73a6ffb9ee1c89f161577d449548bc70509796": "0f60b0cd14e8d088004eacc22c1b69fd",
".git/objects/7b/97be93589a1fda0d6263fd72d95b6767f2adb6": "1fd1497b7b731ea94ddc04a78b8b81c6",
".git/objects/7d/9a6c4c32d7e920b549caf531e390733496b6e0": "08fc72bf13310819ae18642e598966de",
".git/objects/83/40255797d31fbbc490463e3893356c8fd884c4": "89c94598aebd0bbf005fa2e7560bc2fb",
".git/objects/86/85051dff487fd88be0ebd9495617cdf6acaa35": "6a481b4d7c707473575b86971205fded",
".git/objects/88/6ec4fab5d8071aba4249bfcf88226e98f6f256": "2d28c0de5a446b79ed8955ee4f914352",
".git/objects/89/184d9451f43525d6cda0fbb82408e311e38003": "1e3a6e3e23a7ed0e370106b2a7cc1eb9",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/2de86b04e1fbafa69cc1d7aa73934329ac52d5": "bee314b7394a281fd13c51c78ca90fc8",
".git/objects/8e/a78f416936e39c233223981ba410fc996ee17a": "b5928dbf3e0f896f2db50bb08ae87a0e",
".git/objects/8f/5d2088f283d16c1331577b6fe668e8414f0918": "3217a363216e58159305b185bb5239f9",
".git/objects/8f/9b9f965ee05aabfdbab89c3ca4a50ec061ecab": "6f68c88f353ec2176a3cf1f0c41799fc",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/ec21227866ca9d1cf77ec13660b7b85ec900dd": "83e6918ef713044f20d9c9c202425e9f",
".git/objects/99/9ccc6613a5256d7884d048e9a9ebe4871ef319": "4feb94af3ef41e2582aff5ca980d1429",
".git/objects/9c/84e0be2e448b966c09eb462d737c53e105587b": "0a6380ccae768abbf9a2bd3809a26f5e",
".git/objects/9c/cdc3b95ca2032cf47592582b36ed9a8d4557e7": "487a31409bc6715c8f6fdb25b300a370",
".git/objects/a5/5c5e2212d1d89b82ff65a874de40278e2eeab8": "e48c92dd47443391e3a053357a7b1b0b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/ba97ab6ca37e430204bd26185a3a38deb00c2b": "22ca3bd9031667accc562c470fbc89b7",
".git/objects/af/b5c7cba930d5ca0001fa36cfacf728be4c877c": "d79cd52c5dd72304551352066e877795",
".git/objects/c6/00993bd0cfd5e29c42e41987268af4e3828f15": "65c75907bca9a6f40dea083bdcebad0a",
".git/objects/c7/1124900e193a62d087c3292d24ce08b8cc0c13": "005fa004166ae09f5eba4040a51fe192",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/b40294d723c99b552b924ef041292f53680637": "4797ab5b3467fd4b43e3d47cc7cc3444",
".git/objects/e4/615193924a7efc78ea2f9143538d21ae6a7f0c": "09b2ed23efb960efacb9a7beab4a72bd",
".git/objects/e6/96b08ce8cea8be058184f42486611212ccb615": "82a4681d8bbd78abdcb9425ba8c9c5fe",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/3c3325a25b5137cc0cd5071c2b8d25d6711289": "0fa9127be5b531b198d47ef8f5b38c22",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/3c13026f9d91e92b5908a612a33315242b1288": "6b1eaad8a9b8057433ba4baee1f0e00e",
".git/refs/heads/master": "e58fc8c68fff1e96a8f71be5479fc9b9",
".git/refs/remotes/origin/master": "e58fc8c68fff1e96a8f71be5479fc9b9",
"assets/AssetManifest.bin": "3dcb6b727f45f77c4f5b6079894ed693",
"assets/AssetManifest.bin.json": "86ad9dacb7cc29ed08ea5914c06301b9",
"assets/AssetManifest.json": "16abd0c49b9dde8e25e78f384ed126c1",
"assets/assets/fonts/Roboto-Bold.ttf": "36b5bab58a18b9c924861a4ccbf1a790",
"assets/assets/fonts/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/assets/images/logo.png": "7d87c1abb367d357af416f6a59cedfe6",
"assets/assets/images/signature.png": "d0250d8e1e7e44175a270976d226e317",
"assets/FontManifest.json": "51f927d64d69f17561ce52a2e5e8dcfe",
"assets/fonts/MaterialIcons-Regular.otf": "08703a0fcb7c93610ee6035475956c84",
"assets/NOTICES": "d73eeb849f4865e4b1fc79488058865e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ca593162baf7a0d806367434f5212d7d",
"icons/Icon-192.png": "317737dc6ad3c3b8189ffe579b715335",
"icons/Icon-512.png": "317737dc6ad3c3b8189ffe579b715335",
"icons/Icon-maskable-192.png": "317737dc6ad3c3b8189ffe579b715335",
"icons/Icon-maskable-512.png": "317737dc6ad3c3b8189ffe579b715335",
"index.html": "bdd497a0bead6b611394b4fb6a01250a",
"/": "bdd497a0bead6b611394b4fb6a01250a",
"main.dart.js": "4e081ab4fba902cd6e8bfaf837a2fecc",
"manifest.json": "012c9d9111fed6ff965b40ac36358871",
"nixoffset.ico": "317737dc6ad3c3b8189ffe579b715335",
"version.json": "64fdf7bceb97122272876a9398eccefe"};
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
