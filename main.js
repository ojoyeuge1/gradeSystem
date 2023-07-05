function add1(){
    document.getElementById("result1").innerHTML = Number(document.getElementById("a").value) + Number(document.getElementById("b").value) + Number(document.getElementById("c").value);
}

function add2(){
    document.getElementById("result2").innerHTML = Number(document.getElementById("d").value) + Number(document.getElementById("e").value) + Number(document.getElementById("f").value);
}

function add3(){
    document.getElementById("result3").innerHTML = Number(document.getElementById("g").value) + Number(document.getElementById("h").value) + Number(document.getElementById("i").value);
}

function add4(){
    document.getElementById("result4").innerHTML = Number(document.getElementById("j").value) + Number(document.getElementById("k").value) + Number(document.getElementById("l").value);
}

 var resultOne = document.getElementById("dis1");

function average(){
    resultOne.innerHTML = (Number(document.getElementById("result1").innerHTML) + Number(document.getElementById("result2").innerHTML) + Number(document.getElementById("result3").innerHTML) + Number(document.getElementById("result4").innerHTML)) / 4;
    document.getElementById("dis1").innerHTML = "Dear " + document.getElementById("firstName").value + " "+ document.getElementById("lastName").value + " your average score is " + resultOne.innerHTML;
}

function percentage(){
    document.getElementById("dis2").innerHTML  = "Percentage : " + (Number(document.getElementById("result1").innerHTML) + Number(document.getElementById("result2").innerHTML) + Number(document.getElementById("result3").innerHTML) + Number(document.getElementById("result4").innerHTML)) / 400 * 100 + " % " 
}

function grade(){
    var Grade = (Number(document.getElementById("result1").innerHTML) + Number(document.getElementById("result2").innerHTML) + Number(document.getElementById("result3").innerHTML) + Number(document.getElementById("result4").innerHTML)) / 4;
    if(Grade <= 100 && Grade >= 80){
        document.getElementById("dis3").innerHTML = "Grade is A";
    } else if(Grade <= 79 && Grade >= 60){
        document.getElementById("dis3").innerHTML = "Grade is B";
    } else if(Grade <= 59 && Grade >= 40){
        document.getElementById("dis3").innerHTML = "Grade is C";
    } else if(Grade <= 39 && Grade >= 30){
        document.getElementById("dis3").innerHTML = "Grade is E";
    } else{
        document.getElementById("dis3").innerHTML = "Grade is F";
    }        
}

function remark(){
    var Remark = (Number(document.getElementById("result1").innerHTML) + Number(document.getElementById("result2").innerHTML) + Number(document.getElementById("result3").innerHTML) + Number(document.getElementById("result4").innerHTML)) / 4;
    if (Remark <= 100 && Remark >= 50){
        document.getElementById("dis4").innerHTML = "Congrastulation you have PASSED";
    } else{
        document.getElementById("dis4").innerHTML = " You have been advised to reset for the examination";
    }
}

function reset(){
    document.getElementById("firstName").value = " ";
    document.getElementById("lastName").value = " ";
    document.getElementById("s1").value = " ";
    document.getElementById("s2").value = " ";
    document.getElementById("s3").value = " ";
    document.getElementById("s4").value = " ";
    document.getElementById("a").value = " ";
    document.getElementById("b").value = " ";
    document.getElementById("c").value = " ";
    document.getElementById("d").value = " ";
    document.getElementById("e").value = " ";
    document.getElementById("f").value = " ";
    document.getElementById("g").value = " ";
    document.getElementById("h").value = " ";
    document.getElementById("i").value = " ";
    document.getElementById("j").value = " ";
    document.getElementById("k").value = " ";
    document.getElementById("l").value = " ";
    document.getElementById("result1").innerHTML = " ";
    document.getElementById("result2").innerHTML = " ";
    document.getElementById("result3").innerHTML = " ";
    document.getElementById("result4").innerHTML = " ";
    document.getElementById("dis1").innerHTML = " ";
    document.getElementById("dis2").innerHTML =" ";
    document.getElementById("dis3").innerHTML = " ";
    document.getElementById("dis4").innerHTML = " ";
}