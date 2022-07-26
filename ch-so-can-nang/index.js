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
        
    }
}

