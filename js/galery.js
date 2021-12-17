
var i = 0;
var picrureUrls = [ './Pics/AC.png'  , './Pics/Alliance.png', './Pics/Bulre.png', './Pics/COD.png', './Pics/Dignitas.png',
					'./Pics/Envy.png', './Pics/Horde.png'   , './Pics/LOL.png'  , './Pics/LOS.png', './Pics/MK.png',
					'./Pics/ND.png'  , './Pics/Pssonix.png' , './Pics/RL.png'   , './Pics/Walhalla.png', './Pics/WOW.png']

var size = document.getElementsByClassName("grid_col")[0].offsetHeight;


for(var k = 1; k < 16; k++){
document.getElementById("grid_pic" + k).src = picrureUrls[i];
document.getElementById("grid_pic" + k).height = size;
document.getElementById("grid_pic" + k).width = size ;
document.getElementById("grid_pic" + k).style.transition = "0.5s all ease-in-out";

i++;
}
