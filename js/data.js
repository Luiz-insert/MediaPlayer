//Altera os dados

function alteraDados1 () {
    document.querySelector('#tituloItem2').textContent = 'Phonky Trap - Single - Suave Lee';
    document.querySelector('#infoMusica').textContent = 'Phonky Trap';
    document.querySelector('#infoAlbum').textContent = 'Single';
    document.querySelector('#infoOuvintes').textContent = '796.262 ouvintes mensais';
    document.querySelector('#infAutor').textContent = 'Suave Lee';
    document.querySelector('#infGravadora1').textContent = '© 2021 3193553 Records DK';
    document.querySelector('#infGravadora2').textContent = '℗ 2021 3193553 Records DK';
    document.querySelector('#infData').textContent = '13 de julho de 2021';
}
function alteraDados2 () {
    document.querySelector('#tituloItem2').textContent = 'BUSTER - Single - $atori Zoom';
    document.querySelector('#infoMusica').textContent = 'BUSTER';
    document.querySelector('#infoAlbum').textContent = 'Single';
    document.querySelector('#infoOuvintes').textContent = '1.356.478 ouvintes mensais';
    document.querySelector('#infAutor').textContent = '$atori Zoom';
    document.querySelector('#infGravadora1').textContent = '© 2019 The Paragon Cult, LLC';
    document.querySelector('#infGravadora2').textContent = '℗ 2019 The Paragon Cult, LLC';
    document.querySelector('#infData').textContent = '11 de setembro de 2019';
}
function alteraDados3() {
    document.querySelector('#tituloItem2').textContent = 'FXRY - Single - besch1er';
    document.querySelector('#infoMusica').textContent = 'FXRY';
    document.querySelector('#infoAlbum').textContent = 'Single';
    document.querySelector('#infoOuvintes').textContent = '169.600 ouvintes mensais';
    document.querySelector('#infAutor').textContent = 'besch1er';
    document.querySelector('#infGravadora1').textContent = '© 2022 besch1er / Kurate Music';
    document.querySelector('#infGravadora2').textContent = '℗ 2022 besch1er / Kurate Music';
    document.querySelector('#infData').textContent = '25 de março de 2022';
}
function alteraDados4() {
    document.querySelector('#tituloItem2').textContent = 'SPIRIT - Single - sapphyre';
    document.querySelector('#infoMusica').textContent = 'SPIRIT';
    document.querySelector('#infoAlbum').textContent = 'Single';
    document.querySelector('#infoOuvintes').textContent = '42.052 ouvintes mensais';
    document.querySelector('#infAutor').textContent = 'sapphyre';
    document.querySelector('#infGravadora1').textContent = '© 2021 2042247 Records DK';
    document.querySelector('#infGravadora2').textContent = '℗ 2021 2042247 Records DK';
    document.querySelector('#infData').textContent = '25 de abril de 2021';
}



//Altera os dados da lista

function alteraDadosLista1() {
    document.querySelector('#pId1').textContent = '1';
    document.querySelector('#pTitulo1').textContent = 'Phonky Trap';
    document.querySelector('#pAlbum1').textContent = 'Single';
    document.querySelector('#pDuracao1').textContent = '?';
}
function alteraDadosLista2() {
    document.querySelector('#pId2').textContent = '2';
    document.querySelector('#pTitulo2').textContent = 'Buster';
    document.querySelector('#pAlbum2').textContent = 'Single';
    document.querySelector('#pDuracao2').textContent = '?';
}
function alteraDadosLista3() {
    document.querySelector('#pId3').textContent = '3';
    document.querySelector('#pTitulo3').textContent = 'Fxry';
    document.querySelector('#pAlbum3').textContent = 'Single';
    document.querySelector('#pDuracao3').textContent = '?';
}
function alteraDadosLista4() {
    document.querySelector('#pId4').textContent = '4';
    document.querySelector('#pTitulo4').textContent = 'Spirit';
    document.querySelector('#pAlbum4').textContent = 'Single';
    document.querySelector('#pDuracao4').textContent = '?';
}

//Altera a musica

var alteraMusica1 = document.getElementById('musica1');
var alteraMusica2 = document.getElementById('musica2');
var alteraMusica3 = document.getElementById('musica3');
var alteraMusica4 = document.getElementById('musica4');


//Altera estado do botão

var seguir = document.querySelector('#seguir');

seguir.onclick = function () {
    seguir.textContent = 'Seguindo';
}