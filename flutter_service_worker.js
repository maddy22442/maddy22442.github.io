'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fccceef320fe3813b663ddab3a44d957",
".git/config": "33ceaae2097cb2677e2f7462b6d5d68d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2c01d26292af8a95cf0b95ea528a770f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "8abeb08b6797c35f95ab6399c76ea41d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f53c834cf427de4fe2ad80a5d00f52a",
".git/logs/refs/heads/main": "d9308fb6adb53a39e1c2b2c78be36285",
".git/logs/refs/remotes/origin/main": "54dfeff7a613dd13e9a01e3c68ede8d0",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/04/448bbbc94230ab17d9dd44544f93b5214dc719": "4e613f8078d3d920ac2f8beae4411760",
".git/objects/06/1145b37108f6b7dc5309c1e88ac68f64f8c13b": "c08318a9a8e2cbb064146d2df5eb76a0",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/01a062f01aa5ab8a7cff824d0bb8c057189212": "879fa535779951b46d0b358b9f8829cb",
".git/objects/0b/ffc3139cb89516b450ea27784d8c96cf423fa0": "f69dc77a53bb58a3e1946f610a669c9a",
".git/objects/11/faf9c856584da23501e52f462580793e4966fe": "17b65e784af18a828e0920f6b687d5d0",
".git/objects/12/17f249596919f1e40be4205eba5ae7403e194d": "07188f366e02d9e68c26fd3bb77ee04b",
".git/objects/12/75674b8ec39e122b8d215dfadfce36f7de8b39": "dc930a06b4bc95353702b9f22417b9b0",
".git/objects/13/b359d46d72b2edf5c8dc3c8c841c5710a23fd7": "292802f82eea5e65b51a649a2222a8f5",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1b/34438edf29e5b3e6cf7519374e4b04061fd76d": "9b9ca356a81c6e371f6d2e366bd6acd6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/25/11df86cf76f789af86eb3500fadeb238dd8bcf": "52fb57ecf49821cc60424a66ab4c1ce5",
".git/objects/29/8b163a32965c897b39ec382b83c635adf66fc9": "9b89809f0f0213a7cfe05751eecd9f8a",
".git/objects/29/a204c01565581a3bbbdcef565f08cc276d288b": "a112d17b9a96b64e27400215118f7afa",
".git/objects/2e/ca28399033b5883c3307fa2015f75ada7ce797": "0fa53d357879bf7a4668dc01447187d2",
".git/objects/2e/e2626b2f92c0db7037f7f3b2adfc2583bc7d02": "90725a81e9f4059ac69c0d5de14a91d7",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/36/e70d721d865971b1a159f6c617135b2001f470": "694b129e0ffaf2ca8b0ae9ecdcc4f3ef",
".git/objects/39/c60f7e32825a7b6360d4b1b1fad5668cc2b4e8": "5aaeeadf8970e9b461a6d02bac73f2a7",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/3f/2d500dfd000b0644f8557eef445df28ad51e57": "99b488706d1e0d76a0b7025ba5da5a51",
".git/objects/3f/a736ca9e341959d03e756140ad1c078e8f2467": "0476e5c78781533036e9aa90e0e37f3f",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/c502d1daa169002cf7f8c98eaece5f956d36a3": "de424d3c24c2065860c7f06526a934c7",
".git/objects/4d/fe9f53ebf965a52569b092525f06cf68bfa046": "cda7acbdf8056d847854c5db92c50f2b",
".git/objects/4f/c8ed580546ab1e86c77e88b4778d7422b06698": "409a84bdce8af009d11ba5a591531016",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/49c5eb7d226bf9ba602fd075f9e7850a4bf658": "3924dfabe5ca91ac8da53b05928d4e87",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/58/c1ae28a138df2f4b4fe2f1a88f9a0c1a97af5b": "a0de3b3b080ecf9546004c639ea49aa5",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/2bdd3f94c579f7609eafb27ec76e9c93841a00": "a8bbb52a26ef1632bc9e1b1f4a4ff92e",
".git/objects/61/2ad70d02be31fbf476261604848478e30cc6e0": "e5cef53a1c7a5748d7ca433a9a9b40de",
".git/objects/66/11e2d97fd994916889880dc6ea9fc96f53c37e": "89699cff802243d0cac84d7d3cdc88b9",
".git/objects/67/e6d53c80f0272d2cf835a8d3e73ac4b5d04906": "29e22be1452662d789efabd8d5ba4305",
".git/objects/6f/0c6661725ae1bab45c97595e4df0b6f194eddf": "ce548ca7db1761b708f8190d49faa28e",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/7fc8a8d3e8d025bbdf4b7d65f272ede38af168": "0546bf4dd546147a0cf2343a0031c443",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/76/89a3acf91450f0ebdd49fd7ca8c39717b0ab55": "1e049f4f9ffa91262b4b5b04790458b5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/7a/af7112a8c066401710515ad3543a0a6832186e": "d954263923b340faa3043e468b9bf7b6",
".git/objects/82/8d1851b9d9413c6c2982474615a9c92b75a725": "e6e6d55f868d0d5dde16a59eff769da8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/e314ba80b81944aff77f574013f17853936e88": "b378448a39008d0e087ff40d15dfd5be",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/9c/953d4befa9e100a33b2a1f72ed61b53969ecdd": "00e34e6f1383541c882b03d6d07ecf32",
".git/objects/9f/b3ea6b19c3cd513286b58252b664aa24ded6a8": "7f31d5c784363e2d4b2f937cd8d69596",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/4fbf5ab71dc5edfc69b3fe5f2e684d54993e67": "e1698b4c24ed05ae9d5695a2beed4e00",
".git/objects/aa/9aa95a850456441f60ec474021276482efa8b6": "e574fc01ab1d903682ceffd6e78e9eec",
".git/objects/ad/19b4a74602f0446cc3f2b81243a39f016ec18a": "a7c90f2a2e330e6c70bfa74dfbbc3436",
".git/objects/ad/80c2b2628cba8a750648d201521ed450760c46": "0b791ae8f3c6cd19967fee15f5734aed",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/86bbdd869983fe431ee9eac0a27715b7f9ec2c": "18db271da7a251688424d73a514cc3d2",
".git/objects/c7/886f3ebc20c61448993f87549ab39914b7d04e": "942e73fb24af955f5d712acaf0effa3c",
".git/objects/c9/1b672cb0162f3496b7cde3aef1612d888479be": "0529afe250526474b7162eb89da2a9d4",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/cf/da14d3eacfe1a40ce1827b185332495d2d0ab1": "11d4f024bc505df964d4836f49f8d80d",
".git/objects/d0/84b5607b7df5baf653f66994f79bbfb63ee00d": "a31992c04ff238db43fa9aa298cf9c6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b87b705994dbc51e361568f537cd1996e3aaa7": "3f0154cc36bebcf90b7d65406dfcef23",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/64ac94ffe6ebff22b0ad3de9b5cbb522719f83": "dd62e7c52032fc70002ac1070aafe779",
".git/objects/db/8b71a77850c08549cdbb8de7c2d4b62183688b": "0967070f60acee2db9910bf732f49bd2",
".git/objects/e4/f4d30eac42076fc0bb33035bcdc627edb7e3b2": "a1a1b6e988b1e7653e863154a0496d1b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/8a6e08fe25bc81abb1e777e93ce135d9f66ee8": "40bdc2ea21681a327b0235aa627afb68",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/931baea7e416f674e845f1f60d45a9f243186b": "36d64df0cdd648236c46a34bf4684d52",
".git/objects/e9/ac36e41964abcf8374706d3efe8e7e569f4e0c": "6ae801ff7c866113bb5a57a585ddfd71",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/51b25e6884d0bed8af2640b6043dbf3a869ea7": "b6f7a44706e6339d304da6e042f60bb5",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f8/ed1c7adb6f3f8af44c37631be203d2c7b06089": "61d7e79b7f7eeb867ee7e110ce1c49ea",
".git/objects/fd/837d2911ca7df3dca1c8839778809d779ed6c3": "3e732024cd67ff08bd5078e96dd4a995",
".git/objects/fe/52ba602a2d86dd8e62085a0dcda44831203a23": "a04aee1a7e2d50c707ae01d05d1f7f25",
".git/ORIG_HEAD": "062fa3606d39b4248f55c78a840929c6",
".git/refs/heads/main": "062fa3606d39b4248f55c78a840929c6",
".git/refs/remotes/origin/main": "062fa3606d39b4248f55c78a840929c6",
"assets/AssetManifest.bin": "1b5c6dba318d924128e43c2888e98c92",
"assets/AssetManifest.bin.json": "60cc977e196d1f97037ed332b16c2d79",
"assets/AssetManifest.json": "73f6ef2cbad3abc06ba55187a744e3bb",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"assets/fonts/MaterialIcons-Regular.otf": "46df8970283fe2dfce6bc81ce9158d0e",
"assets/lib/Assets/fonts/NotoSans-Regular.ttf": "21f6235482ecdf67217dfa18483f7716",
"assets/lib/Assets/images/nunLogo.png": "a3f5c56f9bd2e053285602350ec775c9",
"assets/lib/Assets/images/Teachers%2520Evaluation%2520System.jpg": "dec58b860dbf8ac5835d8fce3ce2e0cc",
"assets/NOTICES": "4a354302a6e20ca4724562daa3af4a5a",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bd736032d28ef96db148157f089445ef",
"/": "bd736032d28ef96db148157f089445ef",
"main.dart.js": "0bc0d2b9b808c14fef4d2c7e1cddc280",
"manifest.json": "135fe0d933639ebcfaa538adab72e60c",
"version.json": "cf4ef965ced412e79a24ff539a894eae"};
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
