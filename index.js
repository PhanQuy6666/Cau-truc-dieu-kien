let diemtrungbinh = +prompt("Nhap diem trung binh cua ban: ");
var is_correct_check = diemtrungbinh > 0;
var is_correct_check1 = diemtrungbinh < 10;
var is_correct_khongdat = diemtrungbinh < 5;
var is_correct_dat = diemtrungbinh < 7;

if (is_correct_check&&is_correct_check1){
    if(is_correct_khongdat){
        alert("Khong dat")
    }
    else   {
        if(is_correct_dat){
            alert("Dat");
        }
        
    
            else{
            alert("Tot");
            }              
    }
}
    

else{
    document.getElementById("result").innerHTML="Hay tai lai trang";
}
