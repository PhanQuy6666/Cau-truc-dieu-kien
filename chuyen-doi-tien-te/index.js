function convert(){
    var amount = +document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var is_correct_fromvnd = from == "vnd";
    var is_correct_fromusd = from == "usd";
    var is_correct_tousd = to == "usd";
    var is_correct_tovnd = to == "vnd";
    if (is_correct_fromvnd && is_correct_tousd){
        var result = amount / 23000;
        document.getElementById("result").innerHTML = "Result : " + result + " USD"; 
    }
    else{
        if (is_correct_fromusd && is_correct_tovnd){
            var result = amount * 23000;
            document.getElementById("result").innerHTML = "Result : " + result + " VND"; 
        }
        else{
            if (is_correct_fromvnd && is_correct_tovnd){
                var result = amount ;
                document.getElementById("result").innerHTML = "Result : " + result + " VND"; 
            }    
            else{
                var result = amount ;
                document.getElementById("result").innerHTML = "Result : " + result + " USD"; 
            }
        }
    }
}