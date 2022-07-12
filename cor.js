function cores () {
    getComputedStyle(document.documentElement).getPropertyValue('--cor1');
    document.documentElement.style.setProperty('--cor1','#8b0000');
    getComputedStyle(document.documentElement).getPropertyValue('--cor2');
    document.documentElement.style.setProperty('--cor2','#2c2c2c');
    getComputedStyle(document.documentElement).getPropertyValue('--cor3');
    document.documentElement.style.setProperty('--cor3','#d0ff00');
    getComputedStyle(document.documentElement).getPropertyValue('--cor4');
    document.documentElement.style.setProperty('--cor4','#360108');
    getComputedStyle(document.documentElement).getPropertyValue('color');
    document.documentElement.style.setProperty('color','#fff')
}

function img1 () {
    document.getElementById('imgConteudo').style.backgroundImage = 'url(./svg/img1.jfif)';
}

function img2 () {
    document.getElementById('imgConteudo').style.backgroundImage = 'url(./svg/img2.jfif)';
}


