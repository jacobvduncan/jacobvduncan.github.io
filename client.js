function init()
{

}


// client.js
function toggleMenu() {

    
    var main = document.querySelector('.middle-body-main');
    if(main != null){
    main.classList.toggle('overflow');
    }
    var main = document.querySelector('.middle-body');
    if(main != null){
    main.classList.toggle('overflow');
    }
    var main = document.querySelector('.middle-body-fixed');
    if(main != null){
    main.classList.toggle('overflow');
    }
    var main = document.querySelector('.middle-body-not-hidden');
    if(main != null){
    main.classList.toggle('overflow');
    }

    
    var singlepage = document.querySelector('.content-panel-singular');
    if(singlepage != null){
    singlepage.classList.toggle('hidden');
    }




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