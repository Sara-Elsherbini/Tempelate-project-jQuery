/* 
var elem=document.getElementById("demo");
console.log(elem);
 */
/* var imgs=document.getElementsByClassName("img-item");
console.log(imgs); */
/* var tags=document.getElementsByTagName("h1");
console.log(tags) */
/* var elemen=Array.from(document.querySelectorAll(".spcial img")) ;
console.log(elemen);

elemen.push("sd"); */
/* 
var elem = document.querySelector(".test");

function changeColor()
{
   //  elem.classList.add("extra");
   elem.classList.remove("rounded-circle")
} 
 */
/* var btn=document.getElementById("btn");

var events=["click","mousemove"];

for(i=0;i<events.length;i++)
{
   btn.addEventListener(events[i], welcome  )
} */

/* 
btn.addEventListener("click", welcome  )
btn.addEventListener("mousemove", welcome  )
  */
/*  
function welcome()
{
window.console.log("welcome back end");
} */
/*النار/<<<======
var myImage=document.getElementById("demo");
document.addEventListener("mousemove",moveImage);

function moveImage(e)
{
myImage.style.left=e.clientX;
myImage.style.top=e.clientY;
}*/

/* 
var quoteContainer=document.getElementById("quote-container")

document.addEventListener("click",changeColor)

function changeColor(e)
{
   var quoteIndex=Math.round(Math.random()*(quotes.length-1))
   var r=Math.round(Math.random()*255);
   var g=Math.round(Math.random()*255);
   var b=Math.round(Math.random()*255);

   document.body.style.backgroundColor=`rgb(${r},${g},${b})`;

   quoteContainer.innerHTML=quotes[quoteIndex];
   quoteContainer.style.left=e.clientX+"px";
   quoteContainer.style.top=e.clientY+"px";

}

 var quotes=['Create a Positive Environment',
 'Celebrate Your Small Wins',
 'Surround Yourself With Motivated People',
 'The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances Unknown If we have the attitude that it’s going to be a great day it usually is Catherine Pulsifier',
 'Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt “Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV'
]
 */
var imgs= document.getElementsByClassName("img-item");
var lightBoxContainer=document.getElementById("lightBoxContainer");
var closeButton=document.getElementById("close");
var nextButton=document.getElementById("next");
var prevButton=document.getElementById("prev");


var lightBoxItem=document.getElementById("lightBoxItem");

for(i=0;i<imgs.length;i++)
{
   imgs[i].addEventListener("click",openLightBox);
}

function openLightBox(evenInfo)
{
var imgSrc= evenInfo.target.src;
lightBoxContainer.style.display="flex";
lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}


closeButton.addEventListener("click",closeLightBox);
function closeLightBox()
{
   lightBoxContainer.style.display="none";
}



