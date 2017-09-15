const morty = document.querySelector("#morty");
morty.play();

window.addEventListener('keydown', function(e){
  const balls = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!balls) return;
  //every time key is pressed, restart audio file to beginning.
  //otherwise, js waits until audio clip is done playing to restart.
  balls.currentTime = 0;
  balls.play();
  //console.log(audio);
});
