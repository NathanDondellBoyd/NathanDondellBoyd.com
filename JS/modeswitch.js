let lightMode = localStorage.getItem('lightmode');
const modeSwitchToggle = document.querySelector('mode-switch');

const enableLightMode = ()=> {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'enabled');
}

const disableLightMode = ()=>{
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'null');

}

if (lightMode === 'enabled'){
    enableLightMode();
}

modeSwitchToggle.addEventListener('click', ()=> {
    lightmode = localStorage.getItem('lightmode');

    if(lightMode !== 'enabled'){
        enableLightMode();
    }
    else{
        disableLightMode();
    }


})

