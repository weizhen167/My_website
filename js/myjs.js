
/*function getRandomColor() {
  
  var str16=(Math.random() * 0x1000000 << 0).toString(16);
  function done(h) {
    return new Array(7 - h.length).join("0") + h
  }
  var perfectStr=done(str16);
  var random_color = '#'+perfectStr;
  var tt0 = document.getElementById('title00');
  var tt1 = document.getElementById('title01');
  tt0.style.color=random_color;
  tt1.style.color=random_color;
}
//console.log(getRandomColor());*/



function getRandomColor_liyu() {

var Arr = ["#381611","#F4A340","#F45540"];  
var random_color = Arr[Math.floor(Math.random() * Arr.length + 1)-1];  
var tt1 = document.getElementById('title01');
tt1.style.color=random_color;
}

function bannerPageFlash(){
    window.setInterval("getRandomColor_liyu()",700);
}
window.onload = bannerPageFlash;

