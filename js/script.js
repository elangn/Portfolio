const loader = document.querySelector('.loader');

function loaderActive(){
    loader.classList.add('loader-active');
}

function loaderActiveTime() { 
    setInterval(loaderActive, 3000);
}

window.onload = loaderActiveTime();





