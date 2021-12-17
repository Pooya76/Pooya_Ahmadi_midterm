var splide = new Splide( '.splide', {
  perPage: 2,
  perMove: 1,
} );
splide.mount();

var i =0;
var maxBar = [100,100, 80, 65];
function move() {
  var elem = document.getElementById("progressBar" + (i + 1));   
  var width = 1;

  var id = setInterval(frame, 10);
  function frame() {
    if (width >= maxBar[i]) {
      clearInterval(id);
	  i++;
	  if(i < 4){
		 move();  
	  }
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}

window.onload = move();