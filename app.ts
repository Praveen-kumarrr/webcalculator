const number1=document.getElementById("num1")! as HTMLInputElement;
const number2=document.getElementById("num2")! as HTMLInputElement;

const Addbtn=document.getElementById("add") as HTMLButtonElement;
const Subbtn=document.getElementById("sub") as HTMLButtonElement;
const Mulbtn=document.getElementById("multi") as HTMLButtonElement;
const Divbtn=document.getElementById("div") as HTMLButtonElement;

const printResult=document.getElementById("result") as HTMLOutputElement;

function AddNumbers(){
 let a=parseFloat(number1.value) ;  
 let b=parseFloat(number2.value);
 let result=a+b;
 printResult.textContent=result.toString()
}
Addbtn.addEventListener("click",AddNumbers)

function SubNumb(){
    let a=parseFloat(number1.value) ;  
    let b=parseFloat(number2.value);
    let result=a-b;
    printResult.textContent=result.toString()
   }
   Subbtn.addEventListener("click",SubNumb)

   function MulNumber(){
    let a=parseFloat(number1.value) ;  
    let b=parseFloat(number2.value);
    let result=a*b;
    printResult.textContent=result.toString()
   }
   Mulbtn.addEventListener("click",MulNumber)

   function DivNum(){
    let a=parseFloat(number1.value) ;  
    let b=parseFloat(number2.value);
    let result=a/b;
    printResult.textContent=result.toString()
   }
   Divbtn.addEventListener("click",DivNum)