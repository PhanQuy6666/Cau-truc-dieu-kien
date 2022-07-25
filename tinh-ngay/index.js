function tinh(){
    var thang = document.getElementById("thang").value;
    var is_correct_thang0 = thang > 0;
    var is_correct_thang12 = thang < 13;
    
        switch (thang){
            case "1":
            document.getElementById("result").innerText = "Thang " + thang + " co 31 ngay";
            break;
            case "3":
            document.getElementById("result").innerText = "Thang " + thang + " co 31 ngay";
            break;
            case "5":
            document.getElementById("result").innerText = "Thang " + thang + " co 31 ngay";
            break;
            case "7":
            document.getElementById("result").innerText = "Thang " + thang + " co 31 ngay";
            break;
            case "8":
            document.getElementById("result").innerText = "Thang " + thang + " co 31 ngay";
            break;
            case "10":
            document.getElementById("result").innerText = "Thang " + thang + " co 31 ngay";
            break;
            case "12":
            document.getElementById("result").innerText = "Thang " + thang + " co 31 ngay";
            break;
            case "2":
            document.getElementById("result").innerText = "Thang " + thang + " co 28 ngay hoac 29 ngay";
            break;
            case "4":
            document.getElementById("result").innerText = "Thang " + thang + " co 30 ngay";
            break;
            case "6":
            document.getElementById("result").innerText = "Thang " + thang + " co 30 ngay";
            break;
            case "9":
            document.getElementById("result").innerText = "Thang " + thang + " co 30 ngay";
            break;
            case "11":
            document.getElementById("result").innerText = "Thang " + thang + " co 30 ngay";
            break;
                
            default:
                document.getElementById("result").innerHTML = "Hay nhap lai thang";
        }
    
  
}
   