// JavaScript Document

var productImage = document.querySelector('.productfoto')


//buttons

var groenVoorkant = document.querySelector('#groenvoorkant')
var groenAchterkant = document.querySelector('#groenachterkant')
var groenMerk = document.querySelector('#groenmerk')

var rozeVoorkant = document.querySelector('#rozevoorkant')
var rozeAchterkant = document.querySelector('#rozeachterkant')

var zwartVoorkant = document.querySelector('#zwartvoorkant')
var zwartAchterkant = document.querySelector('#zwartachterkant')
var zwartMerk = document.querySelector('#zwartmerk')


//eventlisteners

groenVoorkant.addEventListener('click', switchGV)
groenAchterkant.addEventListener('click', switchGA)
groenMerk.addEventListener('click', switchGM)

rozeVoorkant.addEventListener('click', switchRV)
rozeAchterkant.addEventListener('click', switchRA)

zwartVoorkant.addEventListener('click', switchZV)
zwartAchterkant.addEventListener('click', switchZA)
zwartMerk.addEventListener('click', switchZM)


//functions


//Groen
function switchGV() {
    productImage.src = 'images/productgroot1.jpg';
}

function switchGA() {
    productImage.src = 'images/groot2.jpg';
}

function switchGM() {
    productImage.src = 'images/groot3.jpg';
}


//Roze
function switchRV() {
    productImage.src = 'images/groot4.jpg';
}

function switchRA() {
    productImage.src = 'images/groot5.jpg';
}



//Zwart
function switchZV() {
    productImage.src = 'images/groot6.jpg';
}

function switchZA() {
    productImage.src = 'images/groot7.jpg';
}

function switchZM() {
    productImage.src = 'images/groot8.jpg';
}
