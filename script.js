
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
let music11Playing = false;
let music12Playing = false;
let music13Playing = false;
let music14Playing = false;
let music15Playing = false;
let music16Playing = false;
let music17Playing = false;
let music18Playing = false;
let music19Playing = false;
let music20Playing = false;
let music21Playing = false;
let music22Playing = false;
let music23Playing = false;
let music24Playing = false;
let music25Playing = false;
let music26Playing = false;
let music27Playing = false;
let music28Playing = false;
let music29Playing = false;
let music30Playing = false;
let music31Playing = false;
let music32Playing = false;
let music33Playing = false;
let music34Playing = false;
let music35Playing = false;
let music36Playing = false;
let music37Playing = false;
let music38Playing = false;
let music39Playing = false;
let music40Playing = false;
let music41Playing = false;
let music42Playing = false;
let music43Playing = false;
let music44Playing = false;
let music45Playing = false;
let music46Playing = false;
let music47Playing = false;
let music48Playing = false;
let music49Playing = false;
let music50Playing = false;






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
var music11 = document.getElementById("music11")
var music12 = document.getElementById("music12")
var music13 = document.getElementById("music13")
var music14 = document.getElementById("music14")
var music15 = document.getElementById("music15")
var music16 = document.getElementById("music16")
var music17 = document.getElementById("music17")
var music18 = document.getElementById("music18")
var music19 = document.getElementById("music19")
var music20 = document.getElementById("music20")
var music21 = document.getElementById("music21")
var music22 = document.getElementById("music22")
var music23 = document.getElementById("music23")
var music24 = document.getElementById("music24")
var music25 = document.getElementById("music25")
var music26 = document.getElementById("music26")
var music27 = document.getElementById("music27")
var music28 = document.getElementById("music28")
var music29 = document.getElementById("music29")
var music30 = document.getElementById("music30")
var music31 = document.getElementById("music31")
var music32 = document.getElementById("music32")
var music33 = document.getElementById("music33")
var music34 = document.getElementById("music34")
var music35 = document.getElementById("music35")
var music36 = document.getElementById("music36")
var music37 = document.getElementById("music37")
var music38 = document.getElementById("music38")
var music39 = document.getElementById("music39")
var music40 = document.getElementById("music40")
var music41 = document.getElementById("music41")
var music42 = document.getElementById("music42")
var music43 = document.getElementById("music43")
var music44 = document.getElementById("music44")
var music45 = document.getElementById("music45")
var music46 = document.getElementById("music46")
var music47 = document.getElementById("music47")
var music48 = document.getElementById("music48")
var music49 = document.getElementById("music49")
var music50 = document.getElementById("music50")







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
const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");
const button13 = document.getElementById("button13");
const button14 = document.getElementById("button14");
const button15 = document.getElementById("button15");
const button16 = document.getElementById("button16");
const button17 = document.getElementById("button17");
const button18 = document.getElementById("button18");
const button19 = document.getElementById("button19");
const button20 = document.getElementById("button20");
const button21 = document.getElementById("button21");
const button22 = document.getElementById("button22");
const button23 = document.getElementById("button23");
const button24 = document.getElementById("button24");
const button25 = document.getElementById("button25");
const button26 = document.getElementById("button26");
const button27 = document.getElementById("button27");
const button28 = document.getElementById("button28");
const button29 = document.getElementById("button29");
const button30 = document.getElementById("button30");
const button31 = document.getElementById("button31");
const button32 = document.getElementById("button32");
const button33 = document.getElementById("button33");
const button34 = document.getElementById("button34");
const button35 = document.getElementById("button35");
const button36 = document.getElementById("button36");
const button37 = document.getElementById("button37");
const button38 = document.getElementById("button38");
const button39 = document.getElementById("button39");
const button40 = document.getElementById("button40");
const button41 = document.getElementById("button41");
const button42 = document.getElementById("button42");
const button43 = document.getElementById("button43");
const button44 = document.getElementById("button44");
const button45 = document.getElementById("button45");
const button46 = document.getElementById("button46");
const button47 = document.getElementById("button47");
const button48 = document.getElementById("button48");
const button49 = document.getElementById("button49");




