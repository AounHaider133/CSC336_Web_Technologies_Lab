$(document).ready(function () {
  var drumButtons = $(".drum");
  var numberOfDrumButtons = drumButtons.length;

  for (var i = 0; i < numberOfDrumButtons; i++) {
    drumButtons[i].addEventListener("click", function () {
      makeSound(this.innerHTML);
      buttonAnimation(this.innerHTML);
    });
  }

  document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
  function playAudio(filePath) {
    var audio = new Audio(filePath);
    audio.play();
  }

  function makeSound(key) {
    switch (key) {
      case "w":
        playAudio("sounds/tom-1.mp3");
        break;

      case "a":
        playAudio("sounds/tom-2.mp3");
        break;

      case "s":
        playAudio("sounds/tom-3.mp3");
        break;

      case "d":
        playAudio("sounds/tom-4.mp3");
        break;

      case "j":
        playAudio("sounds/crash.mp3");
        break;

      case "k":
        playAudio("sounds/kick-bass.mp3");
        break;

      case "l":
        playAudio("sounds/snare.mp3");
        break;
    }
  }
  var validKeys = ["w", "a", "s", "d", "j", "k", "l"];
  function buttonAnimation(currentKey) {
    if ($.inArray(currentKey, validKeys) !== -1) {
      var activeButton = $("." + currentKey);
      activeButton.addClass("pressed");

      setTimeout(function () {
        activeButton.removeClass("pressed");
      }, 100);
    }
  }
});
