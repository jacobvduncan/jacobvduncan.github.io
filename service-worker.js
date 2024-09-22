
const sideurls = [
    '/pages/about.html',
    '/pages/build.html',
    '/pages/games.html',
    '/pages/hero.html',
    '/pages/projects.html',
    '/pages/skills.html',
]

const CACHE_NAME = 'static-cache';
const urlsToCache = [


 








    // games
    '/images/games/charlie-game.jpg',
    '/images/games/dark-haunting.jpg',
    '/images/games/floating-coffin-game.jpg',
    '/images/games/mothman-game.jpg',

    //wallpapers
    '/images/wallpaper-desktop.jpg',
    '/images/wallpaper-phone.jpg',

    // projects
    '/images/projects/home/dark-haunting.jpg',
    '/images/projects/home/floating-coffin.jpg',
    '/images/projects/home/mothman.jpg',
    '/images/projects/home/website.jpg',
    '/images/projects/home/planeattack.jpg',
    '/images/projects/home/psp.jpg',
    '/images/projects/home/unity-project.jpg',
    '/images/projects/home/unreal-project.jpg',
    '/images/projects/home/charlie.jpg',

    // mothman
    '/images/projects/mothman/mothman1.jpg',
    '/images/projects/mothman/mothman2.jpg',
    '/images/projects/mothman/mothman3.jpg',
    '/images/projects/mothman/mothman4.jpg',
    '/images/projects/mothman/mothman5.jpg',
    '/images/projects/mothman/mothman6.jpg',
    '/images/projects/mothman/mothman7.jpg',
    '/images/projects/mothman/mothman8.jpg',
    '/images/projects/mothman/mothman9.jpg',

    // charlie

    '/images/projects/charlie/charlie1.jpg',
    '/images/projects/charlie/charlie2.jpg',
    '/images/projects/charlie/charlie3.jpg',
    '/images/projects/charlie/charlie4.jpg',
    '/images/projects/charlie/charlie5.jpg',
    '/images/projects/charlie/charlie6.jpg',
    '/images/projects/charlie/charlie7.jpg',
    '/images/projects/charlie/charlie8.jpg',
    '/images/projects/charlie/charlie9.jpg',
    '/images/projects/charlie/charlie10.jpg',
    '/images/projects/charlie/charlie11.jpg',
    '/images/projects/charlie/charlie12.jpg',

    // floating

    '/images/projects/floatingcoffin/floatingcoffin1.jpg',
    '/images/projects/floatingcoffin/floatingcoffin2.jpg',
    '/images/projects/floatingcoffin/floatingcoffin3.jpg',
    '/images/projects/floatingcoffin/floatingcoffin4.jpg',
    '/images/projects/floatingcoffin/floatingcoffin5.jpg',
    '/images/projects/floatingcoffin/floatingcoffin6.jpg',
    '/images/projects/floatingcoffin/floatingcoffin7.jpg',

    // dark haunting

    '/images/projects/darkhaunting/darkhaunting1.jpg',
    '/images/projects/darkhaunting/darkhaunting2.jpg',
    '/images/projects/darkhaunting/darkhaunting3.jpg',
    '/images/projects/darkhaunting/darkhaunting4.jpg',
    '/images/projects/darkhaunting/darkhaunting5.jpg',
    '/images/projects/darkhaunting/darkhaunting6.jpg',

    // plane attack

    '/images/projects/planeattack/planeattack1.jpg',
    '/images/projects/planeattack/planeattack2.jpg',
    '/images/projects/planeattack/planeattack3.jpg',
    '/images/projects/planeattack/planeattack4.jpg',
    '/images/projects/planeattack/planeattack5.jpg',

    // unity 

    '/images/projects/unity/unity1.jpg',
    '/images/projects/unity/unity2.jpg',
    '/images/projects/unity/unity3.jpg',
    '/images/projects/unity/unity4.jpg',

    // unreal

    '/images/projects/unreal/unreal1.jpg',
    '/images/projects/unreal/unreal2.jpg',
    '/images/projects/unreal/unreal3.jpg',
    '/images/projects/unreal/unreal4.jpg',
    '/images/projects/unreal/unreal5.jpg',
    '/images/projects/unreal/unreal6.jpg',
    '/images/projects/unreal/unreal7.jpg',


    



];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});