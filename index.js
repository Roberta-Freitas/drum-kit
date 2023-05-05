let drums = document.querySelectorAll('.drum');

function playSound(sound) {
  var audio = new Audio(sound);
  audio.play();
}

drums.forEach((drum) => {
  drum.addEventListener('click', function() {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        playSound('sounds/tom-1.mp3');
        break;
      case "a":
        playSound('sounds/tom-2.mp3');
        break;
      case "s":
        playSound('sounds/tom-3.mp3');
        break;
      case "d":
        playSound('sounds/tom-4.mp3');
        break;
      case "j":
        playSound('sounds/snare.mp3');
        break;
      case "k":
        playSound('sounds/crash.mp3');
        break;
      case "l":
        playSound('sounds/kick-bass.mp3');
        break;
      default:
        console.log('buttonInnerHTML');
    }
  });
});
