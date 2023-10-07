let input = document.querySelector('#input');
let play_button = document.querySelector('#play_button');
let result = document.querySelector('#result');
let lostmassage = document.querySelector('#lostmassage');
play_button.addEventListener('click', function () {
    var random = Math.floor(Math.random() * 7) + 1;
    var inputValue = input.value;
    if (inputValue == '' || inputValue == 0) {
        result.innerHTML = 'Please Input Valid Number'
        var audio = new Audio('../audio/invalid.wav');
        audio.play();
    } else if (inputValue > 7) {
        result.innerHTML = 'Please input less than 7 !'
        var audio = new Audio('../audio/invalid.wav');
        audio.play();
    } else if (inputValue == random) {
        result.innerHTML = 'You are Win !!'
        var audio = new Audio('../audio/win.wav');
        audio.play();
    } else {
        result.innerHTML = 'You are lose Random Number Is ' + random;
        var audio = new Audio('../audio/lose.mp3');
        audio.play();
    }
})