function playmusic1() {
    console.log("function is working");
    if (!music1Playing) {

closeall();

        music1.play();



        music1Playing = true;
      button1.src = 'elements/pause.png';


    } else {
        music1.pause();
        button1.src = 'elements/play.png';
       
        music1Playing = false;
    }
}
function playmusic2() {
    
    if (!music2Playing) {
        closeall();
        music2.play();
        music2Playing = true;
      button2.src = 'elements/pause.png';

    } else {
        music2.pause();
        button2.src = 'elements/play.png';
        
        music2Playing = false;
    }
}

function playmusic3() {
    
    if (!music3Playing) {
        closeall();
        music3.play();
        music3Playing = true;
      button3.src = 'elements/pause.png';

    } else {
        music3.pause();
        button3.src = 'elements/play.png';
        
        music3Playing = false;
    }
}
function playmusic4() {
    
    if (!music4Playing) {
        closeall();
        music4.play();
        music4Playing = true;
      button4.src = 'elements/pause.png';

    } else {
        music4.pause();
        button4.src = 'elements/play.png';

        music4Playing = false;
    }
}
function playmusic5() {
    if (!music5Playing) {
        closeall();
        music5.play();
        music5Playing = true;
        button5.src = 'elements/pause.png';
    } else {
        music5.pause();
        button5.src = 'elements/play.png';
    
        music5Playing = false;
    }
}

function playmusic6() {
    if (!music6Playing) {
        closeall();
        music6.play();
        music6Playing = true;
        button6.src = 'elements/pause.png';
    } else {
        music6.pause();
        button6.src = 'elements/play.png';
      
        music6Playing = false;
    }
}



function playmusic7() {
    if (!music7Playing) {
        closeall();
        music7.play();
        music7Playing = true;
        button7.src = 'elements/pause.png';
    } else {
        music7.pause();
        button7.src = 'elements/play.png';
      
        music7Playing = false;
    }
}

function playmusic8() {
    if (!music8Playing) {
        closeall();
        music8.play();
        music8Playing = true;
        button8.src = 'elements/pause.png';
    } else {
        music8.pause();
        button8.src = 'elements/play.png';
       
        music8Playing = false;
    }
}

function playmusic9() {
    if (!music9Playing) {
        closeall();
        music9.play();
        music9Playing = true;
        button9.src = 'elements/pause.png';
    } else {
        music9.pause();
        button9.src = 'elements/play.png';
  
        music9Playing = false;
    }
}

function playmusic10() {
    if (!music10Playing) {
        closeall();
        music10.play();
        music10Playing = true;
        button10.src = 'elements/pause.png';
    } else {
        music10.pause();
        button10.src = 'elements/play.png';

        music10Playing = false;
    }
}
function playmusic11() {
    if (!music11Playing) {
        closeall();
        music11.play();
        music11Playing = true;
        button11.src = 'elements/pause.png';
    } else {
        music11.pause();
        button11.src = 'elements/play.png';
       
        music11Playing = false;
    }
}

function playmusic12() {
    if (!music12Playing) {
        closeall();
        music12.play();
        music12Playing = true;
        button12.src = 'elements/pause.png';
    } else {
        music12.pause();
        button12.src = 'elements/play.png';
      
        music12Playing = false;
    }
}

function playmusic13() {
    if (!music13Playing) {
        closeall();
        music13.play();
        music13Playing = true;
        button13.src = 'elements/pause.png';
    } else {
        music13.pause();
        button13.src = 'elements/play.png';
      
        music13Playing = false;
    }
}

function playmusic14() {
    if (!music14Playing) {
        closeall();
        music14.play();
        music14Playing = true;
        button14.src = 'elements/pause.png';
    } else {
        music14.pause();
        button14.src = 'elements/play.png';

        music14Playing = false;
    }
}

function playmusic15() {
    if (!music15Playing) {
        closeall();
        music15.play();
        music15Playing = true;
        button15.src = 'elements/pause.png';
    } else {
        music15.pause();
        button15.src = 'elements/play.png';

        music15Playing = false;
    }
}

function playmusic16() {
    if (!music16Playing) {
        closeall();
        music16.play();
        music16Playing = true;
        button16.src = 'elements/pause.png';
    } else {
        music16.pause();
        button16.src = 'elements/play.png';
   
        music16Playing = false;
    }
}

function playmusic17() {
    if (!music17Playing) {
        closeall();
        music17.play();
        music17Playing = true;
        button17.src = 'elements/pause.png';
    } else {
        music17.pause();
        button17.src = 'elements/play.png';
      
        music17Playing = false;
    }
}

