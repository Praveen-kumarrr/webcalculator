var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var Addbtn = document.getElementById("add");
var Subbtn = document.getElementById("sub");
var Mulbtn = document.getElementById("multi");
var Divbtn = document.getElementById("div");
var printResult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
Addbtn.addEventListener("click", AddNumbers);
function SubNumb() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
Subbtn.addEventListener("click", SubNumb);
function MulNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
Mulbtn.addEventListener("click", MulNumber);
function DivNum() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
Divbtn.addEventListener("click", DivNum);
