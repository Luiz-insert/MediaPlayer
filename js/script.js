//function ativa

alteraDadosLista1()
alteraDadosLista2()
alteraDadosLista3()
alteraDadosLista4()


//Altera musica ao clicar na lista 

alteraMusica1.onclick = function (){
    img1();
    alteraDados1();
    cor1();
    musicAudio1.play();
};
alteraMusica2.onclick = function (){
    img2();
    alteraDados2();
    cor2();  
    musicAudio2.play();
}
alteraMusica3.onclick = function (){
    img3();
    alteraDados3();
    cor3();
    musicAudio3.play();
}
alteraMusica4.onclick = function (){
    img4();
    alteraDados4();
    cor4();
    musicAudio4.play();
}

//Atribui um audio a uma "const"

const musicAudio1 = new Audio(URL = '../music/PhonkyTrap.mp3');
const musicAudio2 = new Audio(URL = '../music/BUSTER.mp3');
const musicAudio3 = new Audio(URL = '../music/FXRY.mp3');
const musicAudio4 = new Audio(URL = '../music/SPIRIT.mp3');

//Atribui uma condição ao botão de controle

const btnPlayPause = document.getElementById('btnPlayPause');
const imgButton = document.getElementById('imgItem4-2');

btnPlayPause.onclick = function () {
    imgButton.style.backgroundImage = 'url(../svg/Pause.svg)'
}



