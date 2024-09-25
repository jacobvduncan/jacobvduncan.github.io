function init() {
    handleHashChange()
}

function toggleMenu() {
    var main = document.querySelector('.middle-body-main');
    if(main != null){
    main.classList.toggle('overflow');
    }
    var main = document.querySelector('.middle-body');
    if(main != null){
    main.classList.toggle('overflow');
    }
    var main = document.querySelector('.middle-body-not-hidden');
    if(main != null){
    main.classList.toggle('overflow');
    }
    var leftPanel = document.querySelector('.left-panel');
    leftPanel.classList.toggle('hide');
    var topMobile = document.querySelector('.header-mobile');
    if(topMobile !== null)
    {
        topMobile.classList.toggle('hide');
    }
    var masterPanel = document.querySelector('.master-panel');
    if(topMobile !== null)
    {
        masterPanel.classList.toggle('hide');
    }
}

function closeMenu() {
    var main = document.querySelector('.middle-body-main');
    if(main != null){
    main.classList.remove('overflow');
    }
    var main = document.querySelector('.middle-body');
    if(main != null){
    main.classList.remove('overflow');
    }
    var main = document.querySelector('.middle-body-not-hidden');
    if(main != null){
    main.classList.remove('overflow');
    }
    var leftPanel = document.querySelector('.left-panel');
    leftPanel.classList.remove('hide');
    var topMobile = document.querySelector('.header-mobile');
    if(topMobile !== null)
    {
        topMobile.classList.remove('hide');
    }
    var masterPanel = document.querySelector('.master-panel');
    if(topMobile !== null)
    {
        masterPanel.classList.remove('hide');
    }
}

function openMenu() {

}
function toggleBodyOverflow(toggle) {
    if (toggle) {
        document.body.classList.add('no-overflow'); 
    } else {
        document.body.classList.remove('no-overflow'); 
    }
}





function loadHTMLFileAndReplace(filePath, targetElementId, underlineId, hash) {
    const targetElement = document.getElementById(targetElementId);

    if(hash === "" || !hash)
    {
        closeMenu()
        toggleBodyOverflow(true)
    }

    if(hash)
    {
        updateURLWithHash(hash)
    }
    else {
        window.history.replaceState(null, null, window.location.origin);
    }
    window.scrollTo(0, 0);



    elementIds = ["nav-href-one","nav-href-two","nav-href-three","nav-href-four","nav-href-five"]

    for (let index = 0; index < elementIds.length; index++) {
        const element = elementIds[index];
        if(element !== underlineId)
        {
            setElementClassById(element,"nav-href")
        }
    }
    setElementClassById(underlineId,"always-underlined")


    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load file: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            targetElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error loading file: " + error.message);
        });
}

function openNewTab(url) {
    window.open(url, '_blank');
}
function setElementClassById(elementId, className) {
    if(!elementId)
    {
        return;
    }
    const element = document.getElementById(elementId);
    if (element) {
        element.className = className;
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}

function updateURLWithHash(name) {
    closeMenu()
    window.location.hash = name;
    document.getElementById('master-panel').scrollTo(0, 0)
}


function handleHashChange() {
    const currentHash = window.location.hash;
    if(currentHash === "")
    {
        loadHTMLFileAndReplace('/pages/hero.html', 'master-panel')
        toggleBodyOverflow(true)
        return
    }
    toggleBodyOverflow(false)
    
    window.scrollTo(0, 0);
    if(currentHash  === "#about")
    {
        loadHTMLFileAndReplace('/pages/about.html', 'master-panel','nav-href-one', 'about')
    }
    if(currentHash  === "#games")
    {
        loadHTMLFileAndReplace('/pages/games.html', 'master-panel','nav-href-two', 'games')
    }
    if(currentHash  === "#projects")
    {
        loadHTMLFileAndReplace('/pages/projects.html', 'master-panel','nav-href-three', 'projects')
    }
    if(currentHash  === "#skills")
    {
        loadHTMLFileAndReplace('/pages/skills.html', 'master-panel','nav-href-four', 'skills')
    }
    if(currentHash  === "#build")
    {
        loadHTMLFileAndReplace('/pages/build.html', 'master-panel','nav-href-five', 'build')
    }



    if(currentHash  === "#projects/charlie")
    {
        loadHTMLFileAndReplace('/pages/projects/charlie.html', 'master-panel','nav-href-three', 'projects/charlie')
    }
    if(currentHash  === "#projects/darkhaunting")
    {
        loadHTMLFileAndReplace('/pages/projects/darkhaunting.html', 'master-panel','nav-href-three', 'projects/darkhaunting')
    }
    if(currentHash  === "#projects/floatingcoffin")
    {
        loadHTMLFileAndReplace('/pages/projects/floatingcoffin.html', 'master-panel','nav-href-three', 'projects/floatingcoffin')
    }
    if(currentHash  === "#projects/mothman")
    {
        loadHTMLFileAndReplace('/pages/projects/mothman.html', 'master-panel','nav-href-three', 'projects/mothman')
    }
    if(currentHash  === "#projects/photoapp")
    {
        loadHTMLFileAndReplace('/pages/projects/photoapp.html', 'master-panel','nav-href-three', 'projects/photoapp')
    }
    if(currentHash  === "#projects/planeattack")
    {
        loadHTMLFileAndReplace('/pages/projects/planeattack.html', 'master-panel','nav-href-three', 'projects/planeattack')
    }
    if(currentHash  === "#projects/successportal")
    {
        loadHTMLFileAndReplace('/pages/projects/psp.html', 'master-panel','nav-href-three', 'projects/successportal')
    }
    if(currentHash  === "#projects/unityproject")
    {
        loadHTMLFileAndReplace('/pages/projects/unityproject.html', 'master-panel','nav-href-three', 'projects/unityproject')
    }
    if(currentHash  === "#projects/unrealproject")
    {
        loadHTMLFileAndReplace('/pages/projects/unrealproject.html', 'master-panel','nav-href-three', 'projects/unrealproject')
    }
}