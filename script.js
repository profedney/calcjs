function test(){
    alert("JS maravilhoso vitaminado funcionando");
}

function calcula(){
    let num1;
    num1=document.getElementById("numero1").value;
    let num2;
    num2=document.getElementById("numero2").value;
    let result;
    result=num1+num2;

    document.getElementById("resultado").innerHTML=result;
}