var i = 0;
var j = 0;
var txt = [ "beautiful logo.", "successful brand.", "thriving business."];
var speed = 100;

var beginningText = "Hi! I am Max and this is my portfolio. I can help you build a ";
var endText = " Don\'t be shy, get in touch!";

var dynamicTxt = document.getElementById("dynamic");
var addedText = "";

function typeWriter() {
	
  if (i < txt[j].length) {
	addedText += txt[j].charAt(i);
    dynamicTxt.innerHTML = beginningText + addedText + endText;	
    i++;
    setTimeout(typeWriter, speed);
  }else{
		dynamicTxt.innerHTML = beginningText +'<mark>' + addedText + '</mark>' + endText;
		setTimeout(() => {
		dynamicTxt.innerHTML = beginningText + endText;
		i = 0;
		if( j < 2){
			j++;
		}else{
			j = 0;
		}
		addedText = "";
		setTimeout(() => {typeWriter();}, 1000);
		}, 3000);
	} 
}

window.onload = typeWriter();
	

