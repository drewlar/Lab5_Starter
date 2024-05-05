// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  const jsConfetti = new JSConfetti();
  const hornSelector = document.querySelector("#horn-select");
  const hornImage = document.querySelector("#expose > header + img");
  const hornSound = document.querySelector("audio");
  const hornSoundPlayer = document.querySelector("button");
  const hornSoundSlider = document.querySelector("#volume");
  const speakerImage = document.querySelector("#volume + img")
  hornSound.volume = hornSoundSlider.value / 100;

  hornSelector.addEventListener("change", (e) => {
    hornImage.src = 'assets/images/' + e.target.value + '.svg';
    hornSound.src = 'assets/audio/' + e.target.value +'.mp3';
  });
  hornSoundSlider.addEventListener("change", (e) => {
    let soundVolume = e.target.value / 100;
    if(soundVolume == 0){
      speakerImage.src = "assets/icons/volume-level-0.svg";
    }else if(soundVolume < .33){
      speakerImage.src = "assets/icons/volume-level-1.svg";
    }else if(soundVolume < .67){
      speakerImage.src = "assets/icons/volume-level-2.svg";
    }else{
      speakerImage.src = "assets/icons/volume-level-3.svg";
    }
    hornSound.volume = soundVolume;
  });
 hornSoundPlayer.addEventListener("click", () => {
   hornSound.play();
   if(hornSelector.options[hornSelector.selectedIndex].value == 'party-horn'){
     jsConfetti.addConfetti();
   }
 });
}