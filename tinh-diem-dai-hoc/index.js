
function tinhdiem(){
    var diemtoan = +document.getElementById("toan").value;
    var diemvan = +document.getElementById("van").value;
    var diemanh = +document.getElementById("anh").value;
    var khuvuc = document.getElementById("khuvuc").value;
    var diemcongkv1 = 0.75;
    var diemcongkv2 = 0.5;
    var diemcongkv2nt = 0.25;
    var diemcongkv3 = 0;
    var is_correct_toan0 = diemtoan >= 0;
    var is_correct_toan10 = diemtoan <=10;
    var is_correct_van0 = diemvan >= 0;
    var is_correct_van10 = diemvan <=10;
    var is_correct_anh0 = diemanh >=0;
    var is_correct_anh10 = diemanh<=10;
    if (is_correct_toan0 && is_correct_toan10 && is_correct_van0 && is_correct_van10
        && is_correct_anh0 && is_correct_anh10){
            switch (khuvuc){
                case "kv1":
                var tong = diemtoan + diemvan + diemanh + diemcongkv1;
                document.getElementById("result").innerHTML = "Tong diem DH khoi D cua ban la: " + tong;
                break;
                case "kv2":
                var tong = diemtoan + diemvan + diemanh + diemcongkv2;
                document.getElementById("result").innerHTML = "Tong diem DH khoi D cua ban la: " + tong;
                break;
                case "kv2nt":
                var tong = diemtoan + diemvan + diemanh + diemcongkv2nt;
                document.getElementById("result").innerHTML = "Tong diem DH khoi D cua ban la: " + tong;
                break;
                case "kv3":
                var tong = diemtoan + diemvan + diemanh + diemcongkv3;
                document.getElementById("result").innerHTML = "Tong diem DH khoi D cua ban la: " + tong;
                break;
            }
            
    }
    else{
        document.getElementById("Hay nhap lai diem");
    }

}
