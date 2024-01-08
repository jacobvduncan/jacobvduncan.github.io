function init()
{

}


// client.js
function toggleMenu() {
    var leftPanel = document.querySelector('.left-panel');
    leftPanel.classList.toggle('hide');

    var topMobile = document.querySelector('.header-mobile');
    if(topMobile !== null)
    {
        topMobile.classList.toggle('hide');
    }

    var leftPanel = document.querySelector('.content-panel');
    if(leftPanel !== null)
    {
    leftPanel.classList.toggle('hide');
    }
    var leftPanel = document.querySelector('.content-panel-games');
    if(leftPanel !== null)
    {
    leftPanel.classList.toggle('hide');
    }

    var leftPanel = document.querySelector('.content-panel-projects');
    if(leftPanel !== null)
    {
    leftPanel.classList.toggle('hide');
    }

    var leftPanel = document.querySelector('.content-panel-projects-no-overflow');
    if(leftPanel !== null)
    {
    leftPanel.classList.toggle('hide');
    }

    var leftPanel = document.querySelector('.content-panel-about');
    if(leftPanel !== null)
    {
    leftPanel.classList.toggle('hide');
    }
}

//https://pbs.twimg.com/media/F-7sDVGXUAMA7Sr?format=jpg&name=4096x4096