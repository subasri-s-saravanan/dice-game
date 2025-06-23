var b=Math.floor(Math.random()*6+1);
var a=Math.floor(Math.random()*6+1);
alert(b);
document.querySelector(".img1").setAttribute("src","images/dice"+b+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+a+".png");
if(b>a){
document.querySelector("h1").innerHTML="Player1wins";
}
else{
document.querySelector("h1").innerHTML="Player2wins";
}


