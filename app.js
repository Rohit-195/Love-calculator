const firstName=document.getElementById("first-name");
const secondName=document.getElementById("second-name");
const loveBtn=document.getElementById("love");
const para=document.getElementById("result");

let num=Math.floor(Math.random()*35)+65;

loveBtn.addEventListener("click",()=>{
    console.log("clicked");
    para.innerText=firstName.value+ " and "+secondName.value + " Love percentage is "+ num+ "%";
})
