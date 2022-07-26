var chieucao = +prompt("Hay nhap chieu cao  : ");
var cannang = +prompt("Hay nhap can nang :");
var is_correct_chieucao0 = chieucao < 0;
var is_correct_chieucao5 = chieucao > 5;
var is_correct_cannang0 = cannang < 0;
var is_correct_cannang200 = cannang > 200;
if (isNaN(chieucao) || isNaN(cannang)){
    alert("Moi nhap lai");

}
else{
    if (is_correct_cannang0 || is_correct_cannang200 || is_correct_chieucao0 ||
        is_correct_chieucao5){
            alert("Moi nhap lai");
        }
    else{
        var bmi = cannang / (chieucao ^ 2);
    document.getElementById("result").innerText = "BMI cua ban la :" + bmi;
        if (bmi < 16){
            document.getElementById("result2").innerHTML = "Bạn đang Gầy độ III";
        }
        else{
            if (bmi <17){
                document.getElementById("result2").innerHTML = "Bạn đang Gầy độ II";
            }
            else{
                if (bmi <18.5){
                    document.getElementById("result2").innerHTML = "Bạn đang Gầy độ I";
                }
                else{
                    if (bmi <25){
                        document.getElementById("result2").innerHTML = "Bạn có chỉ số bình thường";
                    }
                    else{
                        if (bmi <30){
                            document.getElementById("result2").innerHTML = "Bạn đang Thừa cân đó nha";
                        }
                        else{
                            if (bmi <35){
                                document.getElementById("result2").innerHTML = "Bạn đang Thừa cân độ I";
                            }
                            else{
                                if (bmi <40){
                                    document.getElementById("result2").innerHTML = "Bạn đang Thừa cân độ II";
                                }
                                else{
                                    document.getElementById("result2").innerHTML = "Bạn đang béo phì độ III";
                                }
                            }
                        }
                    }
                }
            }

        }    
    }
}


