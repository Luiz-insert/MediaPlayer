//function ativa

alteraDadosLista1()
alteraDadosLista2()
alteraDadosLista3()
alteraDadosLista4()
alteraDadosLista5()
alteraDadosLista6()


//Altera musica ao clicar na lista 

alteraMusica1.onclick = function () {
    musicAudio1.play();
    musicAudio2.pause();
    musicAudio3.pause();
    musicAudio4.pause();
    musicAudio5.pause();
    musicAudio6.pause();
    img1();
    alteraDados1();
    cor1();
    musicAudio2.currentTime = 0
    musicAudio3.currentTime = 0
    musicAudio4.currentTime = 0
    musicAudio5.currentTime = 0
    musicAudio6.currentTime = 0
};
alteraMusica2.onclick = function () {
    musicAudio2.play();
    musicAudio1.pause();
    musicAudio3.pause();
    musicAudio4.pause();
    musicAudio5.pause();
    musicAudio6.pause();
    img2();
    alteraDados2();
    cor2();
    musicAudio1.currentTime = 0
    musicAudio3.currentTime = 0
    musicAudio4.currentTime = 0
    musicAudio5.currentTime = 0
    musicAudio6.currentTime = 0
}
alteraMusica3.onclick = function () {
    musicAudio3.play();
    musicAudio1.pause();
    musicAudio2.pause();
    musicAudio4.pause();
    musicAudio5.pause();
    musicAudio6.pause();
    img3();
    alteraDados3();
    cor3();
    musicAudio1.currentTime = 0
    musicAudio2.currentTime = 0
    musicAudio4.currentTime = 0
    musicAudio5.currentTime = 0
    musicAudio6.currentTime = 0
}
alteraMusica4.onclick = function () {
    musicAudio4.play();
    musicAudio1.pause();
    musicAudio2.pause();
    musicAudio3.pause();
    musicAudio5.pause();
    musicAudio6.pause();
    img4();
    alteraDados4();
    cor4();
    musicAudio1.currentTime = 0
    musicAudio2.currentTime = 0
    musicAudio3.currentTime = 0
    musicAudio5.currentTime = 0
    musicAudio6.currentTime = 0
}
alteraMusica5.onclick = function () {
    musicAudio5.play();
    musicAudio1.pause();
    musicAudio2.pause();
    musicAudio3.pause();
    musicAudio4.pause();
    musicAudio6.pause();
    img5();
    alteraDados5();
    cor5();
    musicAudio1.currentTime = 0
    musicAudio2.currentTime = 0
    musicAudio3.currentTime = 0
    musicAudio4.currentTime = 0
    musicAudio6.currentTime = 0
}
alteraMusica6.onclick = function () {
    musicAudio6.play();
    musicAudio1.pause();
    musicAudio2.pause();
    musicAudio3.pause();
    musicAudio4.pause();
    musicAudio5.pause();
    img6();
    alteraDados6();
    cor6();
    musicAudio1.currentTime = 0
    musicAudio2.currentTime = 0
    musicAudio3.currentTime = 0
    musicAudio4.currentTime = 0
    musicAudio5.currentTime = 0
}

//Atribui um audio a uma "const"

const musicAudio1 = new Audio(URL = './music/PhonkyTrap.mp3');
const musicAudio2 = new Audio(URL = './music/BUSTER.mp3');
const musicAudio3 = new Audio(URL = './music/FXRY.mp3');
const musicAudio4 = new Audio(URL = './music/SPIRIT.mp3');
const musicAudio5 = new Audio(URL = './music/DRIVE.mp3');
const musicAudio6 = new Audio(URL = './music/REVENGE.mp3');

//Atribui uma condição ao botão de controle

const btnPlayPause = document.getElementById('btnPlayPause');
const imgButton = document.getElementById('imgItem4-2');

btnPlayPause.onclick = function () {
    imgButton.style.backgroundImage = 'url(./svg/Pause.svg)'
}



