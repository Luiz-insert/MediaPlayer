function cor1() {
    getComputedStyle(document.documentElement).getPropertyValue('--cor1');
    document.documentElement.style.setProperty('--cor1','');
}

function cor2() {
    getComputedStyle(document.documentElement).getPropertyValue('--cor2');
    document.documentElement.style.setProperty('--cor2','');
}

function cor3() {
    getComputedStyle(document.documentElement).getPropertyValue('--cor3');
    document.documentElement.style.setProperty('--cor3','');
}

function cor4 () {
    getComputedStyle(document.documentElement).getPropertyValue('--cor4');
    document.documentElement.style.setProperty('--cor4','');
}

function img1 () {
    document.getElementById('imgConteudo').style.backgroundImage = 'url(./svg/img1.jfif)';
}

function img2 () {
    document.getElementById('imgConteudo').style.backgroundImage = 'url(./svg/img2.jfif)';
}

cor1()
cor2()
cor3()
cor4()
img1()
