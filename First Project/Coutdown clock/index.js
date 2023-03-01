var endDate= "27 Febuary 2023 10:06 PM";
document.querySelector(".heading").innerHTML=endDate;
var input= document.querySelectorAll("input")

function clock(){
    const end= new Date(endDate);
    const now= new Date();
    const diff= (end-now)/1000;
    if(diff<0) return;
    input[0].value =Math.floor(diff/3600/24);
    input[1].value =Math.floor(diff/3600)%24;
    input[2].value =Math.floor(diff/60)%60;
    input[3].value =Math.floor(diff)%60;
    
}
clock();

setInterval(
    ()=>{
        clock();
    }
)