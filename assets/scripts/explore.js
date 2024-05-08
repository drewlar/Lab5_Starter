// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const smilePicture = document.querySelector('#explore > img');
  const textBox =  document.querySelector('#text-to-speak');
  const pressToTalkButton = document.querySelector('#voice-select + button');
  const voiceSelectList = document.querySelector('#voice-select');
  const voicesList = speechSynthesis.getVoices();
  const sayThis = new SpeechSynthesisUtterance();
  for( let i = 0; i<voicesList.length; i++){
    voiceSelectList.add(
        new Option(voicesList[i].name + '(' + voicesList[i].lang + ')')
        );
  }
  pressToTalkButton.addEventListener('click', () => {
    sayThis.text = textBox.value;
    sayThis.voice = voicesList[voiceSelectList.selectedIndex - 1]
    speechSynthesis.speak(sayThis);

  });
  sayThis.addEventListener('start', () =>{
    smilePicture.src = 'assets/images/smiling-open.png';
  });
  sayThis.addEventListener('end', () =>{
    smilePicture.src = 'assets/images/smiling.png';
  });
}