function playmusic18() {
    if (!music18Playing) {
        closeall();
        music18.play();
        music18Playing = true;
        button18.src = 'elements/pause.png';
    } else {
        music18.pause();
        button18.src = 'elements/play.png';
     
        music18Playing = false;
    }
}

function playmusic19() {
    if (!music19Playing) {
        closeall();
        music19.play();
        music19Playing = true;
        button19.src = 'elements/pause.png';
    } else {
        music19.pause();
        button19.src = 'elements/play.png';

        music19Playing = false;
    }
}

function playmusic20() {
    if (!music20Playing) {
        closeall();
        music20.play();
        music20Playing = true;
        button20.src = 'elements/pause.png';
    } else {
        music20.pause();
        button20.src = 'elements/play.png';
     
        music20Playing = false;
    }
}
function playmusic21() {
    if (!music21Playing) {
        closeall();
        music21.play();
        music21Playing = true;
        button21.src = 'elements/pause.png';
    } else {
        music21.pause();
        button21.src = 'elements/play.png';
     
        music21Playing = false;
    }
}
function playmusic22() {
    if (!music22Playing) {
        closeall();
        music22.play();
        music22Playing = true;
        button22.src = 'elements/pause.png';
    } else {
        music22.pause();
        button22.src = 'elements/play.png';
   
        music22Playing = false;
    }
}



function playmusic23() {
    if (!music23Playing) {
        closeall();
        music23.play();
        music23Playing = true;
        button23.src = 'elements/pause.png';
    } else {
        music23.pause();
        button23.src = 'elements/play.png';
       
        music23Playing = false;
    }
}

function playmusic24() {
    if (!music24Playing) {
        closeall();
        music24.play();
        music24Playing = true;
        button24.src = 'elements/pause.png';
    } else {
        music24.pause();
        button24.src = 'elements/play.png';

        music24Playing = false;
    }
}
function playmusic25() {
    if (!music25Playing) {
        closeall();
        music25.play();
        music25Playing = true;
        button25.src = 'elements/pause.png';
    } else {
        music25.pause();
        button25.src = 'elements/play.png';
     
        music25Playing = false;
    }
}

function playmusic26() {
    if (!music26Playing) {
        closeall();
        music26.play();
        music26Playing = true;
        button26.src = 'elements/pause.png';
    } else {
        music26.pause();
        button26.src = 'elements/play.png';
 
        music26Playing = false;
    }
}

function playmusic27() {
    if (!music27Playing) {
        closeall();
        music27.play();
        music27Playing = true;
        button27.src = 'elements/pause.png';
    } else {
        music27.pause();
        button27.src = 'elements/play.png';
 
        music27Playing = false;
    }
}

function playmusic28() {
    if (!music28Playing) {
        closeall();
        music28.play();
        music28Playing = true;
        button28.src = 'elements/pause.png';
    } else {
        music28.pause();
        button28.src = 'elements/play.png';
  
        music28Playing = false;
    }
}


function playmusic29() {
    if (!music29Playing) {
        closeall();
        music29.play();
        music29Playing = true;
        button29.src = 'elements/pause.png';
    } else {
        music29.pause();
        button29.src = 'elements/play.png';
      
        music29Playing = false;
    }
}


function playmusic30() {
    if (!music30Playing) {
        closeall();
        music30.play();
        music30Playing = true;
        button30.src = 'elements/pause.png';
    } else {
        music30.pause();

        music30Playing = false;
    }
}




function playmusic31() {
    if (!music31Playing) {
        closeall();
        music31.play();
        music31Playing = true;
        button31.src = 'elements/pause.png';
    } else {
        music31.pause();
        button31.src = 'elements/play.png';
   
        music31Playing = false;
    }
}


function playmusic32() {
    if (!music32Playing) {
        closeall();

        music32.play();
        music32Playing = true;
        button32.src = 'elements/pause.png';
    } else {
        music32.pause();
        button32.src = 'elements/play.png';
   
        music32Playing = false;
    }
}

function playmusic33() {
    if (!music33Playing) {
        closeall();
        music33.play();
        music33Playing = true;
        button33.src = 'elements/pause.png';
    } else {
        music33.pause();
        button33.src = 'elements/play.png';
    
        music33Playing = false;
    }
}


