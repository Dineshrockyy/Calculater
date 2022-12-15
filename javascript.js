

let button=document.querySelectorAll("button");
 for (let i=0;i<button.length;i++){
     button[i].addEventListener("click",calculate);
 }
 let output;
let count=0;

function calculate(){
    let x=this.innerText;
    if(count==0){
    document.getElementById("display").innerHTML="";
    count++;
    }
    if(x == "AC"){
        document.getElementById("display").innerText="0";
        document.getElementById("display1").innerText="Ans:0";
    }else if(x=="DEL"){
        document.getElementById("display").innerText=output.slice(0,-1);
    }else if(x== "="){
            document.getElementById("display1").innerText="Ans:0"
        document.getElementById("display1").innerText=document.getElementById("display1").innerText+eval(output);
        document.getElementById("display1").innerText=document.getElementById("display1").innerText.slice(0,4)+document.getElementById("display1").innerText.slice(5);
    }else{
        if(document.getElementById("display").innerText=="0"){
        document.getElementById("display").innerText="";
        }
        output=document.getElementById("display").innerHTML=document.getElementById("display").innerText+this.innerText;
    }
}

let dott=document.getElementById("mor").addEventListener("click",dot);
function dot(){
    let ele=document.querySelectorAll("button");
    document.getElementById("cal").style.backgroundColor='black'

      document.getElementById("innerclass").style.width='150px'
      document.getElementById("innerclass").style.height='270px'
      document.getElementById("innerclass").style.backgroundColor='#5a5a5a'
      document.getElementById("innerclass").style.position='relative'
      document.getElementById("innerclass").style.top='-290px'
      document.getElementById("innerclass").style.left='10px'
    //document.getElementById("innerclass").style.top='50px'
    
    //ele.style.width="20px";
    //ele.style.height="20px";
    document.getElementById("mor").style.width='35px';
    document.getElementById("mor").style.height='35px';
    document.getElementById("mor").style.position='relative';
    document.getElementById("mor").style.left='5px';
    document.getElementById("mor").style.top='0px';
    document.getElementById("mor").style.right='0px';
    document.getElementById("mor").style.marginRight='0px';
    document.getElementById("mor").style.fontSize='16px';
    for (let i=0;i<ele.length;i++){
        ele[i].style.width='35px';
        ele[i].style.height='35px';
        ele[i].style.position='relative';
        ele[i].style.left='5px';
        ele[i].style.top='0px';
        ele[i].style.right='0px';
        ele[i].style.marginRight='0px';
    }
    document.getElementById("+").style.left='94px'
    document.getElementById("7").style.left='-40px'
    document.getElementById("8").style.left='-40px'
    document.getElementById("-").style.left='51px'
    document.getElementById("4").style.left='-40px'
    document.getElementById("/").style.left='94px'
    document.getElementById("mor").style.left='-40px'
    document.getElementById("0").style.left='-40px'
    //document.getElementById("=").style.position='relative'
    document.getElementById("button1").style.left='160px'
    document.getElementById("button1").style.top='-55px'
    document.getElementById("button1").style.width='100px'
    document.getElementById("DEL").style.fontSize='16px'
    document.getElementById("cos").style.display='block'
    document.getElementById("cos").style.left='10px'
    document.getElementById("cos").style.top='20px'
    document.getElementById("cos").style.width='60px'
    document.getElementById("log").style.display='block'
    document.getElementById("log").style.width='60px'
    document.getElementById("log").style.top='-20px'
    document.getElementById("log").style.left='90px'
    document.getElementById("sin").style.display='block'
    document.getElementById("sin").style.width='60px'
    document.getElementById("sin").style.top='-60px'
    document.getElementById("sin").style.left='170px'
    document.getElementById("tan").style.display='block'
    document.getElementById("tan").style.width='60px'
    document.getElementById("tan").style.top='50px'
    document.getElementById("tan").style.left='180px'
    document.getElementById("fb").style.display='block'
    document.getElementById("fb").style.width='40px'
    document.getElementById("fb").style.top='-140px'
    document.getElementById("fb").style.left='240px'
    document.getElementById("lb").style.display='block'
    document.getElementById("lb").style.left='230px'
    document.getElementById("lb").style.top='-130px'
    document.getElementById("dott").style.display='block'
    document.getElementById("dott").style.left='180px'
    document.getElementById("dott").style.top='-170px'
    document.getElementById("n").style.display='block'
    document.getElementById("n").style.left='180px'
    document.getElementById("n").style.top='-160px'
    document.getElementById("in").style.display='block'
    document.getElementById("in").style.left='230px'
    document.getElementById("in").style.top='-200px'
}
