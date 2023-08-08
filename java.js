var batDen = document.querySelector("#batden");
var tatDen = document.querySelector("#tatden");
var bongDen = document.querySelector("#bongden");



batDen.addEventListener("click", batden)
tatDen.addEventListener("click", tatden)

function batden(){
    bongDen.src ="http://127.0.0.1:5500/Hinh/pic_bulbon.gif"
}

function tatden(){
    bongDen.src ="http://127.0.0.1:5500/Hinh/pic_bulboff.gif"
}
/**
 * Bai 1 --------------------------------------------------------
 */