function playmusic34() {
    if (!music34Playing) {
        closeall();
        music34.play();
        button34.src = 'elements/pause.png';
        music34Playing = true;
    } else {
        music34.pause();
        button34.src = 'elements/play.png';
    
        music34Playing = false;
    }
}


function playmusic35() {
    if (!music35Playing) {
        closeall();
        music35.play();
        button35.src = 'elements/pause.png';
        music35Playing = true;
    } else {
        music35.pause();
        button35.src = 'elements/play.png';
    
        music35Playing = false;
    }
}

function playmusic36() {
    if (!music36Playing) {
        closeall();
        music36.play();
        button36.src = 'elements/pause.png';
        music36Playing = true;
    } else {
        music36.pause();
        button36.src = 'elements/play.png';
    
        music36Playing = false;
    }
}
function playmusic37() {
    if (!music37Playing) {
        closeall();
        music37.play();
        button37.src = 'elements/pause.png';
        music37Playing = true;
    } else {
        music37.pause();
        button37.src = 'elements/play.png';
    
        music37Playing = false;
    }
}
function playmusic38() {
    if (!music38Playing) {
        closeall();
        music38.play();
        button38.src = 'elements/pause.png';
        music38Playing = true;
    } else {
        music38.pause();
        button38.src = 'elements/play.png';

        music38Playing = false;
    }
}


function playmusic39() {
    if (!music39Playing) {
        closeall();
        music39.play();
        button39.src = 'elements/pause.png';
        music39Playing = true;
    } else {
        music39.pause();
        button39.src = 'elements/play.png';
     
        music39Playing = false;
    }
}
function playmusic40() {
    if (!music40Playing) {
        closeall();
        music40.play();
        button40.src = 'elements/pause.png';
        music40Playing = true;
    } else {
        music40.pause();
        button40.src = 'elements/play.png';

        music40Playing = false;
    }
}
function playmusic41() {
    if (!music41Playing) {
        closeall();
        music41.play();
        button41.src = 'elements/pause.png';
        music41Playing = true;
    } else {
        music41.pause();
        button41.src = 'elements/play.png';
     
        music41Playing = false;
    }
}

function playmusic42() {
    if (!music42Playing) {
        closeall();
        music42.play();
        button42.src = 'elements/pause.png';
        music42Playing = true;
    } else {
        music42.pause();
        button42.src = 'elements/play.png';
 
        music42Playing = false;
    }
}



function playmusic43() {
    if (!music43Playing) {
        closeall();
        music43.play();
        button43.src = 'elements/pause.png';
        music43Playing = true;
    } else {
        music43.pause();
        button43.src = 'elements/play.png';

        music43Playing = false;
    }
}

function playmusic44() {
    if (!music44Playing) {
        closeall();
        music44.play();
        button44.src = 'elements/pause.png';
        music44Playing = true;
    } else {
        music44.pause();
        button44.src = 'elements/play.png';

        music44Playing = false;
    }
}
function playmusic45() {
    if (!music45Playing) {
        closeall();
        music45.play();
        button45.src = 'elements/pause.png';
        music45Playing = true;
    } else {
        music45.pause();
        button45.src = 'elements/play.png';
    
        music45Playing = false;
    }
}
function playmusic46() {
    if (!music46Playing) {
        closeall();
        music46.play();
        button46.src = 'elements/pause.png';
        music46Playing = true;
    } else {
        music46.pause();
        button46.src = 'elements/play.png';
     
        music46Playing = false;
    }
}
function playmusic47() {
    if (!music47Playing) {
        closeall();
        music47.play();
        button47.src = 'elements/pause.png';
        music47Playing = true;
    } else {
        music47.pause();
        button47.src = 'elements/play.png';
       
        music47Playing = false;
    }
}
function playmusic48() {
    if (!music48Playing) {
        closeall();
        music48.play();
        button48.src = 'elements/pause.png';
        music48Playing = true;
    } else {
        music48.pause();
        button48.src = 'elements/play.png';
    
        music48Playing = false;
    }
}
function playmusic49() {
    if (!music49Playing) {
        closeall();
        music49.play();
        button49.src = 'elements/pause.png';
        music49Playing = true;
    } else {
        music49.pause();
        button49.src = 'elements/play.png';
      
        music49Playing = false;
    }
}
function playmusic50() {
    if (!music50Playing) {
        closeall();
        music50.play();
        button50.src = 'elements/pause.png';
        music50Playing = true;
    } else {
        music50.pause();
        button50.src = 'elements/play.png';
      
        music50Playing = false;
    }
}

