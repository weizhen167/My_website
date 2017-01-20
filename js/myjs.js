
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
//console.log(getRandomColor());


function setRandomColor_liyu() {

var Arr = ["#381611","#F4A340","#F45540"];  
var random_color = Arr[Math.floor(Math.random() * Arr.length + 1)-1];  
var tt1 = document.getElementById('title01');
tt1.style.color=random_color;
}

function setTitleText() {
var Arr = ["你好","Hello","Bonjour"];  
var add = Arr[Math.floor(Math.random() * Arr.length + 1)-1];
var tt1 = document.getElementById('title-text');
tt1.innerHTML=add;
}


function clockBanner(){ 
	var dates = document.getElementById("dates");
	
	dates.innerHTML=new Date().toLocaleString();
} 

function bannerPageFlash(){
	window.setInterval("clockBanner()",1000); 
	window.setInterval("setTitleText()",3000);
    window.setInterval("setRandomColor_liyu()",700);
}

window.onload = bannerPageFlash;

*/



$("#submit-button").click(function(event) {
	var a = $("#user-email").val()
	var b = $("#user-name").val()
	var c = $("#user-context").val()
	$.ajax({
	type:'post',
	url:"../js/submit.php",
	data:{email:a,name:b,message:c},
	success: function(data){
		alert(data)
	}
	}); 
});


$(".blkbutton.weixin").mouseover(function(){
		$(".weixin_QRcode").show("fast");
	$(".blkbutton.weixin").mouseout(function(){
		$(".weixin_QRcode").hide("slow");
});
});



