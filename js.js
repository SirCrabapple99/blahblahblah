function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
var r = document.querySelector(':root');

function myFunction_set() {
  r.style.setProperty('--sus');
}
let test = "#999999"