function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}
//function pausebackgroundmusic() {
  //  document.getElementById('bgMusic').pause();
//
//}
//function resumebackgroundmusic() {
//    document.getElementById('bgMusic').onplay();
//}//

var audio = document.getElementById('bgmusic');
audio.addEventListener('play',function(){
    console.log('background music is playing.');

});
audio.addEventListener('error',function(){
    console.error('error playing background music.');
});