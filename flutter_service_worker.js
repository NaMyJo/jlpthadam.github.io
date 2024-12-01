'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1c8f3f1f1d6867203f302a862c031b3a",
".git/config": "f67c7e8ac516ee73c8381dc1844cba9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "63cf4432624edacb7411dc38abf0a907",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88686337729b76fc9943498bce17ad96",
".git/logs/refs/heads/main": "88686337729b76fc9943498bce17ad96",
".git/logs/refs/remotes/origin/main": "d42792f3106e0800f4048ffe3cc98960",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/1c/d4f4ed525522d7f513a4e3e6a0836c3d060d9f": "2ba161c631ae71f21fb7dc2b28ee2245",
".git/objects/23/04d2953d3e9f211921c4f748f3eac699431242": "3947cb0b7fb4f69a121d3dfe76df5771",
".git/objects/27/0eb8af2cbd9177f17993f838540b41e400a877": "2142a35d86de4ef58e169b049eb123f3",
".git/objects/32/a10e8c5c8e09f76588df3edcf017ca47a987cb": "a65ccfda54dfcb2a96d790838df6f801",
".git/objects/39/185cebdac6b6438c144b8d89e5a2c082c9c490": "255248ad977591e380ff1250ca3d6e13",
".git/objects/3b/d54578ca896e29c67c86cbf0fccec12cd7793d": "6b3bab204f7569084d205780901730d7",
".git/objects/41/cc7fbcd367ab04bf0365f863abf8fd0cb72101": "7a1e9577de9eb58592e62c786f902cbf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/3818ccf2590c807fa374872e53772e1c15d0b3": "181afdbe7bb7916e34d9dae0c9cdef47",
".git/objects/55/3fcf67529ffe5e8bb896178b1e46235c518309": "c2a4f2d1a12b3d77e64beaa1d39aea9b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/67/91cfbc2d1377c203b2e3a05e21ed192212101d": "1c3754172d64d86e074c0f576405e0cb",
".git/objects/68/c58aff25b309092a1ebc6fe87379f569e36feb": "722ce51eca47c01731d6c9dafd362d5d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/75/fdabdddaeef79c967c576cdfc833c305448f2a": "8c090d7ab5e11487317697ec7ec16e8f",
".git/objects/7a/ae277fe975f9212fbf2ef637e72b9f224ee87d": "d61a1a46cf66ae0b374eca57e3e2a7ea",
".git/objects/88/04354ea2952bc1841277f5973b21d20e3cfcaa": "358851d960c9f8ce960af03a21c49236",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/a1/10ca8b558ae3a008fe4e358307b62647430963": "989a3cedbd66b4ba16891f471a2fe348",
".git/objects/a2/f4d28c64a32fe2316eac772f755ffbc1bbb7c4": "ca6a09498ad50246dbaee90102744c3d",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/a183b245a52bd06dac80fe48c89711a01dd7e5": "8642ef04c1ebc30d287cdef5d21293bf",
".git/objects/b6/90156c3d0a542f4b66349391fec07db61c37a1": "c80deea420c04657b4c3f7e2575d33f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/b69eae7adf78a854e7d24ab2cecdd0b1cedc00": "eb630617a5b2006fe2296ef4b1721d88",
".git/objects/d3/1eb92da045c75e2246deb3b02d127eb2bf15a7": "0760daf6970b5332b2e17e5148bae1c8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0fa575da3e11c6e186eb121fa4d1da0fc502e7": "b0d982af132da0f3efd722c27072b313",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/492d52dd4366ca3b8fec8871c838b71d1a4f24": "e0fb7e9ee11eb1dcfec1e6f61319aff9",
".git/objects/dc/d79ee644524f91ccd8d3efb8cfb719d97762b4": "6d2e610a0c63315ee000fab8e12c8484",
".git/objects/df/a09ff02c059658347532fa3fbfeec0b8ff9563": "294518de91f888b9599d7d6520ab1d6e",
".git/objects/e0/9182fc9489c42f60521b1a665b15976ba8d4ce": "f6270f1e84a765a28faa3b0c4dead9d3",
".git/objects/e1/d7dba4edaecb0de0cb0d5404d760daaa7b4c74": "495ebbc02aba0c070e145ce764418717",
".git/objects/e1/f39ee8ceddcdb38f8fda29d58c63ece5e965c4": "d5adbd74c503c2f3e736749b62e3b856",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ea8c26d14eaaf605ae4554dd5223e4b7ff6b7c": "3cddcb649cf6174044bbc05bebe52828",
".git/objects/ed/4f4232f8a986c90e462e1e9c0d80acd87c7509": "93e7309af963f4ae0007be11b22547c1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/60fbea791092671d8529f24e4c238cbbdc5530": "9c2f52fbfaa0665b88604b07681ba285",
".git/objects/ff/f1e4690f3b396046f27f4b6c36986275d20a98": "adf50c1359cb83b2efcc0a929ba696e9",
".git/refs/heads/main": "c8c1d1fdb104d906e5221a295039a23b",
".git/refs/remotes/origin/main": "c8c1d1fdb104d906e5221a295039a23b",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "849558b6a1ddf4e3fe40e375436a82f2",
"assets/NOTICES": "61922c877edffb67e124b0a7ee0a46dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "de27f912e40a372c22a069c1c7244d9b",
"canvaskit/canvaskit.js.symbols": "b9b989e4f3e26aaad6af55d5774531cd",
"canvaskit/canvaskit.wasm": "48eed93fcdb7fee943b7762df9cc4968",
"canvaskit/chromium/canvaskit.js": "73343b0c5d471d1114d7f02e06c1fdb2",
"canvaskit/chromium/canvaskit.js.symbols": "3b0b115a04a381110a8da24b1d57af73",
"canvaskit/chromium/canvaskit.wasm": "b2796d8a9a88b6ababa963457169b7c2",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "3c62f7cf5b41959dcb752d0009cb3702",
"canvaskit/skwasm.wasm": "af14e9eb8c72bbde711518702996df83",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "4b20d8334146ec1c050282f7bd2771b8",
"canvaskit/skwasm_st.wasm": "e80ff02498184d10ab6fea4106a340dc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2e00ce36e95d8aae72ac7bc18234b4d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5313100881b844f762274667c6988178",
"/": "5313100881b844f762274667c6988178",
"main.dart.js": "4b9e8dae88662ff8b003cf552c127d01",
"manifest.json": "c52e80f0b3536fe069869c86f404ad26",
"version.json": "a871f2ae2d35c24192fda20ccf615bd2"};
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
