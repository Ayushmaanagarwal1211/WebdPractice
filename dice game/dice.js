let arr=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
let a=Math.floor(Math.random()*6);
console.log(a);
let b=Math.floor(Math.random()*6);
var doocument=document.querySelector("#q");
var doocument1=document.getElementById("q1");
doocument.setAttribute("src",arr[a])
doocument1.setAttribute("src",arr[b])
if(a>b){
    document.querySelector("h1").innerText="player 1 wins"
}
else if(b>a){
    document.querySelector("h1").innerText="player 2 wins"

}
else{
    document.querySelector("h1").innerText="Draw"

}
