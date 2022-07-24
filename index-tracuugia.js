function xemgia(){
    var loaiqua = document.getElementById("hoaqua").value;
    var giaoi = "20k";
    var giaduahau = "20k";
    var giatao = "30k";
    var giaxoai = "30k";
    var giacam = "40k";
    var giachomchom = "40k";
    var giamangcut = "50k";
    switch (loaiqua) {
        case "Oi":
        document.getElementById("result").innerHTML = giaoi + " VND/kg";
        break;
        case "oi":
        document.getElementById("result").innerHTML = giaoi + " VND/kg";
        break;
        case "Dua hau":
        document.getElementById("result").innerHTML = giaduahau + " VND/kg";
        break;
        case "dua hau":
        document.getElementById("result").innerHTML = giaduahau + " VND/kg";
        break;
        case "tao":
        document.getElementById("result").innerHTML = giatao + " VND/kg";
        break;
        case "Tao":
        document.getElementById("result").innerHTML = giatao + " VND/kg";
        break;
        case "xoai":
        document.getElementById("result").innerHTML = giaxoai + " VND/kg";
        break;
        case "Xoai":
        document.getElementById("result").innerHTML = giaxoai + " VND/kg";
        break;
        case "cam":
        document.getElementById("result").innerHTML = giacam + " VND/kg";
        break;
        case "Cam":
        document.getElementById("result").innerHTML = giacam + " VND/kg";
        break;
        case "Chom chom":
        document.getElementById("result").innerHTML = giachomchom + " VND/kg";
        break;
        case "chom chom":
        document.getElementById("result").innerHTML = giachomchom + " VND/kg";
        break;
        case "Mang cut":
        document.getElementById("result").innerHTML = giamangcut + " VND/kg";
        break;
        case "mang cut":
        document.getElementById("result").innerHTML = giamangcut + " VND/kg";
        break;

        default:
        document.getElementById("result").innerHTML = "Hay nhap lai loai qua";
    }
}