function test(){
    alert("JS maravilhoso vitaminado funcionando");
}

function calcula(){
    //criar variavel
    let num1;
    //recebe texto do html
    num1=document.getElementById("numero1").value;
    //transforma texto em numero real
    let num1real=parseFloat(num1);

    let num2;
    num2=document.getElementById("numero2").value;
    //transformar texto para numero real
    let num2real=parseFloat(num2);

    let result;
    result=num1real+num2real;//atualizar nomes variaveis

    document.getElementById("resultado").innerHTML=result;
}