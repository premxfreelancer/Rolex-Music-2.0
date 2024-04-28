
let music1Playing = false;
let music2Playing = false;
let music3Playing = false;
let music4Playing = false;
let music5Playing = false;
let music6Playing = false;
let music7Playing = false;
let music8Playing = false;
let music9Playing = false;
let music10Playing = false;






var music1 = document.getElementById("music1")
var music2 = document.getElementById("music2")
var music3 = document.getElementById("music3")
var music4 = document.getElementById("music4")
var music5 = document.getElementById("music5")
var music6 = document.getElementById("music6")
var music7 = document.getElementById("music7")
var music8 = document.getElementById("music8")
var music9 = document.getElementById("music9")
var music10 = document.getElementById("music10")







const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");




function playmusic1() {
    console.log("function is working");
    if (!music1Playing) {
        music1.play();
        music1Playing = true;
      button1.src = 'elements/pause.png';

    } else {
        music1.pause();
        button1.src = 'elements/play.png';
        music1.currentTime = 0;
        music1Playing = false;
    }
}
function playmusic2() {
    
    if (!music2Playing) {
        music2.play();
        music2Playing = true;
      button2.src = 'elements/pause.png';

    } else {
        music2.pause();
        button2.src = 'elements/play.png';
        music2.currentTime = 0;
        music2Playing = false;
    }
}

function playmusic3() {
    
    if (!music3Playing) {
        music3.play();
        music3Playing = true;
      button3.src = 'elements/pause.png';

    } else {
        music3.pause();
        button3.src = 'elements/play.png';
        music3.currentTime = 0;
        music3Playing = false;
    }
}
function playmusic4() {
    
    if (!music4Playing) {
        music4.play();
        music4Playing = true;
      button4.src = 'elements/pause.png';

    } else {
        music4.pause();
        button4.src = 'elements/play.png';
        music4.currentTime = 0;
        music4Playing = false;
    }
}
function playmusic5() {
    if (!music5Playing) {
        music5.play();
        music5Playing = true;
        button5.src = 'elements/pause.png';
    } else {
        music5.pause();
        button5.src = 'elements/play.png';
        music5.currentTime = 0;
        music5Playing = false;
    }
}

function playmusic6() {
    if (!music6Playing) {
        music6.play();
        music6Playing = true;
        button6.src = 'elements/pause.png';
    } else {
        music6.pause();
        button6.src = 'elements/play.png';
        music6.currentTime = 0;
        music6Playing = false;
    }
}



function playmusic7() {
    if (!music7Playing) {
        music7.play();
        music7Playing = true;
        button7.src = 'elements/pause.png';
    } else {
        music7.pause();
        button7.src = 'elements/play.png';
        music7.currentTime = 0;
        music7Playing = false;
    }
}

function playmusic8() {
    if (!music8Playing) {
        music8.play();
        music8Playing = true;
        button8.src = 'elements/pause.png';
    } else {
        music8.pause();
        button8.src = 'elements/play.png';
        music8.currentTime = 0;
        music8Playing = false;
    }
}

function playmusic9() {
    if (!music9Playing) {
        music9.play();
        music9Playing = true;
        button9.src = 'elements/pause.png';
    } else {
        music9.pause();
        button9.src = 'elements/play.png';
        music9.currentTime = 0;
        music9Playing = false;
    }
}

function playmusic10() {
    if (!music10Playing) {
        music10.play();
        music10Playing = true;
        button10.src = 'elements/pause.png';
    } else {
        music10.pause();
        button10.src = 'elements/play.png';
        music10.currentTime = 0;
        music10Playing = false;
    }
}