function closeall() {
music1.pause();
music2.pause();
music3.pause();
music4.pause();
music5.pause();
music6.pause();
music7.pause();
music8.pause();
music9.pause();
music10.pause();
music11.pause();
music12.pause();
music13.pause();
music14.pause();
music15.pause();
music16.pause();
music17.pause();
music18.pause();
music19.pause();
music20.pause();
music21.pause();
music22.pause();
music23.pause();
music24.pause();
music25.pause();
music26.pause();
music27.pause();
music28.pause();
music29.pause();
music30.pause();
music31.pause();
music32.pause();
music33.pause();
music34.pause();
music35.pause();
music36.pause();
music37.pause();
music38.pause();
music39.pause();
music40.pause();
music41.pause();
music42.pause();
music43.pause();
music44.pause();
music45.pause();
music46.pause();
music47.pause();
music48.pause();
music49.pause();
music50.pause();

button1.src = 'elements/play.png';
button2.src = 'elements/play.png';
button3.src = 'elements/play.png';
button4.src = 'elements/play.png';
button5.src = 'elements/play.png';
button6.src = 'elements/play.png';
button7.src = 'elements/play.png';
button8.src = 'elements/play.png';
button9.src = 'elements/play.png';
button10.src = 'elements/play.png';
button11.src = 'elements/play.png';
button12.src = 'elements/play.png';
button13.src = 'elements/play.png';
button14.src = 'elements/play.png';
button15.src = 'elements/play.png';
button16.src = 'elements/play.png';
button17.src = 'elements/play.png';
button18.src = 'elements/play.png';
button19.src = 'elements/play.png';
button20.src = 'elements/play.png';
button21.src = 'elements/play.png';
button22.src = 'elements/play.png';
button23.src = 'elements/play.png';
button24.src = 'elements/play.png';
button25.src = 'elements/play.png';
button26.src = 'elements/play.png';
button27.src = 'elements/play.png';
button28.src = 'elements/play.png';
button29.src = 'elements/play.png';
button30.src = 'elements/play.png';
button31.src = 'elements/play.png';
button32.src = 'elements/play.png';
button33.src = 'elements/play.png';
button32.src = 'elements/play.png';
button33.src = 'elements/play.png';
button34.src = 'elements/play.png';
button35.src = 'elements/play.png';
button36.src = 'elements/play.png';
button37.src = 'elements/play.png';
button38.src = 'elements/play.png';
button39.src = 'elements/play.png';
button40.src = 'elements/play.png';
button41.src = 'elements/play.png';
button42.src = 'elements/play.png';
button43.src = 'elements/play.png';
button44.src = 'elements/play.png';
button45.src = 'elements/play.png';
button46.src = 'elements/play.png';
button47.src = 'elements/play.png';
button48.src = 'elements/play.png';
button49.src = 'elements/play.png';
button50.src = 'elements/play.png';


 music1Playing = false;
 music2Playing = false;
 music3Playing = false;
 music4Playing = false;
 music5Playing = false;
 music6Playing = false;
 music7Playing = false;
 music8Playing = false;
 music9Playing = false;
 music10Playing = false;
 music11Playing = false;
 music12Playing = false;
 music13Playing = false;
 music14Playing = false;
 music15Playing = false;
 music16Playing = false;
 music17Playing = false;
 music18Playing = false;
 music19Playing = false;
 music20Playing = false;
 music21Playing = false;
 music22Playing = false;
 music23Playing = false;
 music24Playing = false;
 music25Playing = false;
 music26Playing = false;
 music27Playing = false;
 music28Playing = false;
 music29Playing = false;
 music30Playing = false;
 music31Playing = false;
 music32Playing = false;
 music33Playing = false;
 music34Playing = false;
 music35Playing = false;
 music36Playing = false;
 music37Playing = false;
 music38Playing = false;
 music39Playing = false;
 music40Playing = false;
 music41Playing = false;
 music42Playing = false;
 music43Playing = false;
 music44Playing = false;
 music45Playing = false;
 music46Playing = false;
 music47Playing = false;
 music48Playing = false;
 music49Playing = false;
 music50Playing = false;
}