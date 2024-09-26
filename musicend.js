const musics = [];
const buttons = [];

// Loop to assign music and button elements to their respective arrays
for (let i = 1; i <= 50; i++) {
    musics.push(document.getElementById(`music${i}`)); // Assuming elements have IDs like 'music1', 'music2', etc.
    buttons.push(document.getElementById(`button${i}`)); // Assuming elements have IDs like 'button1', 'button2', etc.
}

musics.forEach((music, i) => {
   music.addEventListener('ended', () => {
       buttons[i].src = 'elements/play.png';
       console.log("ended");
       music.currentTime = 0;
       musics[(i + 1) % musics.length].play();
       buttons[(i + 1) % buttons.length].src = 'elements/pause.png';
   });
});
