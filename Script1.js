// JavaScript source code

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImageSource1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

//Dice 2
var randomNumber2=Math.round(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2)
{
   document.querySelector("h1").innerHTML="Player1 Wins! &#127937";

}else
if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2 Wins! &#127937" ;
    }else 
    {
        document.querySelector("h1").innerHTML=" &#127922 Draw &#127922" ;
        }