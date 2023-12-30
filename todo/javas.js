let button=document.querySelectorAll(".button")
let s=document.querySelector(".search")
let b=document.getElementsByClassName("bu")
let number=0;


console.log(s.value);
Array.from(button).forEach(bu=>{
    
    bu.addEventListener("click",(e)=>{
        number+=1;
        
        var myDiv = document.getElementById("add1");
       let div=document.createElement("div")
    div.style.display='grid'
    div.style.width='95vw'
    div.style.borderTop="solid 1px white"

    div.style.gridTemplateColumns='20vw 20vw 20vw 10vw 20vw'
    let data=document.querySelector('.dateinput')
    let time=document.querySelector('.timeinput')

    console.log(data)
       div.innerHTML=`<p class="center">${number}</p><p class="center">${s.value}</p><p class="center">${data.value}</p><p class="center">${time.value}</p><button class='bu'>X</button>`
      myDiv.appendChild(div)
       s.value="";
    Array.from(b).forEach(bt=>{
        bt.addEventListener("click",(e)=>{
         let parent=e.target.parentNode;
         parent.remove();
         
    })
})

       
       

       

})
})

