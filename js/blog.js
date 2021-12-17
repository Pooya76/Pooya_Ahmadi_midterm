var j = 2;
var i = 0;
var picrureUrls = [ './Pics/AC.png'  , './Pics/Alliance.png', './Pics/Bulre.png', './Pics/COD.png', './Pics/Dignitas.png',
					'./Pics/Envy.png', './Pics/Horde.png']

var size = document.getElementsByClassName("grid_col")[0].offsetWidth;
var sizeH = document.getElementsByClassName("grid_col")[0].offsetHeight;


for(var k = 1; k < 8; k++){
document.getElementById("grid_pic" + k).src = picrureUrls[i];
document.getElementById("grid_pic" + k).height = (sizeH/3);
document.getElementById("grid_pic" + k).width = (size/2) ;
document.getElementById("grid_pic" + k).style.transition = "0.5s all ease-in-out";

i++;
}