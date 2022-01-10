//function getcountry(){
//    var select=document.getElementById("list");
//   var newOption=document.createElement("option");
//    newOption.text=document.getElementById("textbox").value;
//   select.add(newOption);
//}
function add(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)+parseInt(num2);
    console.log(result);

    document.getElementsByClassName("output")[0].innerHTML="Addition is "+result;
}
function subtract(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)-parseInt(num2);
    console.log(result);

    document.getElementsByClassName("output")[0].innerHTML="Substraction is "+result;
}
function multiply(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)*parseInt(num2);
    console.log(result);

    document.getElementsByClassName("output")[0].innerHTML="Multiplication is "+result;
}
function divide(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)/parseInt(num2);
    console.log(result);

    document.getElementsByClassName("output")[0].innerHTML="Division is "+result;
}


